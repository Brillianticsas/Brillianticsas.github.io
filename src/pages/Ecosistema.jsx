import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppChatButton from '../components/WhatsAppChatButton';
import Card3D from '../components/3DCard';

const Ecosistema = () => {
  return (
    <div className="bg-[#0A0E18] text-[#F8FAFC] font-sans antialiased min-h-screen selection:bg-brand-cyan/25 selection:text-brand-cyanBright flex flex-col justify-between overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL: SECCIÓN 04 ECOSISTEMA SPOC */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex-grow pt-28">
        {/* 1. ENCABEZADO DE SECCIÓN */}
        <header className="max-w-4xl mx-auto text-center mb-14 lg:mb-18">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F8FAFC] mb-6 leading-tight max-w-4xl mx-auto">
            Cobertura nacional unificada:{' '}
            <span className="block text-gradient-brand text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-cyanBright to-brand-magenta">
              1 Solo Contrato, 1 Sola Factura, 1 Solo Responsable.
            </span>
          </h1>
          <p className="text-[#94A3B8] text-base sm:text-lg lg:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            A través de nuestro modelo SPOC (Single Point of Contact), eliminamos la fricción administrativa y técnica de gestionar múltiples proveedores regionales en sedes dispersas:
          </p>
        </header>

        {/* 2. DIAGRAMA PRINCIPAL DOMINANTE VECTORIAL SPOC CONCÉNTRICO (TARJETA 3D) */}
        <section aria-label="Cobertura Nacional SPOC y Niveles Operativos" className="mb-16 lg:mb-20">
          <Card3D
            className="w-full max-w-7xl mx-auto"
            faceLabels={['Cobertura SPOC', 'Beneficios del Modelo']}
            showControls={true}
          >
            {/* CARA 1: COBERTURA NACIONAL SPOC */}
            <div className="w-full rounded-2xl border border-[#232A3B] bg-[#171B26] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Banner interactivo UX: Acceso a Cara 2 */}
              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 p-3.5 rounded-xl bg-gradient-to-r from-brand-cyan/15 via-brand-cyanBright/10 to-brand-magenta/15 border border-brand-cyan/40 backdrop-blur-md shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3.5 w-3.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-cyan"></span>
                  </span>
                  <div className="text-left">
                    <span className="font-mono text-xs text-brand-cyan uppercase tracking-wider block font-bold">
                      ⚡ ECOSISTEMA SPOC // DOBLE VISTA INTERACTIVA
                    </span>
                    <span className="text-[#94A3B8] text-xs hidden sm:inline">
                      Gire la tarjeta para explorar los beneficios del modelo integrado
                    </span>
                  </div>
                </div>
                <Card3D.Trigger
                  to={1}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-brand text-slate-950 font-display text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(25,227,255,0.4)] hover:shadow-[0_0_28px_rgba(217,0,196,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
                >
                  <span className="material-symbols-outlined text-[18px]">sync_alt</span>
                  <span>Girar para ver Beneficios</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Card3D.Trigger>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* COLUMNA IZQUIERDA: MÉTRICAS Y MAPA DE COLOMBIA CON CONEXIONES */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  {/* Lista de 4 métricas oficiales */}
                  <div className="sm:col-span-7 space-y-6">
                    <div className="space-y-1 group">
                      <div className="flex items-baseline gap-2">
                        <span className="text-brand-cyan font-mono text-2xl font-bold">-</span>
                        <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                          32 sedes
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed pl-5">
                        operativas administradas de forma simultánea.
                      </p>
                    </div>

                    <div className="space-y-1 group">
                      <div className="flex items-baseline gap-2">
                        <span className="text-brand-cyan font-mono text-2xl font-bold">-</span>
                        <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-brand-cyanBright transition-colors">
                          16 departamentos
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed pl-5">
                        de Colombia con cobertura urbana y en municipios de difícil acceso.
                      </p>
                    </div>

                    <div className="space-y-1 group">
                      <div className="flex items-baseline gap-2">
                        <span className="text-brand-cyan font-mono text-2xl font-bold">-</span>
                        <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-[#8B5CF6] transition-colors">
                          +12 operadores
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed pl-5">
                        aliados regionales y nacionales bajo nuestra gobernanza técnica.
                      </p>
                    </div>

                    <div className="space-y-1 group">
                      <div className="flex items-baseline gap-2">
                        <span className="text-brand-cyan font-mono text-2xl font-bold">-</span>
                        <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-brand-green transition-colors">
                          &lt; 2 horas
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed pl-5">
                        SLA de respuesta garantizada bajo acuerdo de nivel de servicio.
                      </p>
                    </div>
                  </div>

                  {/* Mapa vectorial de Colombia estilizado con topología en estrella de nodos verdes */}
                  <div className="sm:col-span-5 relative flex items-center justify-center py-4">
                    <div className="w-full max-w-[320px] aspect-[4/5] relative">
                      <svg
                        className="w-full h-full filter drop-shadow-[0_0_15px_rgba(0,184,230,0.2)]"
                        viewBox="0 0 400 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <filter id="glow-node" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                            <feMerge>
                              <feMergeNode in="blur"></feMergeNode>
                              <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                          </filter>
                          <linearGradient id="colombia-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00B8E6" stopOpacity="0.15"></stop>
                            <stop offset="100%" stopColor="#1E2433" stopOpacity="0.4"></stop>
                          </linearGradient>
                        </defs>
                        {/* Silueta simplificada de Colombia y departamentos */}
                        <path
                          d="M165 40 L210 25 L240 60 L215 95 L260 140 L350 200 L370 270 L290 280 L280 340 L220 440 L200 480 L180 430 L160 380 L130 370 L110 320 L135 240 L90 190 L110 150 L140 150 L165 100 Z"
                          fill="url(#colombia-fill)"
                          stroke="#00B8E6"
                          strokeOpacity="0.5"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        ></path>
                        {/* Subdivisiones departamentales decorativas */}
                        <path
                          d="M165 100 L215 95 L200 160 L140 150 Z"
                          stroke="#19E3FF"
                          strokeOpacity="0.35"
                          strokeWidth="1"
                          fill="rgba(0,184,230,0.06)"
                        ></path>
                        <path
                          d="M200 160 L260 140 L280 210 L195 230 Z"
                          stroke="#19E3FF"
                          strokeOpacity="0.35"
                          strokeWidth="1"
                          fill="rgba(0,184,230,0.08)"
                        ></path>
                        <path
                          d="M140 150 L195 230 L150 260 L110 200 Z"
                          stroke="#19E3FF"
                          strokeOpacity="0.35"
                          strokeWidth="1"
                          fill="rgba(0,184,230,0.04)"
                        ></path>
                        <path
                          d="M195 230 L280 210 L350 200 L370 270 L280 280 L220 270 Z"
                          stroke="#19E3FF"
                          strokeOpacity="0.3"
                          strokeWidth="1"
                          fill="rgba(25,227,255,0.08)"
                        ></path>
                        <path
                          d="M150 260 L220 270 L280 340 L220 440 L180 360 Z"
                          stroke="#19E3FF"
                          strokeOpacity="0.3"
                          strokeWidth="1"
                          fill="rgba(0,184,230,0.05)"
                        ></path>

                        {/* Líneas de interconexión hacia el núcleo (Bogotá: 195, 230) */}
                        <g stroke="#19E3FF" strokeWidth="1.2" strokeOpacity="0.65">
                          <line x1="195" y1="230" x2="220" y2="45"></line>
                          <line x1="195" y1="230" x2="170" y2="75"></line>
                          <line x1="195" y1="230" x2="245" y2="110"></line>
                          <line x1="195" y1="230" x2="135" y2="165"></line>
                          <line x1="195" y1="230" x2="160" y2="195"></line>
                          <line x1="195" y1="230" x2="290" y2="175"></line>
                          <line x1="195" y1="230" x2="340" y2="220"></line>
                          <line x1="195" y1="230" x2="345" y2="265"></line>
                          <line x1="195" y1="230" x2="275" y2="265"></line>
                          <line x1="195" y1="230" x2="265" y2="320"></line>
                          <line x1="195" y1="230" x2="210" y2="410"></line>
                          <line x1="195" y1="230" x2="198" y2="465"></line>
                          <line x1="195" y1="230" x2="150" y2="350"></line>
                          <line x1="195" y1="230" x2="120" y2="290"></line>
                          <line x1="195" y1="230" x2="100" y2="210"></line>
                          <line x1="195" y1="230" x2="180" y2="275"></line>
                        </g>

                        {/* Nodos operativos en campo (verdes brillantes) */}
                        <g filter="url(#glow-node)">
                          <circle cx="220" cy="45" r="5" fill="#10B981"></circle>
                          <circle cx="170" cy="75" r="4" fill="#10B981"></circle>
                          <circle cx="245" cy="110" r="4.5" fill="#10B981"></circle>
                          <circle cx="135" cy="165" r="4" fill="#10B981"></circle>
                          <circle cx="160" cy="195" r="4" fill="#10B981"></circle>
                          <circle cx="290" cy="175" r="4.5" fill="#10B981"></circle>
                          <circle cx="340" cy="220" r="4" fill="#10B981"></circle>
                          <circle cx="345" cy="265" r="4.5" fill="#10B981"></circle>
                          <circle cx="275" cy="265" r="4" fill="#10B981"></circle>
                          <circle cx="265" cy="320" r="4.5" fill="#10B981"></circle>
                          <circle cx="210" cy="410" r="4" fill="#10B981"></circle>
                          <circle cx="198" cy="465" r="5" fill="#10B981"></circle>
                          <circle cx="150" cy="350" r="4.5" fill="#10B981"></circle>
                          <circle cx="120" cy="290" r="4" fill="#10B981"></circle>
                          <circle cx="100" cy="210" r="4.5" fill="#10B981"></circle>
                          <circle cx="180" cy="275" r="4" fill="#10B981"></circle>
                        </g>

                        {/* Núcleo Central SPOC (Bogotá) */}
                        <circle cx="195" cy="230" r="10" fill="#00B8E6" fillOpacity="0.3"></circle>
                        <circle cx="195" cy="230" r="6" fill="#19E3FF"></circle>
                        <circle cx="195" cy="230" r="2" fill="#FFFFFF"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* COLUMNA DERECHA: PILA DE 3 BLOQUES DE CRISTAL TRANSLÚCIDOS */}
              <div className="lg:col-span-5 flex flex-col gap-5 justify-center py-2">
                {/* Nivel 1: Mesa de Ayuda */}
                <div className="relative isolate rounded-2xl bg-[#121622] border border-[#232A3B] p-6 sm:p-7 shadow-[0_8px_32px_rgba(0,184,230,0.08)] hover:border-brand-cyan/60 hover:shadow-[0_12px_40px_rgba(0,184,230,0.2)] transition-[border-color,box-shadow] duration-200 group">
                  <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent pointer-events-none"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug group-hover:text-brand-cyan transition-colors">
                      Nivel 1 — Mesa de Ayuda (Help Desk / Brilliantickets)
                    </h3>
                  </div>
                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed pl-4 border-l border-brand-cyan/20">
                    Recepción omnicanal, registro estructurado por tickets y diagnóstico inmediato en primer contacto.
                  </p>
                </div>

                {/* Nivel 2: Centro de Operaciones de Red (NOC) */}
                <div className="relative isolate rounded-2xl bg-[#121622] border border-[#232A3B] p-6 sm:p-7 shadow-[0_8px_32px_rgba(139,92,246,0.08)] hover:border-[#8B5CF6]/60 hover:shadow-[0_12px_40px_rgba(139,92,246,0.2)] transition-[border-color,box-shadow] duration-200 group">
                  <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent pointer-events-none"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug group-hover:text-[#8B5CF6] transition-colors">
                      Nivel 2 — Centro de Operaciones de Red (NOC)
                    </h3>
                  </div>
                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed pl-4 border-l border-[#8B5CF6]/20">
                    Monitoreo proactivo de enlaces de fibra/microondas, gestión de tráfico Capa 2/3, ciberseguridad y coordinación de cuadrillas en campo.
                  </p>
                </div>

                {/* Nivel 3: Ingeniería Especialista */}
                <div className="relative isolate rounded-2xl bg-[#121622] border border-[#232A3B] p-6 sm:p-7 shadow-[0_8px_32px_rgba(16,185,129,0.08)] hover:border-brand-green/60 hover:shadow-[0_12px_40px_rgba(16,185,129,0.2)] transition-[border-color,box-shadow] duration-200 group">
                  <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-green/50 to-transparent pointer-events-none"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug group-hover:text-brand-green transition-colors">
                      Nivel 3 — Ingeniería Especialista
                    </h3>
                  </div>
                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed pl-4 border-l border-brand-green/20">
                    Intervención de arquitectos Cloud, desarrolladores senior e ingenieros electrónicos/telecomunicaciones para resolución de raíz.
                  </p>
                </div>
              </div>
            </div>

            {/* Pie inferior con trigger de giro Cara 1 */}
            <div className="mt-8 pt-4 border-t border-[#232A3B] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[#94A3B8] font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>COBERTURA NACIONAL Y MATRIZ SPOC</span>
              </div>
              <Card3D.Trigger
                to={1}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#121622] hover:bg-[#1a2030] border border-brand-cyan/40 text-brand-cyan hover:text-white font-mono text-xs font-semibold transition-all cursor-pointer group shadow-sm"
              >
                <span>Operaciones &amp; Niveles</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:rotate-180">
                  flip
                </span>
              </Card3D.Trigger>
            </div>
          </div>

          {/* CARA 2: BENEFICIOS DEL MODELO INTEGRADO */}
          <div className="w-full h-full rounded-2xl border border-[#232A3B] bg-[#171B26] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header de retorno en Cara 2 */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 p-3.5 rounded-xl bg-gradient-to-r from-brand-magenta/15 via-[#8B5CF6]/15 to-brand-cyan/15 border border-[#8B5CF6]/40 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3.5 w-3.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#8B5CF6]"></span>
                </span>
                <div className="text-left">
                  <span className="font-mono text-xs text-[#8B5CF6] uppercase tracking-wider block font-bold">
                    ⚡ VALOR AGREGADO &amp; GOBERNANZA
                  </span>
                  <span className="text-[#94A3B8] text-xs hidden sm:inline">
                    5 pilares estratégicos de la integración tecnológica
                  </span>
                </div>
              </div>
              <Card3D.Trigger
                to={0}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-magenta text-slate-950 font-display text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(25,227,255,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
              >
                <span className="material-symbols-outlined text-[18px]">replay</span>
                <span>Volver a Cobertura Nacional</span>
              </Card3D.Trigger>
            </div>

            {/* Título de Beneficios */}
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F8FAFC]">
                Beneficios del modelo integrado
              </h2>
            </div>

            {/* Grid de 5 Beneficios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              {/* Beneficio 1 */}
              <div className="rounded-xl border border-[#232A3B] bg-[#121622] p-5 text-center flex flex-col items-center shadow-sm hover:-translate-y-1 hover:border-brand-cyan/40 transition-all duration-200">
                <div className="w-12 h-12 rounded-lg bg-[#171B26] flex items-center justify-center text-brand-cyan mb-4 border border-[#232A3B]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" strokeWidth="2"></circle>
                    <path d="M12 3v3m0 12v3m-9-9h3m12 0h3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-base text-[#F8FAFC] mb-2">Centralización de la gestión</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">
                  Consolidación y gobierno uniforme de componentes y servicios en un único esquema directivo.
                </p>
              </div>

              {/* Beneficio 2 */}
              <div className="rounded-xl border border-[#232A3B] bg-[#121622] p-5 text-center flex flex-col items-center shadow-sm hover:-translate-y-1 hover:border-brand-cyanBright/40 transition-all duration-200">
                <div className="w-12 h-12 rounded-lg bg-[#171B26] flex items-center justify-center text-brand-cyanBright mb-4 border border-[#232A3B]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-base text-[#F8FAFC] mb-2">Interoperabilidad</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">
                  Intercambio armónico y fluido de información entre plataformas de diversa naturaleza y propósito.
                </p>
              </div>

              {/* Beneficio 3 */}
              <div className="rounded-xl border border-[#232A3B] bg-[#121622] p-5 text-center flex flex-col items-center shadow-sm hover:-translate-y-1 hover:border-brand-magenta/40 transition-all duration-200">
                <div className="w-12 h-12 rounded-lg bg-[#171B26] flex items-center justify-center text-brand-magenta mb-4 border border-[#232A3B]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-base text-[#F8FAFC] mb-2">Visibilidad operativa</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">
                  Claridad total sobre el estado, interacción y comportamiento de las operaciones tecnológicas.
                </p>
              </div>

              {/* Beneficio 4 */}
              <div className="rounded-xl border border-[#232A3B] bg-[#121622] p-5 text-center flex flex-col items-center shadow-sm hover:-translate-y-1 hover:border-[#8B5CF6]/40 transition-all duration-200">
                <div className="w-12 h-12 rounded-lg bg-[#171B26] flex items-center justify-center text-[#8B5CF6] mb-4 border border-[#232A3B]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-base text-[#F8FAFC] mb-2">Escalabilidad</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">
                  Crecimiento modular y flexible de la infraestructura sin comprometer la estabilidad actual.
                </p>
              </div>

              {/* Beneficio 5 */}
              <div className="rounded-xl border border-[#232A3B] bg-[#121622] p-5 text-center flex flex-col items-center shadow-sm hover:-translate-y-1 hover:border-brand-green/40 transition-all duration-200">
                <div className="w-12 h-12 rounded-lg bg-[#171B26] flex items-center justify-center text-brand-green mb-4 border border-[#232A3B]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-base text-[#F8FAFC] mb-2">Continuidad tecnológica</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">
                  Respaldo coordinado para mantener las funciones críticas activas ante contingencias operativas.
                </p>
              </div>
            </div>

            {/* Pie inferior Cara 2 */}
            <div className="mt-auto pt-6 border-t border-[#232A3B] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[#94A3B8] font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                <span>VISTA 2 DE 2 &bull; BENEFICIOS DEL MODELO INTEGRADO</span>
              </div>
              <Card3D.Trigger
                to={0}
                className="inline-flex items-center gap-1.5 text-brand-cyan hover:text-white font-mono text-xs font-semibold transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span>Girar tarjeta y volver a Cobertura Nacional (Vista 1)</span>
              </Card3D.Trigger>
            </div>
          </div>
        </Card3D>
      </section>

        {/* 4. CTA DESTACADO DE CIERRE */}
        <section aria-label="Llamado a la acción" className="rounded-2xl border border-[#232A3B] bg-[#171B26] p-8 sm:p-12 relative overflow-hidden text-center shadow-2xl mb-12">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#8B5CF6]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded bg-[#121622] border border-[#232A3B] text-xs font-mono text-brand-cyan uppercase mb-4 tracking-wider">
              ADOPCIÓN DE ECOSISTEMA // B2B
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F8FAFC] mb-4 leading-snug">
              ¿Preparado para armonizar la tecnología de su organización?
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Estructure sus aplicaciones, infraestructura y operaciones bajo una perspectiva unificada que responda a sus requerimientos empresariales.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/573228273454"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-brand hover:brightness-110 text-slate-950 font-display font-semibold text-sm shadow-lg shadow-brand-cyan/25 transition-all duration-150 hover:scale-[1.02]"
              >
                <span>Conocer cómo adaptar el modelo a su organización</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 5. INDICADOR DE CONTINUIDAD SPA */}
        <div className="w-full flex items-center justify-center pt-8 pb-4">
          <Link
            to="/Experiencia"
            className="group relative flex flex-col items-center justify-center p-space-xl rounded-2xl bg-surface-container hover:bg-surface-container-high max-w-[480px] w-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_32px_rgba(25,227,255,0.15)] hover:-translate-y-1"
          >
            <div className="flex items-center gap-space-md mb-space-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">workspace_premium</span>
              </div>
              <div className="text-left">
                <span className="font-label-tech-sm text-label-tech-sm text-cyan-bright uppercase tracking-wider block font-bold">
                  ¿Buscas resultados comprobados?
                </span>
                <span className="font-action-label text-action-label text-on-surface text-headline-sm font-semibold block group-hover:text-primary transition-colors">
                  Descubre Nuestros Casos de Éxito
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center max-w-[380px] mb-space-md leading-relaxed">
              Casos reales de impacto medible en salud, banca e infraestructura crítica que respaldan nuestro modelo de trabajo.
            </p>
            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:text-primary transition-all group-hover:translate-x-1">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </div>
          </Link>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* WHATSAPP CHAT BUTTON */}
      <WhatsAppChatButton />
    </div>
  );
};

export default Ecosistema;
