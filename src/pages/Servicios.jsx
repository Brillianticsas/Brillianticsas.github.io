import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppChatButton from '../components/WhatsAppChatButton';

const Servicios = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#0a0e18] text-[#ffffff] font-sans antialiased selection:bg-brand-cyan selection:text-slate-900">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="w-full max-w-7xl mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-12 py-10 sm:py-14 pt-28 flex-1">
        <div className="flex flex-col w-full">
          {/* SECCIÓN 03: UNIDADES DE INGENIERÍA Y SERVICIOS */}
          <section className="relative w-full flex flex-col gap-12 sm:gap-16 py-6 sm:py-10" id="unidades-de-ingenieria">
            {/* ELEMENTOS DE FONDO AMBIENTAL TÉCNICO */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 left-10 w-[30rem] h-[30rem] bg-brand-indigo/15 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-magenta/10 rounded-full blur-3xl"></div>
            </div>

            {/* 1. ENCABEZADO DE SECCIÓN */}
            <header className="flex flex-col gap-6 lg:gap-8 w-full">
              <div className="flex flex-col gap-4 max-w-5xl">
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Un ecosistema completo de Ingeniería, Nube e Inteligencia Comercial.
                </h1>
              </div>
            </header>

            {/* 2. COMPOSICIÓN MODULAR (BENTO GRID 4 CUADRANTES + NODO CENTRAL) */}
            <div className="relative w-full my-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {/* CUADRANTE 01: META / CRM / IA */}
                <article className="relative rounded-2xl p-6 sm:p-8 bg-[#0f131d]/90 backdrop-blur-md border border-[#ec4899]/40 hover:border-[#ec4899] hover:shadow-[0_16px_36px_-10px_rgba(236,72,153,0.22)] transition-all flex flex-col justify-between group overflow-hidden shadow-xl min-h-[290px]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-[#ec4899]">
                      <div className="flex items-center gap-2 text-sm font-semibold opacity-90">
                        <svg className="w-6 h-4" fill="currentColor" viewBox="0 0 24 16">
                          <path d="M16.9 0a7.08 7.08 0 0 0-4.9 2.05A7.08 7.08 0 0 0 7.1 0C3.18 0 0 3.28 0 7.33c0 4.9 4.3 8.35 10.63 8.64a5.9 5.9 0 0 0 1.37 0C18.33 15.68 24 12.23 24 7.33 24 3.28 20.82 0 16.9 0zm-9.8 12.64C3.84 12.4 2.1 10.15 2.1 7.33 2.1 4.54 4.34 2.27 7.1 2.27c2.26 0 4.13 1.5 4.76 3.65-.63 2.15-2.5 3.65-4.76 3.65a4.8 4.8 0 0 1-.9-.08c.3.93.9 1.95 1.9 3.15zm9.8 0c-1-1.2-1.6-2.22-1.9-3.15.3.03.6.08.9.08 2.26 0 4.13-1.5 4.76-3.65-.63-2.15-2.5-3.65-4.76-3.65-2.76 0-5 2.27-5 5.06 0 2.82 1.74 5.07 5 5.31z"></path>
                        </svg>
                        <span className="font-sans text-xs tracking-wider font-semibold">Meta</span>
                      </div>
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      Automatización Comercial, IA y Sistemas ARM/CRM.
                    </h2>
                    <p className="font-sans text-sm sm:text-[15px] text-[#94a3b8] leading-relaxed">
                      Implementación de embudos conversacionales 24/7, despliegue de nuestro sistema propio KLARI CRM e integración de Bitrix24 con la API oficial de WhatsApp Business para optimizar el retorno de inversión publicitaria en Meta Ads.
                    </p>
                  </div>
                </article>

                {/* CUADRANTE 02: AWS / SAAS / CLOUD */}
                <article className="relative rounded-2xl p-6 sm:p-8 bg-[#0f131d]/90 backdrop-blur-md border border-[#00b8e6]/40 hover:border-[#00b8e6] hover:shadow-[0_16px_36px_-10px_rgba(0,184,230,0.22)] transition-all flex flex-col justify-between group overflow-hidden shadow-xl min-h-[290px]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-[#00b8e6]">
                      <div className="flex items-center gap-3 text-xs opacity-90">
                        <span className="font-mono font-bold tracking-tight text-sm">aws</span>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1.5 4.5l6.5 3.8v7.5l-6.5-3.8V4.5zm7.5 4.4l6.5-3.8v7.5L9 16.4V8.9zm7.5-4.4l6.5 3.8v7.5l-6.5-3.8V4.5z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      Desarrollo de Software SaaS y Arquitectura Cloud/DevOps.
                    </h2>
                    <p className="font-sans text-sm sm:text-[15px] text-[#94a3b8] leading-relaxed">
                      Ingeniería de software a medida, plataformas multi-tenant e interoperabilidad por APIs sobre Amazon Web Services (AWS) y Oracle Cloud Infrastructure (OCI), gestionadas bajo Infraestructura como Código (Terraform) y despliegues automatizados CI/CD.
                    </p>
                  </div>
                </article>

                {/* CUADRANTE 03: CONSULTORÍA Y GERENCIA TI */}
                <article className="relative rounded-2xl p-6 sm:p-8 bg-[#0f131d]/90 backdrop-blur-md border border-[#38bdf8]/40 hover:border-[#38bdf8] hover:shadow-[0_16px_36px_-10px_rgba(56,189,248,0.22)] transition-all flex flex-col justify-between group overflow-hidden shadow-xl min-h-[290px]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-[#38bdf8]">
                      <span className="material-symbols-outlined text-[20px]">hub</span>
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      Consultoría en Transformación Digital y Gerencia TI.
                    </h2>
                    <p className="font-sans text-sm sm:text-[15px] text-[#94a3b8] leading-relaxed">
                      Estructuración, dirección e interventoría técnica de proyectos públicos y privados bajo estándares internacionales MGIP (PMI) e innovación certificada GIMI, incluyendo automatización y sustanciación documental con IA.
                    </p>
                  </div>
                </article>

                {/* CUADRANTE 04: SPOC 360 & REDES */}
                <article className="relative rounded-2xl p-6 sm:p-8 bg-[#0f131d]/90 backdrop-blur-md border border-[#10b981]/40 hover:border-[#10b981] hover:shadow-[0_16px_36px_-10px_rgba(16,185,129,0.22)] transition-all flex flex-col justify-between group overflow-hidden shadow-xl min-h-[290px]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-[#10b981]">
                      <span className="material-symbols-outlined text-[20px]">lan</span>
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      Conectividad Nacional SPOC 360° e Infraestructura Física.
                    </h2>
                    <p className="font-sans text-sm sm:text-[15px] text-[#94a3b8] leading-relaxed">
                      Gestión centralizada de telecomunicaciones urbanas y rurales, fibra óptica, redes empresariales LAN/WLAN, cableado estructurado Categoría 6 y 6A certificado, redes eléctricas bajo norma RETIE, climatización crítica, CCTV IP y controles biométricos.
                    </p>
                  </div>
                </article>
              </div>

              {/* NODO CENTRAL CONECTIVO SVG */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-20">
                <svg
                  className="absolute w-full h-full inset-0 pointer-events-none"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 600"
                >
                  <line stroke="url(#beam-magenta)" strokeWidth="1.5" x1="500" x2="260" y1="300" y2="155"></line>
                  <line stroke="url(#beam-cyan)" strokeWidth="1.5" x1="500" x2="740" y1="300" y2="155"></line>
                  <line stroke="url(#beam-sky)" strokeWidth="1.5" x1="500" x2="260" y1="300" y2="445"></line>
                  <line stroke="url(#beam-green)" strokeWidth="1.5" x1="500" x2="740" y1="300" y2="445"></line>
                  <defs>
                    <linearGradient id="beam-magenta" x1="100%" x2="0%" y1="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9"></stop>
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="beam-cyan" x1="0%" x2="100%" y1="100%" y2="0%">
                      <stop offset="0%" stopColor="#00b8e6" stopOpacity="0.9"></stop>
                      <stop offset="100%" stopColor="#00b8e6" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="beam-sky" x1="100%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9"></stop>
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="beam-green" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.9"></stop>
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-28 h-28 rounded-full bg-[#19e3ff]/20 blur-xl"></div>
                  <div className="absolute w-44 h-44 rounded-full bg-[#00b8e6]/10 blur-2xl"></div>
                  <svg
                    className="w-16 h-16 drop-shadow-[0_0_15px_rgba(25,227,255,0.8)] relative z-10"
                    fill="none"
                    stroke="#19e3ff"
                    strokeWidth="1.5"
                    viewBox="0 0 100 100"
                  >
                    <polygon
                      fill="#0a0e18"
                      fillOpacity="0.85"
                      points="50,12 85,32 85,68 50,88 15,68 15,32"
                      stroke="#19e3ff"
                      strokeWidth="2"
                    ></polygon>
                    <polygon
                      fill="none"
                      points="50,12 50,88 15,68 50,12 85,68 15,32 85,32 50,88"
                      stroke="#5dd4ff"
                      strokeOpacity="0.6"
                      strokeWidth="1.2"
                    ></polygon>
                    <circle cx="50" cy="50" fill="#ffffff" r="4"></circle>
                  </svg>
                </div>
              </div>
            </div>

            {/* 3. CIERRE DE SECCIÓN: CALL TO ACTION INSTITUCIONAL */}
            <div className="w-full relative rounded-2xl bg-[#171b26] border border-[#232a3b] p-8 sm:p-12 overflow-hidden shadow-xl">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#00b8e6]/10 blur-3xl pointer-events-none"></div>
              <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#a855f7]/10 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="flex flex-col gap-3 max-w-2xl">
                  <div className="flex items-center gap-2 text-[#00b8e6]">
                    <span className="w-2 h-2 rounded-full bg-[#00b8e6] node-pulse"></span>
                    <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                      INGENIERÍA A LA MEDIDA
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    ¿Su organización requiere una solución de ingeniería a medida?
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                    Analizamos sus desafíos tecnológicos y estructuramos un equipo especializado para ejecutar con precisión y rigor técnico.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 w-full lg:w-auto shrink-0">
                  <a
                    href="https://wa.me/573228273454"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#00b8e6] hover:bg-[#19e3ff] text-slate-900 font-heading text-sm font-semibold shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Consultar requerimiento técnico</span>
                    <span>→</span>
                  </a>
                  <div className="flex items-center gap-2 text-[#64748b]">
                    <span className="font-mono text-xs">Tiempo de respuesta &lt; 24h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. TRANSICIÓN A LA SIGUIENTE SECCIÓN DE LA SPA */}
            <div className="w-full flex flex-col items-center justify-center pt-8 pb-4">
              <Link
                to="/Arquitectura"
                className="group relative flex flex-col items-center justify-center p-space-xl rounded-2xl bg-surface-container hover:bg-surface-container-high max-w-[460px] w-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_32px_rgba(25,227,255,0.15)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-space-md mb-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">account_tree</span>
                  </div>
                  <div className="text-left">
                    <span className="font-label-tech-sm text-label-tech-sm text-cyan-bright uppercase tracking-wider block">
                      Siguiente Sección
                    </span>
                    <span className="font-action-label text-action-label text-on-surface text-headline-sm font-semibold block">
                      Continuar a Arquitectura
                    </span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-center max-w-[340px] mb-space-md">
                  Modelo SPOC 360°, topología de cobertura nacional y niveles de escalamiento operacional.
                </p>
                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:text-primary animate-bounce">
                  <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* WHATSAPP CHAT BUTTON */}
      <WhatsAppChatButton />
    </div>
  );
};

export default Servicios;
