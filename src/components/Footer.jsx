import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className="w-full bg-surface-container border-t border-border-dark-subtle text-outline mt-auto transition-colors">
      <div className="max-w-[1440px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
          <div className="flex flex-col items-start">
            <Link
              to="/"
              className="flex items-center gap-space-sm group mb-space-md"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={isDark ? "/Logo brillantic Para fondos Oscuros.png" : "/logo.png"}
                alt="Logo Brilliantic"
                className="w-9 h-9 object-contain"
              />
              <div className="flex items-baseline">
                <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">
                  Brilliantic
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-bright ml-0.5 animate-pulse shadow-[0_0_8px_#19E3FF]"></span>
                <span className="font-label-tech-sm text-label-tech-sm text-outline ml-space-xs tracking-wider">
                  S.A.S.
                </span>
              </div>
            </Link>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Soluciones integrales de software propio, inteligencia artificial y conectividad de misión crítica.
            </p>
          </div>

          <div>
            <h4 className="font-headline-sm text-sm font-semibold text-on-surface uppercase tracking-wider mb-space-md">
              Ecosistema
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm">
              <li>
                <Link to="/Productos" className="text-on-surface-variant hover:text-primary transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/Servicios" className="text-on-surface-variant hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/Arquitectura" className="text-on-surface-variant hover:text-primary transition-colors">
                  Arquitectura
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline-sm text-sm font-semibold text-on-surface uppercase tracking-wider mb-space-md">
              Compañía
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm">
              <li>
                <Link to="/Nosotros" className="text-on-surface-variant hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/Experiencia" className="text-on-surface-variant hover:text-primary transition-colors">
                  Experiencia
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-space-lg border-t border-border-dark-subtle flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-tech-sm text-label-tech-sm text-outline">
          <p>© 2026 Brilliantic S.A.S. Todos los derechos reservados.</p>
          <div className="flex items-center gap-space-xs">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
