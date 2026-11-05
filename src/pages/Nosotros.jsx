import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppChatButton from '../components/WhatsAppChatButton';

const Nosotros = () => {
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

          {/* 2. PRESENTACIÓN CORPORATIVA */}
          <section className="w-full mb-space-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* COLUMNA IZQUIERDA: PERFIL EJECUTIVO Y CERTIFICACIONES */}
              <div className="lg:col-span-6 bg-surface-dark-indigo/80 border border-dark-subtle rounded-xl p-space-xl shadow-2xl relative overflow-hidden flex flex-col">
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-cyan-bright/5 rounded-full blur-3xl pointer-events-none"></div>
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
                      <span className="material-symbols-outlined text-cyan-bright text-sm">school</span>
                      <span>U.Virginia</span>
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
              </div>

              {/* COLUMNA DERECHA: STACK DE TECNOLOGÍA CERTIFICADA (3 GRUPOS) */}
              <div className="lg:col-span-6 flex flex-col gap-space-lg">
                {/* GRUPO 1: Cloud & DevOps */}
                <div className="bg-surface-dark-indigo/80 border border-dark-subtle rounded-xl p-space-lg shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-space-md border-b border-dark-subtle pb-2">
                    <h3 className="font-headline-sm text-headline-sm text-text-dark-primary font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-cyan-bright">cloud</span>
                      Cloud &amp; DevOps
                    </h3>
                    <span className="font-label-tech-sm text-label-tech-sm text-text-dark-muted tracking-widest uppercase">
                      ARQUITECTURA CLOUD
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-md text-center items-end">
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition-colors">
                      <span className="font-headline-md font-extrabold tracking-tighter text-text-dark-primary">aws</span>
                      <span className="font-body-sm text-xs text-text-dark-muted leading-tight">Amazon Web Services (AWS)</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-3xl text-primary">cloud_queue</span>
                      <span className="font-body-sm text-xs text-text-dark-muted leading-tight">Oracle Cloud Infrastructure (OCI)</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-3xl text-secondary">layers</span>
                      <span className="font-body-sm text-xs text-text-dark-muted leading-tight">Terraform (IaC)</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-3xl text-cyan-bright">directions_boat</span>
                      <span className="font-body-sm text-xs text-text-dark-muted leading-tight">Docker</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-3xl text-text-dark-primary">terminal</span>
                      <span className="font-body-sm text-xs text-text-dark-muted leading-tight">Linux.</span>
                    </div>
                  </div>
                </div>

                {/* GRUPO 2: Software, IA & RevOps */}
                <div className="bg-surface-dark-indigo/80 border border-dark-subtle rounded-xl p-space-lg shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-space-md border-b border-dark-subtle pb-2">
                    <h3 className="font-headline-sm text-headline-sm text-text-dark-primary font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">psychology</span>
                      Software, IA &amp; RevOps
                    </h3>
                    <span className="font-label-tech-sm text-label-tech-sm text-text-dark-muted tracking-widest uppercase">
                      ECOSISTEMA DIGITAL
                    </span>
                  </div>
                  {/* Fila 1 de Software / Plataformas Propias y Partners */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-sm text-center mb-space-md items-stretch">
                    <div className="p-4 py-5 rounded-lg bg-surface-container-high/40 border border-dark-subtle/50 flex flex-col items-center justify-center gap-1.5 transition-colors hover:bg-surface-container-high">
                      <div className="font-headline-md text-xl md:text-2xl font-extrabold tracking-tight text-text-dark-primary">KLARI</div>
                      <span className="font-label-tech text-xs text-cyan-bright font-semibold tracking-wider">KLARI CRM</span>
                    </div>
                    <div className="p-4 py-5 rounded-lg bg-surface-container-high/40 border border-dark-subtle/50 flex flex-col items-center justify-center gap-1.5 transition-colors hover:bg-surface-container-high">
                      <div className="font-headline-md text-xl md:text-2xl font-extrabold tracking-tight text-text-dark-primary">KLERK</div>
                      <span className="font-label-tech text-xs text-primary font-semibold tracking-wider">KLERK IA</span>
                    </div>
                    <div className="p-4 py-5 rounded-lg bg-surface-container-high/40 border border-dark-subtle/50 flex flex-col items-center justify-center gap-1.5 transition-colors hover:bg-surface-container-high">
                      <div className="font-headline-md text-xl md:text-2xl font-extrabold tracking-tight text-text-dark-primary">K-lender</div>
                      <span className="font-label-tech text-xs text-secondary font-semibold tracking-wider">K-lender</span>
                    </div>
                    <div className="p-4 py-5 rounded-lg bg-surface-container-high/40 border border-dark-subtle/50 flex flex-col items-center justify-center gap-1.5 transition-colors hover:bg-surface-container-high">
                      <span className="material-symbols-outlined text-3xl text-cyan-bright">forward_to_inbox</span>
                      <span className="font-headline-sm text-sm md:text-base font-bold text-text-dark-primary">Connectmsg</span>
                      <span className="font-label-tech-sm text-[10px] text-text-dark-muted uppercase tracking-wider">Messaging API</span>
                    </div>
                    <div className="p-4 py-5 rounded-lg bg-surface-container-high/40 border border-dark-subtle/50 flex flex-col items-center justify-center gap-1 transition-colors hover:bg-surface-container-high">
                      <span className="material-symbols-outlined text-3xl text-accent-success">all_inclusive</span>
                      <span className="font-body-sm text-xs text-text-dark-primary font-semibold leading-tight mt-0.5">Meta Business Partner Ecosystem</span>
                      <span className="font-label-tech-sm text-[10px] text-text-dark-muted block mt-0.5">(WhatsApp Cloud API &amp; Marketing API)</span>
                    </div>
                  </div>

                  {/* Fila 2 de Frameworks, Modelos y CRM Empresarial */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md text-center items-center pt-space-xs border-t border-dark-subtle/50">
                    <div className="flex flex-col items-center p-2 rounded bg-surface-container-high/20">
                      <span className="font-headline-sm font-extrabold text-cyan-bright">Bitrix24</span>
                      <span className="font-body-sm text-xs text-text-dark-muted mt-1">Bitrix24</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded bg-surface-container-high/20">
                      <span className="material-symbols-outlined text-3xl text-primary">neurology</span>
                      <span className="font-body-sm text-xs text-text-dark-muted mt-1">Modelos LLM</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded bg-surface-container-high/20">
                      <span className="material-symbols-outlined text-3xl text-accent-success">code</span>
                      <span className="font-body-sm text-xs text-text-dark-muted mt-1">Python</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded bg-surface-container-high/20">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6-7NfIb5LATcxlXQsikhhfLJs5nZOqBYtK9ORx8w6ztNR5THchHhFQJflsFK8pOyBp0Nl-QewXRHv8I9JcN7VGFkG3LSuRFNG1Jx8hXLl_PkDenJsF4LLmEqe5xT_x5QlD6kNQ4vmvflGP4izFN5oNzUEevRDewzHdX61OIj0iOrefBNFrw6PNjbsBzbEgOzayY1T3krtuoUHcIdM8Wrgv9EDUEb3SKzzgzDdw1sxV-Rz5FjGLLJn"
                        alt="React"
                        className="w-8 h-8 object-contain"
                      />
                      <span className="font-body-sm text-xs text-text-dark-muted mt-1">React.</span>
                    </div>
                  </div>
                </div>

                {/* GRUPO 3: Redes e Infraestructura */}
                <div className="bg-surface-dark-indigo/80 border border-dark-subtle rounded-xl p-space-lg shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-space-md border-b border-dark-subtle pb-2">
                    <h3 className="font-headline-sm text-headline-sm text-text-dark-primary font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-accent-success">router</span>
                      Redes e Infraestructura
                    </h3>
                    <span className="font-label-tech-sm text-label-tech-sm text-text-dark-muted tracking-widest uppercase">
                      CONECTIVIDAD CRÍTICA
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-md text-center items-end">
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-3xl text-cyan-bright">grain</span>
                      <span className="font-body-sm text-xs text-text-dark-muted leading-tight">Fibra Óptica ODF</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-3xl text-primary">network_check</span>
                      <span className="font-body-sm text-xs text-text-dark-muted leading-tight">Red MPLS Capa 2/3</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-3xl text-secondary">hub</span>
                      <span className="font-body-sm text-xs text-text-dark-muted leading-tight">Cableado Estructurado Cat 6/6A</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-3xl text-accent-success">bolt</span>
                      <span className="font-body-sm text-xs text-text-dark-muted leading-tight">Respaldo Eléctrico RETIE/UPS</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-3xl text-tertiary">videocam</span>
                      <span className="font-body-sm text-xs text-text-dark-muted leading-tight">Climatización de Precisión y CCTV IP.</span>
                    </div>
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
