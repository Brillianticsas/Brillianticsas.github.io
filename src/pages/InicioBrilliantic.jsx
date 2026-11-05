import React from 'react';
import { Link } from 'react-router-dom';
import home_logo from '../images/HomeLogo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InicioBrilliantic = () => {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="w-full pt-20 bg-surface min-h-screen flex-1">
        <div className="flex flex-col w-full">
          {/* SECCIÓN HERO PRINCIPAL */}
          <section className="relative w-full max-w-[1440px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg pt-space-xl lg:pt-space-2xl pb-space-2xl lg:pb-space-3xl overflow-hidden">
            {/* Luces de ambiente sutiles contenidas */}
            <div className="absolute -top-32 right-10 w-[520px] h-[520px] rounded-full bg-secondary-container/20 blur-[130px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-0 w-[420px] h-[420px] rounded-full bg-primary-container/10 blur-[120px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-center">
              {/* Columna Izquierda: Información & Acciones Estratégicas */}
              <div className="lg:col-span-7 flex flex-col items-start z-10">
                

                {/* Título Principal Editorial */}
                <h1 className="font-display-hero text-headline-xl md:text-display-hero text-on-surface tracking-tight leading-tight max-w-[680px] mb-space-lg font-bold">
                  BRILLIANTIC S.A.S. —{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-cyan)] via-[var(--brand-cyan-bright)] to-[var(--brand-magenta)]">
                    Convertimos la tecnología en un activo de continuidad operativa y aceleración de ingresos.
                  </span>
                </h1>

                {/* Párrafo Descriptor */}
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[620px] mb-space-xl leading-relaxed">
                  Nuestra ventaja competitiva radica en la capacidad de diseñar, ejecutar y soportar soluciones que van desde la infraestructura crítica y la conectividad nacional hasta la automatización comercial con Inteligencia Artificial, operando bajo metodologías internacionales de Gerencia Integral de Proyectos (MGIP) e Innovación (GIMI) que reducen el riesgo operativo, centralizan la responsabilidad técnica y aseguran retornos de inversión medibles.
                </p>

                {/* Bloque de Botones de Acción */}
                <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
                  <Link
                    to="/Productos"
                    className="group inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-xl bg-gradient-to-r from-[var(--brand-cyan)] via-[var(--brand-cyan-bright)] to-[var(--brand-magenta)] text-slate-950 font-action-label text-action-label shadow-[0_0_24px_rgba(25,227,255,0.3)] hover:shadow-[0_0_36px_rgba(217,0,196,0.35)] hover:-translate-y-0.5 transition-all"
                  >
                    <span>Conocer nuestras soluciones</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <a
                    href="https://wa.me/573228273454"
                    className="inline-flex items-center justify-center gap-space-sm px-space-lg py-space-md rounded-xl bg-surface-container-high/60 hover:bg-surface-container-highest text-on-surface font-action-label text-action-label shadow-sm hover:-translate-y-0.5 transition-all"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">domain_verification</span>
                    <span>Contactar con Brilliantic</span>
                  </a>
                </div>

              </div>

              {/* Columna Derecha: Diagrama de Conexiones Abstracto & Arquitectura Espacial */}
              <div className="lg:col-span-5 relative flex items-center justify-center mt-space-xl lg:mt-0">
                <div className="relative w-full aspect-[4/5] max-w-[480px] p-space-lg rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-2xl flex flex-col justify-between overflow-hidden group">
                  <div className="relative w-full h-full min-h-[460px] rounded-2xl overflow-hidden flex flex-col justify-between bg-surface-container/70 shadow-2xl">
                    <div className="absolute inset-0 z-0">
                      <img
                        src={home_logo}
                        alt="Arquitectura Brilliantic - Red Neuronal e Infraestructura Cloud"
                        className="w-full h-full object-cover object-right opacity-90 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10 p-space-lg flex items-center justify-between">
                      <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-bright animate-pulse"></span>
                        <span className="font-label-tech-sm text-label-tech-sm text-on-surface tracking-wider font-semibold">
                          IA & INFRAESTRUCTURA SPOC
                        </span>
                      </div>
                    </div>
                    <div className="relative z-10 p-space-lg pt-0 grid grid-cols-2 gap-space-xs">
                      <div className="p-space-xs rounded-lg bg-surface-container-lowest/80 backdrop-blur-md flex items-center gap-space-xs">
                        <span className="w-1.5 h-6 rounded-full bg-cyan-bright"></span>
                        <div className="min-w-0">
                          <div className="font-label-tech-sm text-label-tech-sm text-on-surface truncate">IA & SaaS</div>
                          <div className="font-body-sm text-[11px] text-outline truncate">Automatización</div>
                        </div>
                      </div>
                      <div className="p-space-xs rounded-lg bg-surface-container-lowest/80 backdrop-blur-md flex items-center gap-space-xs">
                        <span className="w-1.5 h-6 rounded-full bg-secondary"></span>
                        <div className="min-w-0">
                          <div className="font-label-tech-sm text-label-tech-sm text-on-surface truncate">Cloud & DevOps</div>
                          <div className="font-body-sm text-[11px] text-outline truncate">Cómputo elástico</div>
                        </div>
                      </div>
                      <div className="p-space-xs rounded-lg bg-surface-container-lowest/80 backdrop-blur-md flex items-center gap-space-xs">
                        <span className="w-1.5 h-6 rounded-full bg-accent-success"></span>
                        <div className="min-w-0">
                          <div className="font-label-tech-sm text-label-tech-sm text-on-surface truncate">Infraestructura</div>
                          <div className="font-body-sm text-[11px] text-outline truncate">Misión Crítica</div>
                        </div>
                      </div>
                      <div className="p-space-xs rounded-lg bg-surface-container-lowest/80 backdrop-blur-md flex items-center gap-space-xs">
                        <span className="w-1.5 h-6 rounded-full bg-tertiary"></span>
                        <div className="min-w-0">
                          <div className="font-label-tech-sm text-label-tech-sm text-on-surface truncate">MGIP & GIMI</div>
                          <div className="font-body-sm text-[11px] text-outline truncate">Garantía de ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-indicador de rigor y gobernanza a ancho completo */}
            <div className="mt-space-xl w-full border-t border-border-dark-subtle/50 pt-space-lg">
              <div className="flex w-full flex-wrap items-center justify-between gap-x-space-md gap-y-space-sm text-outline">
                <span className="font-label-tech-sm text-label-tech-sm text-cyan-bright font-semibold uppercase tracking-wider">
                  Software SaaS
                </span>
                <span className="text-outline-variant hidden sm:inline">•</span>
                <span className="font-label-tech-sm text-label-tech-sm text-secondary font-semibold uppercase tracking-wider">
                  Inteligencia Artificial
                </span>
                <span className="text-outline-variant hidden sm:inline">•</span>
                <span className="font-label-tech-sm text-label-tech-sm text-primary font-semibold uppercase tracking-wider">
                  Cloud & DevOps
                </span>
                <span className="text-outline-variant hidden sm:inline">•</span>
                <span className="font-label-tech-sm text-label-tech-sm text-on-surface-variant font-semibold uppercase tracking-wider">
                  Conectividad Nacional SPOC
                </span>
                <span className="text-outline-variant hidden sm:inline">•</span>
                <span className="font-label-tech-sm text-label-tech-sm text-accent-success font-semibold uppercase tracking-wider">
                  Infraestructura Crítica
                </span>
              </div>
            </div>
          </section>

          {/* SECCIÓN INDICADORES DE CONFIANZA & RESPALDO INSTITUCIONAL */}
          <section className="w-full bg-surface-container-low/70 py-space-2xl my-space-lg relative">
            <div className="max-w-[1440px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
              {/* Encabezado de Sección Discreta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-lg mb-space-lg gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">corporate_fare</span>
                  <span className="font-label-tech text-label-tech text-on-surface-variant uppercase tracking-wider">
                    RESPALDO INSTITUCIONAL Y EXPERIENCIA EMPRESARIAL
                  </span>
                </div>
              </div>

              {/* 4 Bloques Institucionales */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Bloque 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between group hover:bg-surface-container-high transition-colors shadow-sm">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center mb-space-md text-primary">
                      <span className="material-symbols-outlined text-[22px]">history_toggle_off</span>
                    </div>
                    <div className="font-label-tech text-label-tech text-cyan-bright mb-space-xs font-semibold">
                      [Trayectoria verificable]
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
                      Años de experiencia
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Liderando proyectos de modernización, estabilidad operativa y continuidad tecnológica empresarial.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center justify-between text-outline">
                    <span className="font-label-tech-sm text-label-tech-sm">MODERNIZACIÓN</span>
                    <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                  </div>
                </div>

                {/* Bloque 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between group hover:bg-surface-container-high transition-colors shadow-sm">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center mb-space-md text-secondary">
                      <span className="material-symbols-outlined text-[22px]">account_balance</span>
                    </div>
                    <div className="font-label-tech text-label-tech text-secondary mb-space-xs font-semibold">
                      [Clientes corporativos]
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
                      Sectores regulados
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Alianzas estratégicas con entidades financieras, sector salud de alta complejidad y telecomunicaciones.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center justify-between text-outline">
                    <span className="font-label-tech-sm text-label-tech-sm">FINTECH / SALUD</span>
                    <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  </div>
                </div>

                {/* Bloque 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between group hover:bg-surface-container-high transition-colors shadow-sm">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center mb-space-md text-primary">
                      <span className="material-symbols-outlined text-[22px]">hub</span>
                    </div>
                    <div className="font-label-tech text-label-tech text-cyan-bright mb-space-xs font-semibold">
                      [Sistemas y servicios]
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
                      Cargas críticas
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Arquitecturas críticas operando en producción continua bajo estándares de interoperabilidad y seguridad.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center justify-between text-outline">
                    <span className="font-label-tech-sm text-label-tech-sm">TRANSACCIONES</span>
                    <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                  </div>
                </div>

                {/* Bloque 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between group hover:bg-surface-container-high transition-colors shadow-sm">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center mb-space-md text-accent-success">
                      <span className="material-symbols-outlined text-[22px]">support_agent</span>
                    </div>
                    <div className="font-label-tech text-label-tech text-accent-success mb-space-xs font-semibold">
                      [Disponibilidad y soporte]
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
                      Operación B2B
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Capacidad técnica de respuesta oportuna, contingencia activa y gobierno proactivo de infraestructura.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center justify-between text-outline">
                    <span className="font-label-tech-sm text-label-tech-sm">CONTINUIDAD</span>
                    <span className="material-symbols-outlined text-[16px] text-accent-success">check</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRANSICIÓN EDITORIAL A LA SIGUIENTE SECCIÓN (PRODUCTOS) */}
          <section className="w-full max-w-[1440px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg pt-space-xl pb-space-3xl flex flex-col items-center text-center">
            {/* Pastilla de Contexto */}
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-primary mb-space-md">
              <span className="material-symbols-outlined text-[16px]">all_inclusive</span>
              <span className="font-label-tech text-label-tech uppercase tracking-widest">
                ECOSISTEMA BRILLIANTIC
              </span>
            </div>

            {/* Título de Invitación a la Navegación */}
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold max-w-[760px] mb-space-sm">
              Descubra nuestras soluciones y capacidades tecnológicas
            </h2>

            {/* Subtítulo Explicativo */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[580px] mb-space-2xl">
              Explore cómo articulamos software empresarial, servicios gestionados e ingeniería avanzada para organizaciones de alta complejidad.
            </p>

            {/* Tarjeta Interactiva de Continuidad */}
            <Link
              to="/Productos"
              className="group relative flex flex-col items-center justify-center p-space-xl rounded-2xl bg-surface-container hover:bg-surface-container-high max-w-[460px] w-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_32px_rgba(25,227,255,0.15)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-space-md mb-space-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[26px]">grid_view</span>
                </div>
                <div className="text-left">
                  <span className="font-label-tech-sm text-label-tech-sm text-cyan-bright uppercase tracking-wider block">
                    Siguiente Sección
                  </span>
                  <span className="font-action-label text-action-label text-on-surface text-headline-sm font-semibold block">
                    Continuar a Productos
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-center max-w-[340px] mb-space-md">
                Plataformas de misión crítica, procesamiento transaccional e infraestructura modular.
              </p>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:text-primary animate-bounce">
                <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
              </div>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InicioBrilliantic;
