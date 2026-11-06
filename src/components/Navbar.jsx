import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  const isActivePath = (path) => location.pathname === path;

  const desktopLinkClass = (path) =>
    `font-action-label text-action-label px-space-md py-space-xs rounded-lg transition-colors ${
      isActivePath(path)
        ? 'bg-slate-700/65 text-slate-100 font-semibold border border-slate-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]'
        : 'text-on-surface-variant hover:text-on-surface'
    }`;

  const mobileLinkClass = (path) =>
    `font-action-label text-sm px-space-md py-2 rounded-lg ${
      isActivePath(path)
        ? 'bg-slate-700/65 text-slate-100 font-semibold border border-slate-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]'
        : 'text-on-surface-variant hover:text-on-surface'
    }`;

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path) {
      navigate(path);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex items-center justify-between gap-gutter">
        <Link
          to="/"
          className="flex items-center gap-space-sm group py-1"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={isDark ? "/Logo brillantic Para fondos Oscuros.png" : "/logo.png"}
            alt="Logo Brilliantic"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-200 group-hover:scale-105"
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

        <nav className="hidden lg:flex items-center gap-space-lg">
          <Link
            to="/"
            aria-current={isActivePath('/') ? 'page' : undefined}
            className={desktopLinkClass('/')}
          >
            Inicio
          </Link>
          <Link
            to="/Productos"
            aria-current={isActivePath('/Productos') ? 'page' : undefined}
            className={desktopLinkClass('/Productos')}
          >
            Productos
          </Link>
          <Link
            to="/Servicios"
            aria-current={isActivePath('/Servicios') ? 'page' : undefined}
            className={desktopLinkClass('/Servicios')}
          >
            Servicios
          </Link>
          <Link
            to="/Ecosistema"
            aria-current={isActivePath('/Ecosistema') ? 'page' : undefined}
            className={desktopLinkClass('/Ecosistema')}
          >
            Ecosistema
          </Link>
          <Link
            to="/Experiencia"
            aria-current={isActivePath('/Experiencia') ? 'page' : undefined}
            className={desktopLinkClass('/Experiencia')}
          >
            Experiencia
          </Link>
          <Link
            to="/Nosotros"
            aria-current={isActivePath('/Nosotros') ? 'page' : undefined}
            className={desktopLinkClass('/Nosotros')}
          >
            Nosotros
          </Link>
        </nav>

        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {/* Botón para alternar Modo Claro / Modo Oscuro */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-border-dark-subtle bg-surface-container-high hover:border-cyan-bright/50 text-on-surface hover:text-cyan-bright transition-all duration-200 active:scale-95 shadow-sm group"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:rotate-45">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors focus:outline-none"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden px-margin-sm pt-2 pb-6 bg-surface-container border-b border-border-dark-subtle shadow-lg flex flex-col gap-3">
          <Link
            to="/"
            onClick={() => handleNavClick('/')}
            aria-current={isActivePath('/') ? 'page' : undefined}
            className={`font-headline-sm ${mobileLinkClass('/')}`}
          >
            Inicio
          </Link>
          <Link
            to="/Productos"
            onClick={() => handleNavClick('/Productos')}
            aria-current={isActivePath('/Productos') ? 'page' : undefined}
            className={mobileLinkClass('/Productos')}
          >
            Productos
          </Link>
          <Link
            to="/Servicios"
            onClick={() => handleNavClick('/Servicios')}
            aria-current={isActivePath('/Servicios') ? 'page' : undefined}
            className={mobileLinkClass('/Servicios')}
          >
            Servicios
          </Link>
          <Link
            to="/Ecosistema"
            onClick={() => handleNavClick('/Ecosistema')}
            aria-current={isActivePath('/Ecosistema') ? 'page' : undefined}
            className={mobileLinkClass('/Ecosistema')}
          >
            Ecosistema
          </Link>
          <Link
            to="/Experiencia"
            onClick={() => handleNavClick('/Experiencia')}
            aria-current={isActivePath('/Experiencia') ? 'page' : undefined}
            className={mobileLinkClass('/Experiencia')}
          >
            Experiencia
          </Link>
          <Link
            to="/Nosotros"
            onClick={() => handleNavClick('/Nosotros')}
            aria-current={isActivePath('/Nosotros') ? 'page' : undefined}
            className={mobileLinkClass('/Nosotros')}
          >
            Nosotros
          </Link>

          <div className="pt-3 mt-1 border-t border-border-dark-subtle flex items-center justify-between">
            <span className="font-action-label text-xs text-on-surface-variant font-medium">
              Tema: <span className="font-bold text-on-surface">{isDark ? 'Modo Oscuro' : 'Modo Claro'}</span>
            </span>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-dark-subtle bg-surface-container-high text-on-surface text-xs font-semibold hover:border-cyan-bright/50 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-cyan-bright">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
              <span>{isDark ? 'Activar Claro' : 'Activar Oscuro'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
