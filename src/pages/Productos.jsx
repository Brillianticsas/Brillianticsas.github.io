import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppChatButton from '../components/WhatsAppChatButton';
import productKlari from '../images/ProductKlari.png';
import productKlerk from '../images/ProducrKlerk.png';
import productKlender from '../images/ProductKlender.png';
import productConnect from '../images/ProductConnect+Brilliantickets.png';

const productsFlow = [
  'Meta Ads',
  'Connectmsg',
  'KLERK IA',
  'KLARI ARM/CRM',
  'K-lender / Cierre'
];

const productCards = [
  {
    title: 'KLARI (Sistema ARM/CRM de Inteligencia Comercial y Optimización de Pauta)',
    subtitle: 'Inteligencia comercial para coordinación de pauta y cierre',
    image: productKlari,
    description:
      'Plataforma propia en la nube para gestionar prospectos y conectar asesores con agentes de IA. Incluye tableros en tiempo real para monitorear inversión en Meta Ads, tracción comercial y oportunidades de optimización.',
    metricA: 'Meta Spend',
    valueA: '$18.5K',
    metricB: 'Leads',
    valueB: '3,845',
    metricC: 'Cierre %',
    valueC: '24.8%'
  },
  {
    title: 'KLERK (Agentes Conversacionales de Inteligencia Artificial)',
    subtitle: 'Atención autónoma, triage y OCR operacional 24/7',
    image: productKlerk,
    description:
      'Fuerza laboral digital para clasificación inteligente de prospectos, lectura OCR de órdenes médicas y atención inmediata sin intervención humana. Diseña flujos que conectan ventas, soporte y agenda operacional.',
    metricA: 'SLA',
    valueA: '24/7',
    metricB: 'OCR',
    valueB: '9.8s',
    metricC: 'Estado',
    valueC: 'Activo'
  },
  {
    title: 'K-lender (SaaS de Agendamiento y Control Operativo)',
    subtitle: 'Agenda multi-tenant con enfoque en utilidad real',
    image: productKlender,
    description:
      'Solución cloud para administrar agendas médicas y de servicios con recordatorios automatizados, reducción de no-show y control de utilidad neta en vivo para decisiones operativas de alto impacto.',
    metricA: 'No-Show',
    valueA: '<10%',
    metricB: 'Citas',
    valueB: 'Tiempo real',
    metricC: 'Utilidad',
    valueC: '$12,480'
  },
  {
    title: 'Connectmsg & Brilliantickets (Interoperabilidad y HelpDesk 360)',
    subtitle: 'Operación auditada de eventos y soporte TI corporativo',
    image: productConnect,
    description:
      'Conector oficial para integrar WhatsApp Business API con CRM y procesos de soporte. Complementado por Brilliantickets para trazabilidad, monitoreo de eventos y gestión de mesa de ayuda orientada a continuidad operativa.',
    metricA: 'Latencia',
    valueA: '1 ms',
    metricB: 'Ticketing',
    valueB: 'Auditado',
    metricC: 'Operación',
    valueC: 'NOC 24/7'
  }
];

const Productos = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#0B0F19] text-slate-100 font-sans antialiased selection:bg-brand-cyan selection:text-slate-900">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="min-h-screen w-full bg-[#0B0F19] text-slate-100 pt-28 pb-16 flex-1">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-12">
          {/* HEADER SECCIÓN PRODUCTOS */}
          <section className="border-b border-[#20293D] pb-8">
            <div className="mb-6">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[var(--brand-cyan-bright)]">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-cyan-bright)] shadow-[0_0_8px_var(--brand-cyan)] animate-pulse"></span>
                PROPIEDAD INTELECTUAL Y DESARROLLO PROPIO (CIIU J6201)
              </div>
              <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Tecnología propia diseñada para escalar operaciones y{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-cyan)] via-[var(--brand-cyan-bright)] to-[var(--brand-magenta)]">
                  ventas.
                </span>
              </h1>
            </div>

            {/* FLOW PIPELINE */}
            <div className="w-full overflow-x-auto py-2">
              <div className="flex min-w-max items-center gap-2 text-xs sm:gap-4 sm:text-sm">
                {productsFlow.map((item, index) => (
                  <React.Fragment key={item}>
                    <div className="rounded-lg border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/10 px-4 py-2.5 font-semibold text-[var(--brand-cyan-bright)] shadow-sm">
                      <span className="text-slate-500">[</span> {item} <span className="text-slate-500">]</span>
                    </div>
                    {index < productsFlow.length - 1 && (
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-[var(--brand-cyan-bright)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* GRID DE PRODUCTOS */}
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productCards.map((card, index) => (
              <article
                key={card.title}
                className={`rounded-2xl border p-5 sm:p-6 ${
                  index === 0
                    ? 'border-[var(--brand-cyan)]/50 bg-[#111625] shadow-[0_16px_36px_-10px_rgba(0,184,230,0.22)]'
                    : 'border-[#20293D] bg-[#111625]'
                } transition-all duration-300 hover:border-[var(--brand-cyan)]/50 hover:shadow-[0_16px_36px_-10px_rgba(217,0,196,0.22)] flex flex-col justify-between`}
              >
                <div>
                  <div className="mb-4">
                    <h2 className="text-base font-bold leading-snug text-white">{card.title}</h2>
                  </div>

                  {/* Imagen y Preview del Producto */}
                  <div className="mb-4 relative w-full h-40 sm:h-44 rounded-xl border border-[#20293D] bg-[#0E1322] flex items-center justify-center p-2.5 overflow-hidden group/img">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mb-4 rounded-xl border border-[#20293D] bg-[#171D2F] p-3">
                    <div className="mb-2 flex items-center justify-between border-b border-[#20293D] pb-2">
                      <span className="text-[11px] font-medium text-slate-300">{card.subtitle}</span>
                      <span className="rounded border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/10 px-1.5 py-0.5 text-[10px] font-semibold text-[var(--brand-cyan-bright)]">
                        LIVE
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 pt-1 text-left">
                      <div className="rounded border border-indigo-400/40 bg-indigo-400/15 p-1.5">
                        <div className="text-[9px] text-slate-400">{card.metricA}</div>
                        <div className="text-[11px] font-bold text-white">{card.valueA}</div>
                      </div>
                      <div className="rounded border border-indigo-400/40 bg-indigo-400/15 p-1.5">
                        <div className="text-[9px] text-slate-400">{card.metricB}</div>
                        <div className="text-[11px] font-bold text-[var(--brand-cyan-bright)]">{card.valueB}</div>
                      </div>
                      <div className="rounded border border-indigo-400/40 bg-indigo-400/15 p-1.5">
                        <div className="text-[9px] text-slate-400">{card.metricC}</div>
                        <div className="text-[11px] font-bold text-[var(--brand-magenta)]">{card.valueC}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-300">{card.description}</p>
                </div>
              </article>
            ))}
          </section>

          {/* TRANSICIÓN A LA SIGUIENTE SECCIÓN */}
          <section className="flex justify-center pt-8 pb-4">
            <Link
              to="/Servicios"
              className="group relative flex flex-col items-center justify-center p-space-xl rounded-2xl bg-surface-container hover:bg-surface-container-high max-w-[460px] w-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_32px_rgba(25,227,255,0.15)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-space-md mb-space-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[26px]">terminal</span>
                </div>
                <div className="text-left">
                  <span className="font-label-tech-sm text-label-tech-sm text-cyan-bright uppercase tracking-wider block">
                    Siguiente Sección
                  </span>
                  <span className="font-action-label text-action-label text-on-surface text-headline-sm font-semibold block">
                    Continuar a Servicios
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-center max-w-[340px] mb-space-md">
                Unidades de ingeniería, outsourcing especializado, cloud DevOps y soporte de misión crítica.
              </p>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:text-primary animate-bounce">
                <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
              </div>
            </Link>
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

export default Productos;
