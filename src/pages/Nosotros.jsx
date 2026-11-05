import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppChatButton from '../components/WhatsAppChatButton';

const Nosotros = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="bg-surface-dark-base text-on-surface font-body-md text-body-md min-h-screen selection:bg-primary-container selection:text-on-primary-container relative overflow-x-hidden flex flex-col justify-between">
      {/* Fondo ambiental */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(59,40,117,0.25)_0%,transparent_60%)]"></div>

      {/* NAVBAR CORPORATIVO INYECTADO */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="w-full max-w-[1440px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex-1 pt-28">
        <div className="flex flex-col w-full pb-space-3xl">
          {/* 1. ENCABEZADO DE SECCIÓN */}
          <section className="relative w-full pt-space-xl pb-space-2xl overflow-hidden">
            <div className="flex flex-col max-w-5xl">
              <h1 className="font-display-hero text-display-hero text-text-dark-primary font-extrabold tracking-tight mb-space-md">
                <span className="text-text-dark-primary">Rigor gerencial internacional</span>{' '}
                <span className="bg-gradient-to-r from-cyan-bright via-primary to-tertiary-container bg-clip-text text-transparent text-gradient-brand">
                  al servicio de su organización.
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-text-dark-muted max-w-4xl leading-relaxed">
                Arquitectura institucional, gobierno técnico y respaldo ejecutivo de alta fidelidad tecnológica en entornos críticos del sector financiero, asegurador y tecnológico en Latinoamérica.
              </p>
            </div>
          </section>

          {/* 2. PRESENTACIÓN CORPORATIVA: 3D FLASHCARD INTERACTIVA */}
          <section className="w-full mb-space-3xl">
            <div className="max-w-4xl mx-auto w-full card-perspective">
              <div
                className={`relative w-full transition-transform duration-700 card-preserve-3d ${
                  isFlipped ? 'card-rotate-y-180' : 'card-rotate-y-0'
                }`}
              >
                {/* CARA FRONTAL: PERFIL EJECUTIVO & EQUIPO */}
                <div
                  className={`w-full bg-surface-dark-indigo/80 border border-dark-subtle rounded-2xl p-space-lg sm:p-space-xl shadow-2xl relative overflow-hidden flex flex-col card-backface-hidden ${
                    isFlipped ? 'pointer-events-none' : ''
                  }`}
                >
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-cyan-bright/5 rounded-full blur-3xl pointer-events-none"></div>

                  {/* Banner interactivo UX: Indicador visible y llamativo del Stack de herramientas */}
                  <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 mb-space-md p-3.5 rounded-xl bg-gradient-to-r from-cyan-bright/15 via-primary/10 to-brand-magenta/15 border border-cyan-bright/40 backdrop-blur-md shadow-lg group hover:border-cyan-bright transition-all">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3.5 w-3.5 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-bright opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-bright"></span>
                      </span>
                      <div className="text-left">
                        <span className="font-label-tech text-xs text-cyan-bright uppercase tracking-wider block font-bold">
                          ⚡ STACK TECNOLÓGICO MULTINUBE, IA &amp; REDES
                        </span>
                        <span className="font-body-sm text-[12px] text-text-dark-muted hidden sm:inline">
                          AWS • Oracle OCI • Docker • Python • React • WhatsApp API • Fibra Óptica
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsFlipped(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--brand-cyan)] via-[var(--brand-cyan-bright)] to-[var(--brand-magenta)] text-slate-950 font-action-label text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(25,227,255,0.4)] hover:shadow-[0_0_28px_rgba(217,0,196,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        sync_alt
                      </span>
                      <span>Girar para ver Stack Técnico</span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>

                  {/* Header de perfil con fotografía corporativa completa e insignias */}
                  <div className="relative flex flex-col mb-space-lg">
                    {/* Fotografía panorámica corporativa de alta fidelidad (aspecto original 16:10 para ver todo el equipo) */}
                    <div className="relative w-full aspect-[2574/1620] rounded-xl overflow-hidden border-2 border-cyan-bright/40 shadow-2xl bg-surface-container-low group/leader mb-space-md">
                      <img
                        src="/images/EquipoB&N.png"
                        alt="Equipo de Dirección e Ingeniería Brilliantic — Jorge Antonio Valencia Córdoba"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/leader:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark-base/30 via-transparent to-transparent pointer-events-none"></div>
                    </div>

                    {/* Insignias y certificaciones corporativas ordenadas sin tapar la foto */}
                    <div className="w-full flex flex-wrap justify-center items-center gap-2 mb-space-md">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-dark-strong text-text-dark-primary font-headline-sm text-xs shadow-sm">
                        <span className="material-symbols-outlined text-cyan-bright text-sm">military_tech</span>
                        <span className="font-bold">MGIP</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-dark-strong text-text-dark-primary font-headline-sm text-xs shadow-sm">
                        <span className="material-symbols-outlined text-primary text-sm">verified</span>
                        <span className="font-bold">GIMI</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-dark-strong text-on-surface text-xs font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-accent-success text-sm">sprint</span>
                        <span>Scrum</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-dark-strong text-on-surface text-xs font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-tertiary text-sm">sync_alt</span>
                        <span>Transf. Digital</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-dark-strong text-on-surface text-xs font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                        <span>COPNIA</span>
                      </div>
                    </div>

                    {/* Nombre y cargo directivo */}
                    <div className="text-center">
                      <h3 className="font-headline-md text-headline-md text-text-dark-primary font-bold">
                        Jorge Antonio Valencia Córdoba
                      </h3>
                      <span className="font-label-tech text-label-tech text-cyan-bright block mt-1 uppercase tracking-wider">
                        Dirección General &amp; Gobierno de Ingeniería
                      </span>
                    </div>
                  </div>

                  {/* Viñetas verbatim oficiales */}
                  <div className="border-t border-dark-subtle pt-space-lg flex flex-col gap-space-sm font-label-tech text-body-sm text-on-surface leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <span className="text-cyan-bright font-bold">-</span>
                      <p>
                        <strong className="text-text-dark-primary">Dirección ejecutiva con más de 13 años de experiencia</strong>{' '}
                        escalando equipos de 35 a 180 personas y operaciones críticas a nivel nacional.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-cyan-bright font-bold">-</span>
                      <p>
                        <strong className="text-text-dark-primary">Maestría en Gerencia Integral de Proyectos (MGIP)</strong>{' '}
                        e Ingeniería Electrónica y de Telecomunicaciones (Matrícula Profesional COPNIA vigente).
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-cyan-bright font-bold">-</span>
                      <p>
                        <strong className="text-text-dark-primary">Innovation Management Certification (GIMI – Global Innovation Management Institute):</strong>{' '}
                        Estándares internacionales aplicados al desarrollo de software e innovación B2B.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-cyan-bright font-bold">-</span>
                      <p>
                        <strong className="text-text-dark-primary">Digital Transformation</strong> y Marketing Digital e IA.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-cyan-bright font-bold">-</span>
                      <p>
                        <strong className="text-text-dark-primary">Marcos Ágiles y de Ejecución:</strong>{' '}
                        Certificaciones internacionales como Scrum Master, OKR Master y cumplimiento normativo RETIE.
                      </p>
                    </div>
                  </div>

                  {/* Pie inferior de la cara frontal: acceso secundario */}
                  <div className="mt-space-lg pt-space-md border-t border-dark-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-text-dark-muted font-label-tech-sm text-xs">
                      <span className="w-2 h-2 rounded-full bg-accent-success"></span>
                      <span>INFRAESTRUCTURA AUDITABLE &bull; CAPACIDADES TÉCNICAS B2B</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsFlipped(true)}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-cyan-bright/40 text-cyan-bright hover:text-white font-label-tech text-xs font-semibold transition-all cursor-pointer group shadow-sm"
                    >
                      <span>Explorar herramientas &amp; arquitecturas</span>
                      <span className="material-symbols-outlined text-[16px] transition-transform group-hover:rotate-180">
                        flip
                      </span>
                    </button>
                  </div>
                </div>

                {/* CARA POSTERIOR: REVERSO CON EL STACK DE TECNOLOGÍA CERTIFICADA */}
                <div
                  className={`absolute inset-0 w-full h-full bg-surface-dark-indigo/95 border-2 border-cyan-bright/40 rounded-2xl p-space-lg sm:p-space-xl shadow-2xl overflow-y-auto flex flex-col justify-between card-backface-hidden card-rotate-y-180 ${
                    !isFlipped ? 'pointer-events-none' : ''
                  }`}
                >
                  <div className="flex flex-col gap-space-md">
                    {/* Encabezado del Reverso con botón de retorno */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-dark-subtle pb-space-sm">
                      <div>
                        <div className="inline-flex items-center gap-2 text-cyan-bright font-label-tech text-xs uppercase tracking-wider mb-1">
                          <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></span>
                          CAPACIDADES DE INGENIERÍA Y ARQUITECTURA
                        </div>
                        <h3 className="font-headline-lg text-headline-sm sm:text-headline-md text-text-dark-primary font-bold">
                          Stack Tecnológico &amp; Herramientas Certificadas
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsFlipped(false)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-magenta)] text-slate-950 font-action-label text-xs sm:text-sm font-bold shadow-[0_0_18px_rgba(25,227,255,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer self-start sm:self-auto"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          replay
                        </span>
                        <span>Volver al Perfil</span>
                      </button>
                    </div>

                    {/* GRUPO 1: Cloud & DevOps */}
                    <div className="bg-surface-container-high/40 border border-dark-subtle rounded-xl p-space-md shadow-md relative overflow-hidden">
                      <div className="flex items-center justify-between mb-space-sm border-b border-dark-subtle pb-1.5">
                        <h4 className="font-headline-sm text-sm sm:text-base text-text-dark-primary font-bold flex items-center gap-2">
                          <span className="material-symbols-outlined text-cyan-bright text-lg">cloud</span>
                          Cloud &amp; DevOps
                        </h4>
                        <span className="font-label-tech-sm text-[11px] text-text-dark-muted tracking-widest uppercase">
                          ARQUITECTURA CLOUD
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-sm text-center items-end">
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
                          <span className="font-headline-md font-extrabold tracking-tighter text-text-dark-primary text-lg">aws</span>
                          <span className="font-body-sm text-[11px] text-text-dark-muted leading-tight">Amazon Web Services</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-2xl text-primary">cloud_queue</span>
                          <span className="font-body-sm text-[11px] text-text-dark-muted leading-tight">Oracle Cloud (OCI)</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-2xl text-secondary">layers</span>
                          <span className="font-body-sm text-[11px] text-text-dark-muted leading-tight">Terraform (IaC)</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-2xl text-cyan-bright">directions_boat</span>
                          <span className="font-body-sm text-[11px] text-text-dark-muted leading-tight">Docker</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-2xl text-text-dark-primary">terminal</span>
                          <span className="font-body-sm text-[11px] text-text-dark-muted leading-tight">Linux Enterprise</span>
                        </div>
                      </div>
                    </div>

                    {/* GRUPO 2: Software, IA & RevOps */}
                    <div className="bg-surface-container-high/40 border border-dark-subtle rounded-xl p-space-md shadow-md relative overflow-hidden">
                      <div className="flex items-center justify-between mb-space-sm border-b border-dark-subtle pb-1.5">
                        <h4 className="font-headline-sm text-sm sm:text-base text-text-dark-primary font-bold flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-lg">psychology</span>
                          Software, IA &amp; RevOps
                        </h4>
                        <span className="font-label-tech-sm text-[11px] text-text-dark-muted tracking-widest uppercase">
                          ECOSISTEMA DIGITAL
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-xs text-center mb-space-sm items-stretch">
                        <div className="p-3 rounded-lg bg-surface-container-high/60 border border-dark-subtle/50 flex flex-col items-center justify-center gap-1 transition-colors hover:bg-surface-container-high">
                          <div className="font-headline-md text-lg font-extrabold tracking-tight text-text-dark-primary">KLARI</div>
                          <span className="font-label-tech text-[10px] text-cyan-bright font-semibold tracking-wider">KLARI CRM</span>
                        </div>
                        <div className="p-3 rounded-lg bg-surface-container-high/60 border border-dark-subtle/50 flex flex-col items-center justify-center gap-1 transition-colors hover:bg-surface-container-high">
                          <div className="font-headline-md text-lg font-extrabold tracking-tight text-text-dark-primary">KLERK</div>
                          <span className="font-label-tech text-[10px] text-primary font-semibold tracking-wider">KLERK IA</span>
                        </div>
                        <div className="p-3 rounded-lg bg-surface-container-high/60 border border-dark-subtle/50 flex flex-col items-center justify-center gap-1 transition-colors hover:bg-surface-container-high">
                          <div className="font-headline-md text-lg font-extrabold tracking-tight text-text-dark-primary">K-lender</div>
                          <span className="font-label-tech text-[10px] text-secondary font-semibold tracking-wider">K-lender</span>
                        </div>
                        <div className="p-3 rounded-lg bg-surface-container-high/60 border border-dark-subtle/50 flex flex-col items-center justify-center gap-0.5 transition-colors hover:bg-surface-container-high">
                          <span className="material-symbols-outlined text-2xl text-cyan-bright">forward_to_inbox</span>
                          <span className="font-headline-sm text-xs font-bold text-text-dark-primary">Connectmsg</span>
                          <span className="font-label-tech-sm text-[9px] text-text-dark-muted uppercase">Messaging API</span>
                        </div>
                        <div className="p-3 rounded-lg bg-surface-container-high/60 border border-dark-subtle/50 flex flex-col items-center justify-center gap-0.5 transition-colors hover:bg-surface-container-high">
                          <span className="material-symbols-outlined text-2xl text-accent-success">all_inclusive</span>
                          <span className="font-body-sm text-[10px] text-text-dark-primary font-semibold leading-tight">Meta Partner</span>
                          <span className="font-label-tech-sm text-[9px] text-text-dark-muted">(Cloud API)</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm text-center items-center pt-space-xs border-t border-dark-subtle/50">
                        <div className="flex flex-col items-center p-1.5 rounded bg-surface-container-high/40">
                          <span className="font-headline-sm font-extrabold text-cyan-bright text-sm">Bitrix24</span>
                          <span className="font-body-sm text-[10px] text-text-dark-muted mt-0.5">CRM Empresarial</span>
                        </div>
                        <div className="flex flex-col items-center p-1.5 rounded bg-surface-container-high/40">
                          <span className="material-symbols-outlined text-2xl text-primary">neurology</span>
                          <span className="font-body-sm text-[10px] text-text-dark-muted mt-0.5">Modelos LLM</span>
                        </div>
                        <div className="flex flex-col items-center p-1.5 rounded bg-surface-container-high/40">
                          <span className="material-symbols-outlined text-2xl text-accent-success">code</span>
                          <span className="font-body-sm text-[10px] text-text-dark-muted mt-0.5">Python</span>
                        </div>
                        <div className="flex flex-col items-center p-1.5 rounded bg-surface-container-high/40">
                          <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6-7NfIb5LATcxlXQsikhhfLJs5nZOqBYtK9ORx8w6ztNR5THchHhFQJflsFK8pOyBp0Nl-QewXRHv8I9JcN7VGFkG3LSuRFNG1Jx8hXLl_PkDenJsF4LLmEqe5xT_x5QlD6kNQ4vmvflGP4izFN5oNzUEevRDewzHdX61OIj0iOrefBNFrw6PNjbsBzbEgOzayY1T3krtuoUHcIdM8Wrgv9EDUEb3SKzzgzDdw1sxV-Rz5FjGLLJn"
                            alt="React"
                            className="w-6 h-6 object-contain"
                          />
                          <span className="font-body-sm text-[10px] text-text-dark-muted mt-0.5">React Ecosystem</span>
                        </div>
                      </div>
                    </div>

                    {/* GRUPO 3: Redes e Infraestructura */}
                    <div className="bg-surface-container-high/40 border border-dark-subtle rounded-xl p-space-md shadow-md relative overflow-hidden">
                      <div className="flex items-center justify-between mb-space-sm border-b border-dark-subtle pb-1.5">
                        <h4 className="font-headline-sm text-sm sm:text-base text-text-dark-primary font-bold flex items-center gap-2">
                          <span className="material-symbols-outlined text-accent-success text-lg">router</span>
                          Redes e Infraestructura
                        </h4>
                        <span className="font-label-tech-sm text-[11px] text-text-dark-muted tracking-widest uppercase">
                          CONECTIVIDAD CRÍTICA
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-sm text-center items-end">
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-2xl text-cyan-bright">grain</span>
                          <span className="font-body-sm text-[11px] text-text-dark-muted leading-tight">Fibra Óptica ODF</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-2xl text-primary">network_check</span>
                          <span className="font-body-sm text-[11px] text-text-dark-muted leading-tight">Red MPLS Capa 2/3</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-2xl text-secondary">hub</span>
                          <span className="font-body-sm text-[11px] text-text-dark-muted leading-tight">Cableado Cat 6/6A</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-2xl text-accent-success">bolt</span>
                          <span className="font-body-sm text-[11px] text-text-dark-muted leading-tight">Respaldo RETIE/UPS</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-2xl text-tertiary">videocam</span>
                          <span className="font-body-sm text-[11px] text-text-dark-muted leading-tight">Climatización &amp; CCTV</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pie inferior del reverso: botón secundario de retorno */}
                  <div className="mt-space-md pt-space-sm border-t border-dark-subtle/50 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <span className="font-label-tech-sm text-text-dark-muted text-xs">
                      // Arquitecturas multinube, IA aplicada e infraestructura corporativa
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsFlipped(false)}
                      className="inline-flex items-center gap-1.5 text-cyan-bright hover:text-white font-label-tech text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">arrow_back</span>
                      <span>Girar tarjeta y ver Perfil de Dirección</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* 6. CIERRE DE TRANSICIÓN SPA: CONTACTO WHATSAPP */}
          <section className="w-full flex flex-col items-center justify-center pt-8 pb-4">
            <a
              href="https://wa.me/573228273454"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-space-xl rounded-2xl bg-surface-container hover:bg-surface-container-high max-w-[460px] w-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_32px_rgba(25,227,255,0.15)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-space-md mb-space-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-accent-success group-hover:bg-accent-success group-hover:text-surface-dark-base transition-colors">
                  <span className="material-symbols-outlined text-[26px]">chat</span>
                </div>
                <div className="text-left">
                  <span className="font-label-tech-sm text-label-tech-sm text-cyan-bright uppercase tracking-wider block">
                    Contacto Directo
                  </span>
                  <span className="font-action-label text-action-label text-on-surface text-headline-sm font-semibold block">
                    Iniciar Conversación por WhatsApp
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-center max-w-[340px] mb-space-md">
                Conecte de inmediato con nuestro equipo de ingeniería y dirección para estructurar su proyecto.
              </p>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:text-accent-success animate-bounce">
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </div>
            </a>
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

export default Nosotros;
