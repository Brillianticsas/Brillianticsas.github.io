import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback
} from 'react';

// Contexto compartido para que cualquier hijo o botón interno pueda controlar la tarjeta 3D
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
    };
  }
  return context;
};

/**
 * 3DCard (o Card3D)
 * Componente modular de tarjeta 3D con perspectiva física y aceleración GPU.
 * Empaqueta 2 o 3 (o más) `div`s como caras intercambiables.
 *
 * Props:
 * - children: 2 o 3 elementos React (o función render prop).
 * - className: Clases para el contenedor externo (default: "max-w-4xl mx-auto w-full").
 * - cardClassName: Clases adicionales para el elemento giratorio 3D.
 * - faceLabels: Array opcional con nombres de las caras (ej: ['Perfil', 'Stack', 'Certificaciones']).
 * - showControls: Booleano para mostrar u ocultar la barra de navegación integrada.
 *                 (Por defecto: true si hay 3 o más caras, false si hay 2 caras).
 * - controlsPosition: 'top' | 'bottom' (default: 'bottom').
 * - initialFace: Índice inicial (default: 0).
 * - perspective: Perspectiva CSS (default: '1400px').
 * - transitionDuration: Duración del giro en ms (default: 700).
 * - onFaceChange: Callback opcional ejecutado al cambiar de cara: (newIndex) => void.
 */
export default function Card3D({
  children,
  className = 'max-w-4xl mx-auto w-full',
  cardClassName = '',
  faceLabels = [],
  showControls,
  controlsPosition = 'bottom',
  initialFace = 0,
  perspective = '1400px',
  transitionDuration = 700,
  onFaceChange,
}) {
  // 1. Estado de navegación y rotación 3D
  const [activeIndex, setActiveIndex] = useState(initialFace);

  // rotationAngle acumula giros de 180° continuos en múltiplos enteros
  const [rotationAngle, setRotationAngle] = useState(
    initialFace === 1 ? 180 : 0
  );

  // Asignación de caras a los slots A (frontal 0°) y B (posterior 180°)
  const [slotAIndex, setSlotAIndex] = useState(0);
  const [slotBIndex, setSlotBIndex] = useState(1);

  // Referencias para medir y sincronizar altura dinámica
  const flipperRef = useRef(null);
  const slotARef = useRef(null);
  const slotBRef = useRef(null);
  const [minHeight, setMinHeight] = useState(null);

  // Calcula si actualmente el Slot A o el Slot B está frente a la cámara
  // (Múltiplo par de 180° = Slot A; múltiplo impar = Slot B)
  const normalizedSteps = Math.round(rotationAngle / 180);
  const isSlotAFront = Math.abs(normalizedSteps) % 2 === 0;

  // Transición hacia una cara específica (definida antes para pasar a render prop y contexto)
  const goToFace = useCallback(
    (targetIndex, directionOverride) => {
      if (targetIndex === activeIndex || targetIndex < 0) {
        return;
      }

      // Determinar sentido del giro (adelante o atrás)
      let isForward = targetIndex > activeIndex;
      if (typeof directionOverride === 'boolean') {
        isForward = directionOverride;
      }

      // Slot A está al frente -> cargamos la nueva cara en Slot B y giramos
      // Slot B está al frente -> cargamos la nueva cara en Slot A y giramos
      if (isSlotAFront) {
        setSlotBIndex(targetIndex);
        setRotationAngle((prev) => (isForward ? prev + 180 : prev - 180));
      } else {
        setSlotAIndex(targetIndex);
        setRotationAngle((prev) => (isForward ? prev + 180 : prev - 180));
      }

      setActiveIndex(targetIndex);
      if (onFaceChange) onFaceChange(targetIndex);
    },
    [activeIndex, isSlotAFront, onFaceChange]
  );

  // Resolver children (soporta render props reactivo con funciones y JSX directo)
  const resolvedChildren = useMemo(() => {
    if (typeof children === 'function') {
      return children({
        activeIndex,
        isFlipped: activeIndex !== 0,
        flipNext: () => {},
        flipPrev: () => {},
        goToFace,
        flip: () => {},
      });
    }
    return children;
  }, [children, activeIndex, goToFace]);

  const childArray = useMemo(() => {
    return React.Children.toArray(resolvedChildren).filter(Boolean);
  }, [resolvedChildren]);

  const totalFaces = childArray.length || 1;

  // Funciones de navegación rápida
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

  // Si showControls no fue especificado, mostrarlo por defecto si hay 3 o más caras
  const shouldShowControls =
    typeof showControls === 'boolean' ? showControls : totalFaces >= 3;

  // Medición de altura para evitar saltos durante la transición 3D
  useEffect(() => {
    const measureHeights = () => {
      const hA = slotARef.current ? slotARef.current.scrollHeight : 0;
      const hB = slotBRef.current ? slotBRef.current.scrollHeight : 0;
      const maxH = Math.max(hA, hB);
      if (maxH > 0) {
        setMinHeight(maxH);
      }
    };

    measureHeights();
    const timer = setTimeout(measureHeights, 100);
    window.addEventListener('resize', measureHeights);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureHeights);
    };
  }, [childArray, activeIndex]);

  // Valor del Contexto disponible para cualquier componente hijo
  const contextValue = useMemo(
    () => ({
      activeIndex,
      isFlipped,
      totalFaces,
      flipNext,
      flipPrev,
      goToFace,
      flip,
    }),
    [activeIndex, isFlipped, totalFaces, flipNext, flipPrev, goToFace, flip]
  );

  // Renderizador de la barra de controles de navegación integrada
  const renderControls = () => {
    if (!shouldShowControls || totalFaces <= 1) return null;

    return (
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-surface-dark-indigo/80 border border-dark-subtle/80 backdrop-blur-md shadow-lg my-3 w-full">
        {/* Selector de caras por píldoras/chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {childArray.map((_, idx) => {
            const label = faceLabels[idx] || `Cara ${idx + 1}`;
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => goToFace(idx)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-label-tech transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-bright/25 to-primary/20 text-cyan-bright border border-cyan-bright/60 shadow-[0_0_12px_rgba(25,227,255,0.3)] font-bold'
                    : 'text-text-dark-muted hover:text-text-dark-primary hover:bg-surface-container-high/40 border border-transparent'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? 'bg-cyan-bright animate-pulse' : 'bg-text-dark-muted/40'
                  }`}
                />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Botones de Anterior y Siguiente */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={flipPrev}
            aria-label="Cara anterior"
            className="p-1.5 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-highest border border-dark-subtle text-text-dark-primary hover:text-cyan-bright transition-colors cursor-pointer"
            title="Cara anterior"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>

          <span className="font-label-tech-sm text-xs text-text-dark-muted px-1">
            {activeIndex + 1} / {totalFaces}
          </span>

          <button
            type="button"
            onClick={flipNext}
            aria-label="Cara siguiente"
            className="p-1.5 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-highest border border-dark-subtle text-text-dark-primary hover:text-cyan-bright transition-colors cursor-pointer"
            title="Cara siguiente"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    );
  };

  // Contenido de los slots A y B
  const contentA = childArray[slotAIndex] || null;
  const contentB = childArray[slotBIndex] || null;

  return (
    <Card3DContext.Provider value={contextValue}>
      <div className={`3d-card-wrapper ${className}`}>
        {controlsPosition === 'top' && renderControls()}

        {/* Contenedor con perspectiva 3D */}
        <div
          className="w-full card-perspective"
          style={{ perspective }}
        >
          {/* Flipper rotatorio con preserve-3d */}
          <div
            ref={flipperRef}
            className={`relative w-full card-preserve-3d ${cardClassName}`}
            style={{
              transform: `rotateY(${rotationAngle}deg)`,
              transformStyle: 'preserve-3d',
              WebkitTransformStyle: 'preserve-3d',
              transition: `transform ${transitionDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
              minHeight: minHeight ? `${minHeight}px` : undefined,
            }}
          >
            {/* SLOT A: Cara en orientación 0° */}
            <div
              ref={slotARef}
              className={`w-full card-backface-hidden ${
                isSlotAFront
                  ? 'relative z-10 pointer-events-auto'
                  : 'absolute inset-0 w-full h-full z-0 pointer-events-none'
              }`}
              style={{
                transform: 'rotateY(0deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {contentA}
            </div>

            {/* SLOT B: Cara en orientación 180° */}
            <div
              ref={slotBRef}
              className={`w-full card-backface-hidden ${
                !isSlotAFront
                  ? 'relative z-10 pointer-events-auto'
                  : 'absolute inset-0 w-full h-full z-0 pointer-events-none'
              }`}
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {contentB}
            </div>
          </div>
        </div>

        {controlsPosition === 'bottom' && renderControls()}
      </div>
    </Card3DContext.Provider>
  );
}

/**
 * Trigger de conveniencia opcional para activar giros desde cualquier lugar del markup
 */
Card3D.Trigger = function Card3DTrigger({
  children,
  to = 'next',
  className = '',
  ...props
}) {
  const { flipNext, flipPrev, goToFace } = useCard3D();

  const handleClick = (e) => {
    if (props.onClick) props.onClick(e);
    if (to === 'next') flipNext();
    else if (to === 'prev') flipPrev();
    else if (typeof to === 'number') goToFace(to);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

// Exportaciones nombradas adicionales para máxima compatibilidad
export { Card3D, Card3D as ThreeDCard };
