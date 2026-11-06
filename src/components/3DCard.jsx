import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from 'react';

// Contexto compartido para que cualquier botón interno pueda controlar la tarjeta 3D
export const Card3DContext = createContext(null);

export const useCard3D = () => {
  const context = useContext(Card3DContext);
  if (!context) {
    return {
      activeIndex: 0,
      isFlipped: false,
      totalFaces: 2,
      flipNext: () => {},
      flipPrev: () => {},
      goToFace: () => {},
      flip: () => {},
      isAnimating: false,
    };
  }
  return context;
};

/**
 * 3DCard (o Card3D)
 * Componente modular de tarjeta 3D de alta fidelidad.
 *
 * Características clave de optimización:
 * - Anti-blur mobile: Cuando está en reposo (idle), desactiva preserve-3d y capas compuestas 3D,
 *   restituyendo renderizado nativo 2D subpixel para que los textos, SVGs e íconos no se vean
 *   borrosos en celulares (ej: 414x896 DPR 3) ni con zooms de navegador.
 * - Activa aceleración 3D por GPU únicamente durante el giro (700ms).
 */
export default function Card3D({
  children,
  className = 'max-w-4xl mx-auto w-full',
  cardClassName = '',
  faceLabels = [],
  showControls,
  controlsPosition = 'top',
  initialFace = 0,
  perspective = '1400px',
  transitionDuration = 700,
  equalHeight = false,
  onFaceChange,
}) {
  const [activeIndex, setActiveIndex] = useState(initialFace);
  const [targetFaceIndex, setTargetFaceIndex] = useState(initialFace);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Referencias para medición de altura y timers
  const flipperRef = useRef(null);
  const slotARef = useRef(null);
  const slotBRef = useRef(null);
  const measureContainerRef = useRef(null);
  const [faceHeights, setFaceHeights] = useState({});
  const animTimeoutRef = useRef(null);

  // Resolver children (soporta render props reactivo con funciones y JSX directo)
  const resolvedChildren = useMemo(() => {
    if (typeof children === 'function') {
      return children({
        activeIndex,
        isFlipped: activeIndex !== 0,
        flipNext: () => {},
        flipPrev: () => {},
        goToFace: () => {},
        flip: () => {},
        isAnimating,
      });
    }
    return children;
  }, [children, activeIndex, isAnimating]);

  const childArray = useMemo(() => {
    return React.Children.toArray(resolvedChildren).filter(Boolean);
  }, [resolvedChildren]);

  const totalFaces = childArray.length || 1;

  // Medición reactiva de la altura individual de cada cara para transición animada
  useEffect(() => {
    const measureAllFaces = () => {
      if (!measureContainerRef.current) return;
      const faceNodes = measureContainerRef.current.children;
      const heights = {};
      for (let i = 0; i < faceNodes.length; i++) {
        const h = faceNodes[i].scrollHeight || faceNodes[i].offsetHeight || 0;
        if (h > 0) heights[i] = h;
      }
      setFaceHeights(heights);
    };

    measureAllFaces();
    const t1 = setTimeout(measureAllFaces, 100);
    const t2 = setTimeout(measureAllFaces, 400);
    const t3 = setTimeout(measureAllFaces, 1200);
    window.addEventListener('resize', measureAllFaces);

    let ro;
    if (typeof ResizeObserver !== 'undefined' && measureContainerRef.current) {
      ro = new ResizeObserver(measureAllFaces);
      ro.observe(measureContainerRef.current);
      Array.from(measureContainerRef.current.children).forEach((child) => {
        ro.observe(child);
      });
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', measureAllFaces);
      if (ro) ro.disconnect();
    };
  }, [childArray]);

  // Limpiar timer al desmontar
  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current);
      }
    };
  }, []);

  // Transición hacia una cara específica
  const goToFace = useCallback(
    (targetIndex, directionOverride) => {
      if (
        targetIndex === activeIndex ||
        targetIndex < 0 ||
        targetIndex >= totalFaces ||
        isAnimating
      ) {
        return;
      }

      // Sentido de giro
      let isForward = targetIndex > activeIndex;
      if (targetIndex === 0 && activeIndex === totalFaces - 1) isForward = true;
      else if (targetIndex === totalFaces - 1 && activeIndex === 0) isForward = false;
      if (typeof directionOverride === 'boolean') isForward = directionOverride;

      // 1. Obtener la altura exacta actual y la altura destino
      const startH = flipperRef.current ? flipperRef.current.offsetHeight : 0;
      let targetH = faceHeights[targetIndex];
      if (measureContainerRef.current && measureContainerRef.current.children[targetIndex]) {
        const measured = measureContainerRef.current.children[targetIndex].scrollHeight;
        if (measured > 0) targetH = measured;
      }
      if (!targetH || targetH <= 0) targetH = startH;

      // 2. Fijar inmediatamente la altura de inicio en píxeles para que la transición CSS pueda interpolar
      if (flipperRef.current && startH > 0) {
        flipperRef.current.style.height = `${startH}px`;
      }

      setTargetFaceIndex(targetIndex);
      setIsAnimating(true);

      // 3. En el siguiente frame, disparar el giro Y la animación fluida de altura hacia targetH
      const targetAngle = isForward ? 180 : -180;
      requestAnimationFrame(() => {
        setRotationAngle(targetAngle);
        if (flipperRef.current && targetH > 0) {
          flipperRef.current.style.height = `${targetH}px`;
        }
      });

      // 4. Al completar los 700ms, asentar el estado en reposo 2D nativo y liberar height a 'auto'
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
      animTimeoutRef.current = setTimeout(() => {
        setActiveIndex(targetIndex);
        setRotationAngle(0);
        setIsAnimating(false);
        if (flipperRef.current) {
          flipperRef.current.style.height = '';
        }
        if (onFaceChange) onFaceChange(targetIndex);
      }, transitionDuration);
    },
    [
      activeIndex,
      totalFaces,
      isAnimating,
      transitionDuration,
      onFaceChange,
      faceHeights,
    ]
  );

  // Navegación
  const flipNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % totalFaces;
    goToFace(nextIdx, true);
  }, [activeIndex, totalFaces, goToFace]);

  const flipPrev = useCallback(() => {
    const prevIdx = (activeIndex - 1 + totalFaces) % totalFaces;
    goToFace(prevIdx, false);
  }, [activeIndex, totalFaces, goToFace]);

  const flip = useCallback(() => {
    flipNext();
  }, [flipNext]);

  const isFlipped = activeIndex !== 0;

  // Barra de navegación por defecto si hay 3 o más caras o si se especifica
  const shouldShowControls =
    typeof showControls === 'boolean' ? showControls : totalFaces >= 3;

  // Valor del Contexto disponible para hijos
  const contextValue = useMemo(
    () => ({
      activeIndex,
      isFlipped,
      totalFaces,
      flipNext,
      flipPrev,
      goToFace,
      flip,
      isAnimating,
    }),
    [activeIndex, isFlipped, totalFaces, flipNext, flipPrev, goToFace, flip, isAnimating]
  );

  // Renderizador de controles
  const renderControls = () => {
    if (!shouldShowControls || totalFaces <= 1) return null;

    return (
      <div className="flex flex-col items-center justify-center gap-3 px-4 py-3 rounded-xl bg-surface-dark-indigo/90 border border-dark-subtle backdrop-blur-md shadow-xl mb-4 mt-0 w-full">
        {/* Píldoras de las Caras (Centradas con alto contraste y texto resaltado) */}
        <div className="flex flex-wrap items-center justify-center gap-2 w-full py-0.5">
          {childArray.map((_, idx) => {
            const label = faceLabels[idx] || `Cara ${idx + 1}`;
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => goToFace(idx)}
                disabled={isAnimating}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-bright/30 via-primary/30 to-brand-magenta/25 text-white border border-cyan-bright shadow-[0_0_16px_rgba(25,227,255,0.45)] ring-1 ring-cyan-bright/50'
                    : 'text-slate-200 hover:text-white bg-surface-container-high/60 hover:bg-surface-container-highest border border-white/10 hover:border-white/20'
                } ${isAnimating ? 'opacity-70 cursor-wait' : ''}`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive
                      ? 'bg-cyan-bright shadow-[0_0_8px_#19e3ff] animate-pulse'
                      : 'bg-slate-400'
                  }`}
                />
                <span className="font-semibold">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Flechas y contador CENTRADOS */}
        <div className="flex items-center justify-center gap-3 pt-0.5">
          <button
            type="button"
            onClick={flipPrev}
            disabled={isAnimating}
            aria-label="Cara anterior"
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-surface-container-high/80 hover:bg-surface-container-highest border border-dark-subtle text-text-dark-primary hover:text-cyan-bright hover:border-cyan-bright/50 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shadow-sm"
            title="Cara anterior"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>

          <span className="font-mono text-xs sm:text-sm font-bold px-3.5 py-1 rounded-lg bg-surface-container-high border border-dark-subtle text-text-dark-primary shadow-sm flex items-center">
            <span className="text-cyan-bright font-extrabold">{activeIndex + 1}</span>
            <span className="text-text-dark-muted mx-1.5">/</span>
            <span className="text-text-dark-primary">{totalFaces}</span>
          </span>

          <button
            type="button"
            onClick={flipNext}
            disabled={isAnimating}
            aria-label="Cara siguiente"
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-surface-container-high/80 hover:bg-surface-container-highest border border-dark-subtle text-text-dark-primary hover:text-cyan-bright hover:border-cyan-bright/50 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shadow-sm"
            title="Cara siguiente"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>
    );
  };

  // Contenido de la cara activa y de la cara objetivo
  const currentFaceContent = childArray[activeIndex] || null;
  const incomingFaceContent = childArray[targetFaceIndex] || null;

  return (
    <Card3DContext.Provider value={contextValue}>
      <div className={`3d-card-wrapper isolate ${className}`}>
        {/* Contenedor invisible para medir la altura de cada cara con el ancho real del componente */}
        <div
          ref={measureContainerRef}
          className="w-full pointer-events-none absolute -left-[99999px] top-0 invisible"
          style={{ visibility: 'hidden', zIndex: -100 }}
          aria-hidden="true"
        >
          {childArray.map((child, idx) => (
            <div key={idx} className="w-full">
              {child}
            </div>
          ))}
        </div>

        {controlsPosition === 'top' && renderControls()}

        {/* Contenedor de perspectiva: solo aplica perspectiva 3D cuando está animando */}
        <div
          className="w-full"
          style={{
            perspective: isAnimating ? perspective : undefined,
            WebkitPerspective: isAnimating ? perspective : undefined,
          }}
        >
          {/* Flipper rotatorio con transición suave y animada de altura */}
          <div
            ref={flipperRef}
            className={`w-full relative ${cardClassName}`}
            style={{
              transform: isAnimating ? `rotateY(${rotationAngle}deg)` : 'none',
              transformStyle: isAnimating ? 'preserve-3d' : 'flat',
              WebkitTransformStyle: isAnimating ? 'preserve-3d' : 'flat',
              transition: isAnimating
                ? `transform ${transitionDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1), height ${transitionDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`
                : 'none',
            }}
          >
            {/* SLOT A: En reposo es 2D nativo (transform: none) con máxima nitidez de texto y altura 100% natural.
                       Durante el giro rota a 0° con backface-hidden. */}
            <div
              ref={slotARef}
              className={`w-full ${
                isAnimating
                  ? 'absolute inset-0 h-full card-backface-hidden overflow-hidden'
                  : 'relative z-10 pointer-events-auto'
              }`}
              style={{
                transform: isAnimating ? 'rotateY(0deg) translateZ(1px)' : 'none',
                backfaceVisibility: isAnimating ? 'hidden' : 'visible',
                WebkitBackfaceVisibility: isAnimating ? 'hidden' : 'visible',
              }}
            >
              {currentFaceContent}
            </div>

            {/* SLOT B: Oculto en reposo (display: none).
                       Durante el giro se activa a 180° para revelar la cara entrante en 3D. */}
            {isAnimating && (
              <div
                ref={slotBRef}
                className="w-full absolute inset-0 h-full card-backface-hidden z-0 pointer-events-none overflow-hidden"
                style={{
                  transform: 'rotateY(180deg) translateZ(1px)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {incomingFaceContent}
              </div>
            )}
          </div>
        </div>

        {controlsPosition === 'bottom' && renderControls()}
      </div>
    </Card3DContext.Provider>
  );
}

/**
 * Trigger de conveniencia para botones internos
 */
Card3D.Trigger = function Card3DTrigger({
  children,
  to = 'next',
  className = '',
  ...props
}) {
  const { flipNext, flipPrev, goToFace, isAnimating } = useCard3D();

  const handleClick = (e) => {
    if (props.onClick) props.onClick(e);
    if (isAnimating) return;
    if (to === 'next') flipNext();
    else if (to === 'prev') flipPrev();
    else if (typeof to === 'number') goToFace(to);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isAnimating}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export { Card3D, Card3D as ThreeDCard };
