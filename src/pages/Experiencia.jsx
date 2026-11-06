import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppChatButton from '../components/WhatsAppChatButton';
import Card3D from '../components/3DCard';

const Experiencia = () => {
  return (
    <div className="bg-surface-dark-base text-text-dark-primary font-sans antialiased min-h-screen selection:bg-cyan-bright/20 selection:text-cyan-bright flex flex-col justify-between overflow-x-hidden">
      {/* NAVBAR CORPORATIVO INYECTADO */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL: SECCIÓN 05 EXPERIENCIA B2B */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex-1 pt-28">
        <div className="flex flex-col w-full">
          {/* ENCABEZADO DE SECCIÓN */}
          <section className="relative w-full mb-16 lg:mb-24">
            {/* Ambient micro-glow background decorative elements */}
            <div className="absolute -top-12 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-1/2 right-10 w-80 h-80 bg-tertiary-container/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="flex flex-col items-start max-w-4xl">
              {/* Tagline telemetry pill */}
              {/* Main Section Title */}
              <h1 className="font-headline-xl text-headline-xl text-text-dark-primary tracking-tight mb-6">
                Impacto medible en sectores<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-bright to-tertiary-container text-gradient-brand">
                  de alta exigencia operativa.
                </span>
              </h1>
              {/* Corporate Subtitle */}
              <p className="font-body-lg text-body-lg text-text-dark-muted max-w-3xl leading-relaxed">
                Desplegamos solidez operativa, rigor técnico y metodologías de ingeniería elástica diseñadas para orquestar la evolución digital de infraestructuras críticas en entornos corporativos de alta demanda.
              </p>
            </div>
          </section>

          {/* 05.01 ALIANZAS & ECOSISTEMA (12 SLOTS MATRIZ EMPRESARIAL CON LOGOS) */}
          <section className="w-full mb-20 lg:mb-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="font-headline-md text-headline-md text-text-dark-primary">
                  Entidades &amp; Despliegues Corporativos
                </h2>
              </div>
            </div>

            {/* Grid 12 Logos Reales + Complementarios */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {/* Box 1: Emco Salud */}
              <div className="group relative flex flex-col items-center justify-center p-4 h-32 rounded-xl bg-surface-container border border-border-dark-subtle hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden">
                <div className="w-full h-16 rounded-lg bg-white flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 shadow-inner">
                  <img
                    alt="Emco Salud"
                    className="max-h-full max-w-full object-contain filter"
                    src="src/images/cliente1.png"
                  />
                </div>
                <span className="mt-2 font-label-tech-sm text-label-tech-sm text-text-dark-muted group-hover:text-cyan-bright text-center truncate w-full">
                  Emco Salud
                </span>
              </div>

              {/* Box 2: Asmet Salud */}
              <div className="group relative flex flex-col items-center justify-center p-4 h-32 rounded-xl bg-surface-container border border-border-dark-subtle hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden">
                <div className="w-full h-16 rounded-lg bg-white flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 shadow-inner">
                  <img
                    alt="Asmet Salud EPS"
                    className="max-h-full max-w-full object-contain filter"
                    src="src/images/cliente2.png"
                  />
                </div>
                <span className="mt-2 font-label-tech-sm text-label-tech-sm text-text-dark-muted group-hover:text-cyan-bright text-center truncate w-full">
                  Asmet Salud EPS
                </span>
              </div>

              {/* Box 3: PuntoNet */}
              <div className="group relative flex flex-col items-center justify-center p-4 h-32 rounded-xl bg-surface-container border border-border-dark-subtle hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden">
                <div className="w-full h-16 rounded-lg bg-white flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 shadow-inner">
                  <img
                    alt="Puntonet"
                    className="max-h-full max-w-full object-contain filter"
                    src="src/images/cliente3.png"
                  />
                </div>
                <span className="mt-2 font-label-tech-sm text-label-tech-sm text-text-dark-muted group-hover:text-cyan-bright text-center truncate w-full">
                  Puntonet S.A.S.
                </span>
              </div>

              {/* Box 4: Punto de Pago */}
              <div className="group relative flex flex-col items-center justify-center p-4 h-32 rounded-xl bg-surface-container border border-border-dark-subtle hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden">
                <div className="w-full h-16 rounded-lg bg-white flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 shadow-inner">
                  <img
                    alt="Punto de Pago Multibanco"
                    className="max-h-full max-w-full object-contain filter"
                    src="src/images/cliente4.jpg"
                  />
                </div>
                <span className="mt-2 font-label-tech-sm text-label-tech-sm text-text-dark-muted group-hover:text-cyan-bright text-center truncate w-full">
                  Punto de Pago
                </span>
              </div>

              {/* Box 5: Banco W */}
              <div className="group relative flex flex-col items-center justify-center p-4 h-32 rounded-xl bg-surface-container border border-border-dark-subtle hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden">
                <div className="w-full h-16 rounded-lg bg-white flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 shadow-inner">
                  <img
                    alt="Banco W"
                    className="max-h-full max-w-full object-contain filter"
                    src="src/images/cliente6.png"
                  />
                </div>
                <span className="mt-2 font-label-tech-sm text-label-tech-sm text-text-dark-muted group-hover:text-cyan-bright text-center truncate w-full">
                  Banco W
                </span>
              </div>

              {/* Box 6: Banco Agrario */}
              <div className="group relative flex flex-col items-center justify-center p-4 h-32 rounded-xl bg-surface-container border border-border-dark-subtle hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden">
                <div className="w-full h-16 rounded-lg bg-white flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 shadow-inner">
                  <img
                    alt="Banco Agrario de Colombia"
                    className="max-h-full max-w-full object-contain filter"
                    src="src/images/cliente7.png"
                  />
                </div>
                <span className="mt-2 font-label-tech-sm text-label-tech-sm text-text-dark-muted group-hover:text-cyan-bright text-center truncate w-full">
                  Banco Agrario
                </span>
              </div>

              {/* Box 7: Scotiabank Colpatria */}
              <div className="group relative flex flex-col items-center justify-center p-4 h-32 rounded-xl bg-surface-container border border-border-dark-subtle hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden">
                <div className="w-full h-16 rounded-lg bg-white flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 shadow-inner">
                  <img
                    alt="Scotiabank Colpatria"
                    className="max-h-full max-w-full object-contain filter"
                    src="src/images/cliente8.png"
                  />
                </div>
                <span className="mt-2 font-label-tech-sm text-label-tech-sm text-text-dark-muted group-hover:text-cyan-bright text-center truncate w-full">
                  Scotiabank Colpatria
                </span>
              </div>

              {/* Box 8: Gecolsa CAT */}
              <div className="group relative flex flex-col items-center justify-center p-4 h-32 rounded-xl bg-surface-container border border-border-dark-subtle hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden">
                <div className="w-full h-16 rounded-lg bg-white flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 shadow-inner">
                  <img
                    alt="Gecolsa CAT"
                    className="max-h-full max-w-full object-contain filter"
                    src="src/images/cliente9.png"
                  />
                </div>
                <span className="mt-2 font-label-tech-sm text-label-tech-sm text-text-dark-muted group-hover:text-cyan-bright text-center truncate w-full">
                  Gecolsa CAT
                </span>
              </div>

              {/* Box 9: Ibiza */}
              <div className="group relative flex flex-col items-center justify-center p-4 h-32 rounded-xl bg-surface-container border border-border-dark-subtle hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden">
                <div className="w-full h-16 rounded-lg bg-white flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 shadow-inner">
                  <img
                    alt="Ibiza"
                    className="max-h-full max-w-full object-contain filter"
                    src="src/images/cliente10.png"
                  />
                </div>
                <span className="mt-2 font-label-tech-sm text-label-tech-sm text-text-dark-muted group-hover:text-cyan-bright text-center truncate w-full">
                  Ibiza
                </span>
              </div>
            </div>
          </section>

          {/* 05.02 CASOS DE ÉXITO (BENTO EDITORIAL ASIMÉTRICO) */}
          <section className="w-full mb-20 lg:mb-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="font-headline-md text-headline-md text-text-dark-primary">
                  Casos de Éxito &amp; Soluciones Implementadas
                </h2>
              </div>
            </div>

            {/* Casos de Éxito: Tarjeta 3D Interactiva con 3 Caras */}
            <Card3D
              className="max-w-3xl mx-auto w-full"
              faceLabels={['Sector Salud', 'Sector Financiero', 'Sector Hidrocarburos']}
              showControls={true}
            >
              {/* Cara 1: Sector Salud */}
              <div className="flex flex-col rounded-xl overflow-hidden border border-border-dark-subtle bg-surface-container shadow-2xl transition-all duration-300 hover:border-primary/50 w-full">
                {/* Header Azul Noche con Indicador Interactivo */}
                <div className="bg-[#07182c] border-b border-border-dark-subtle px-6 py-5 flex items-center justify-between min-h-[88px]">
                  <div className="text-left">
                    <span className="text-[11px] font-mono tracking-wider text-cyan-bright uppercase font-bold block mb-1">
                      Caso 1 de 3 • Salud &amp; Automatización
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-text-dark-primary font-bold leading-snug">
                      Sector Salud (Clínicas, IPS y Centros Diagnósticos)
                    </h3>
                  </div>
                  <Card3D.Trigger
                    to={1}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-bright hover:text-white bg-cyan-bright/10 hover:bg-cyan-bright/20 border border-cyan-bright/30 transition-all cursor-pointer flex-shrink-0"
                    title="Girar al siguiente caso"
                  >
                    <span>Siguiente</span>
                    <span>→</span>
                  </Card3D.Trigger>
                </div>
                {/* Body: Desafío y Solución */}
                <div className="flex-1 p-6 sm:p-8 space-y-6 bg-surface-container flex flex-col justify-start">
                  <div className="border-b border-border-dark-subtle pb-5">
                    <p className="font-body-md text-body-md text-text-dark-muted leading-relaxed">
                      <strong className="text-text-dark-primary font-bold">Desafío:</strong> Fuga de hasta el 52% de pacientes captados en pauta digital por demoras en recepción de WhatsApp y transcripción manual de órdenes médicas.
                    </p>
                  </div>
                  <div>
                    <p className="font-body-md text-body-md text-text-dark-muted leading-relaxed">
                      <strong className="text-text-dark-primary font-bold">Solución Brilliantic:</strong> Integración de campañas de Meta Ads con Connectmsg, agentes KLERK (lectura OCR), plataforma K-lender y CRM (KLARI / Bitrix24).
                    </p>
                  </div>
                </div>
                {/* Franja Verde: Resultado Medible */}
                <div className="bg-[#007038] text-white p-6 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="font-body-md text-body-md leading-snug text-white flex-1">
                    <strong className="font-bold">Resultado Medible:</strong> Respuesta en &lt; 10s (24/7), reducción de inasistencia (No-Show) a &lt; 10% y 100% de trazabilidad publicitaria.
                  </p>
                  <Card3D.Trigger
                    to={1}
                    className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/20 hover:bg-white/30 border border-white/30 transition-all cursor-pointer"
                  >
                    <span>Ver Financiero</span>
                    <span>→</span>
                  </Card3D.Trigger>
                </div>
              </div>

              {/* Cara 2: Sector Financiero */}
              <div className="flex flex-col rounded-xl overflow-hidden border border-border-dark-subtle bg-surface-container shadow-2xl transition-all duration-300 hover:border-primary/50 w-full">
                {/* Header Azul Noche con Indicador Interactivo */}
                <div className="bg-[#07182c] border-b border-border-dark-subtle px-6 py-5 flex items-center justify-between min-h-[88px]">
                  <div className="text-left">
                    <span className="text-[11px] font-mono tracking-wider text-primary font-bold uppercase block mb-1">
                      Caso 2 de 3 • Redes Transaccionales SPOC
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-text-dark-primary font-bold leading-snug">
                      Sector Financiero y Redes Transaccionales Nacionales
                    </h3>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                    <Card3D.Trigger
                      to={0}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-text-dark-muted hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                      title="Volver a Salud"
                    >
                      <span>← Salud</span>
                    </Card3D.Trigger>
                    <Card3D.Trigger
                      to={2}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-cyan-bright hover:text-white bg-cyan-bright/10 hover:bg-cyan-bright/20 border border-cyan-bright/30 transition-all cursor-pointer"
                      title="Girar a Hidrocarburos"
                    >
                      <span>Hidrocarburos →</span>
                    </Card3D.Trigger>
                  </div>
                </div>
                {/* Body: Desafío y Solución */}
                <div className="flex-1 p-6 sm:p-8 space-y-6 bg-surface-container flex flex-col justify-start">
                  <div className="border-b border-border-dark-subtle pb-5">
                    <p className="font-body-md text-body-md text-text-dark-muted leading-relaxed">
                      <strong className="text-text-dark-primary font-bold">Desafío:</strong> Alta complejidad administrativa e intermitencia operativa en enlaces de datos distribuidos en zonas urbanas y rurales apartadas del país.
                    </p>
                  </div>
                  <div>
                    <p className="font-body-md text-body-md text-text-dark-muted leading-relaxed">
                      <strong className="text-text-dark-primary font-bold">Solución Brilliantic:</strong> Despliegue del modelo SPOC 360° articulando fibra óptica y enlaces dedicados con más de 12 operadores locales bajo monitoreo NOC centralizado.
                    </p>
                  </div>
                </div>
                {/* Franja Verde: Resultado Medible */}
                <div className="bg-[#007038] text-white p-6 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="font-body-md text-body-md leading-snug text-white flex-1">
                    <strong className="font-bold">Resultado Medible:</strong> Continuidad transaccional en 32 sedes de 16 departamentos, unificación en 1 sola factura y cumplimiento estricto de SLA corporativos.
                  </p>
                  <div className="flex sm:hidden items-center gap-2">
                    <Card3D.Trigger
                      to={0}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/20 hover:bg-white/30 border border-white/30 transition-all cursor-pointer"
                    >
                      <span>← Salud</span>
                    </Card3D.Trigger>
                    <Card3D.Trigger
                      to={2}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/20 hover:bg-white/30 border border-white/30 transition-all cursor-pointer"
                    >
                      <span>Hidrocarburos →</span>
                    </Card3D.Trigger>
                  </div>
                </div>
              </div>

              {/* Cara 3: Sector Hidrocarburos */}
              <div className="flex flex-col rounded-xl overflow-hidden border border-border-dark-subtle bg-surface-container shadow-2xl transition-all duration-300 hover:border-primary/50 w-full">
                {/* Header Azul Noche con Indicador Interactivo */}
                <div className="bg-[#07182c] border-b border-border-dark-subtle px-6 py-5 flex items-center justify-between min-h-[88px]">
                  <div className="text-left">
                    <span className="text-[11px] font-mono tracking-wider text-tertiary-container font-bold uppercase block mb-1">
                      Caso 3 de 3 • Infraestructura Crítica
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-text-dark-primary font-bold leading-snug">
                      Sector Hidrocarburos, Energía e Infraestructura Crítica
                    </h3>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                    <Card3D.Trigger
                      to={1}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-text-dark-muted hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                      title="Volver a Financiero"
                    >
                      <span>← Financiero</span>
                    </Card3D.Trigger>
                    <Card3D.Trigger
                      to={0}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-cyan-bright hover:text-white bg-cyan-bright/10 hover:bg-cyan-bright/20 border border-cyan-bright/30 transition-all cursor-pointer"
                      title="Volver a Salud"
                    >
                      <span>↺ Salud</span>
                    </Card3D.Trigger>
                  </div>
                </div>
                {/* Body: Desafío y Solución */}
                <div className="flex-1 p-6 sm:p-8 space-y-6 bg-surface-container flex flex-col justify-start">
                  <div className="border-b border-border-dark-subtle pb-5">
                    <p className="font-body-md text-body-md text-text-dark-muted leading-relaxed">
                      <strong className="text-text-dark-primary font-bold">Desafío:</strong> Adecuación tecnológica de sede corporativa y enlaces industriales bajo rigurosas normativas técnicas, de seguridad y presupuesto.
                    </p>
                  </div>
                  <div>
                    <p className="font-body-md text-body-md text-text-dark-muted leading-relaxed">
                      <strong className="text-text-dark-primary font-bold">Solución Brilliantic:</strong> Ingeniería de valor en diseño y construcción de red LAN/WLAN, cableado estructurado Categoría 6A certificado, fusión de fibra óptica ODF y respaldo eléctrico RETIE.
                    </p>
                  </div>
                </div>
                {/* Franja Verde: Resultado Medible */}
                <div className="bg-[#007038] text-white p-6 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="font-body-md text-body-md leading-snug text-white flex-1">
                    <strong className="font-bold">Resultado Medible:</strong> Entrega certificada a satisfacción, optimización financiera del CAPEX y disponibilidad continua de red.
                  </p>
                  <div className="flex sm:hidden items-center gap-2">
                    <Card3D.Trigger
                      to={1}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/20 hover:bg-white/30 border border-white/30 transition-all cursor-pointer"
                    >
                      <span>← Financiero</span>
                    </Card3D.Trigger>
                    <Card3D.Trigger
                      to={0}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/20 hover:bg-white/30 border border-white/30 transition-all cursor-pointer"
                    >
                      <span>↺ Salud</span>
                    </Card3D.Trigger>
                  </div>
                </div>
              </div>
            </Card3D>
          </section>

          {/* 05.03 EXPERIENCIA POR SECTORES (CHIPS & BADGES DE COBERTURA) */}
          <section className="w-full mb-20 lg:mb-28">
            <div className="rounded-2xl bg-surface-container border border-border-dark-subtle p-6 sm:p-10 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-border-dark-subtle gap-4">
                <div>
                  <h2 className="font-headline-md text-headline-md text-text-dark-primary">
                    Experiencia por Sectores Estratégicos
                  </h2>
                </div>
                <p className="font-label-tech text-label-tech text-text-dark-muted">
                  VERTICALES REGULADAS &amp; TECNOLÓGICAS
                </p>
              </div>

              {/* 8 Classification Chips/Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* Chip 1 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-support border border-border-dark-subtle hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-dark-base text-primary border border-border-dark-subtle flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">account_balance</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-tech-sm text-[10px] sm:text-xs text-text-dark-muted uppercase font-bold tracking-wider mb-0.5">SECTOR 01</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-text-dark-primary leading-snug break-words">
                      Financiero &amp; Bancario
                    </div>
                  </div>
                </div>

                {/* Chip 2 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-support border border-border-dark-subtle hover:border-cyan-bright/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-dark-base text-cyan-bright border border-border-dark-subtle flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">vital_signs</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-tech-sm text-[10px] sm:text-xs text-text-dark-muted uppercase font-bold tracking-wider mb-0.5">SECTOR 02</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-text-dark-primary leading-snug break-words">
                      Salud &amp; EPS
                    </div>
                  </div>
                </div>

                {/* Chip 3 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-support border border-border-dark-subtle hover:border-tertiary-container/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-dark-base text-tertiary-container border border-border-dark-subtle flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">local_shipping</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-tech-sm text-[10px] sm:text-xs text-text-dark-muted uppercase font-bold tracking-wider mb-0.5">SECTOR 03</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-text-dark-primary leading-snug break-words">
                      Logística &amp; Carga
                    </div>
                  </div>
                </div>

                {/* Chip 4 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-support border border-border-dark-subtle hover:border-accent-success/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-dark-base text-accent-success border border-border-dark-subtle flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">bolt</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-tech-sm text-[10px] sm:text-xs text-text-dark-muted uppercase font-bold tracking-wider mb-0.5">SECTOR 04</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-text-dark-primary leading-snug break-words">
                      Energía &amp; Servicios
                    </div>
                  </div>
                </div>

                {/* Chip 5 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-support border border-border-dark-subtle hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-dark-base text-primary border border-border-dark-subtle flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">storefront</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-tech-sm text-[10px] sm:text-xs text-text-dark-muted uppercase font-bold tracking-wider mb-0.5">SECTOR 05</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-text-dark-primary leading-snug break-words">
                      Retail &amp; Comercio
                    </div>
                  </div>
                </div>

                {/* Chip 6 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-support border border-border-dark-subtle hover:border-cyan-bright/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-dark-base text-cyan-bright border border-border-dark-subtle flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">domain</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-tech-sm text-[10px] sm:text-xs text-text-dark-muted uppercase font-bold tracking-wider mb-0.5">SECTOR 06</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-text-dark-primary leading-snug break-words">
                      Gobierno &amp; Público
                    </div>
                  </div>
                </div>

                {/* Chip 7 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-support border border-border-dark-subtle hover:border-tertiary-container/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-dark-base text-tertiary-container border border-border-dark-subtle flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">school</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-tech-sm text-[10px] sm:text-xs text-text-dark-muted uppercase font-bold tracking-wider mb-0.5">SECTOR 07</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-text-dark-primary leading-snug break-words">
                      Educación Superior
                    </div>
                  </div>
                </div>

                {/* Chip 8 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-support border border-border-dark-subtle hover:border-accent-success/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-dark-base text-accent-success border border-border-dark-subtle flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">cloud_sync</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-tech-sm text-[10px] sm:text-xs text-text-dark-muted uppercase font-bold tracking-wider mb-0.5">SECTOR 08</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-text-dark-primary leading-snug break-words">
                      Telecomunicaciones
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FRANJA DE CONTINUIDAD SPA */}
          <section className="w-full flex flex-col items-center justify-center pt-8 pb-4 border-t border-border-dark-subtle/50">
            <Link
              to="/Nosotros"
              className="group relative flex flex-col items-center justify-center p-space-xl rounded-2xl bg-surface-container hover:bg-surface-container-high max-w-[480px] w-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_32px_rgba(25,227,255,0.15)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-space-md mb-space-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[26px]">groups</span>
                </div>
                <div className="text-left">
                  <span className="font-label-tech-sm text-label-tech-sm text-cyan-bright uppercase tracking-wider block font-bold">
                    ¿Quiénes respaldan cada proyecto?
                  </span>
                  <span className="font-action-label text-action-label text-on-surface text-headline-sm font-semibold block group-hover:text-primary transition-colors">
                    Conoce al Equipo de Dirección
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-center max-w-[380px] mb-space-md leading-relaxed">
                Rigor gerencial, certificaciones internacionales y liderazgo con más de 20 años de experiencia al servicio de tu empresa.
              </p>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:text-primary transition-all group-hover:translate-x-1">
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </div>
            </Link>
          </section>
        </div>
      </main>

      {/* FOOTER CORPORATIVO INYECTADO */}
      <Footer />

      {/* WHATSAPP CHAT BUTTON INYECTADO */}
      <WhatsAppChatButton />
    </div>
  );
};

export default Experiencia;
