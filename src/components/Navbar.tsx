import React, { useState } from 'react';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navWhatsAppUrl = getWhatsAppUrl(
    'Olá! Vim pelo site da PetsCelly e gostaria de informações sobre as 3 vagas do Curso Profissional de Banhista.'
  );

  const navItems = [
    { label: 'Quem Ensina', href: '#quem-ensina' },
    { label: 'Renda Extra', href: '#renda' },
    { label: 'Casos Reais', href: '#negocios-criados' },
    { label: 'O Curso', href: '#o-curso' },
    { label: 'Módulos', href: '#conteudo' },
    { label: 'Investimento', href: '#investimento' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07090E]/90 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Name Text: CURSO BANHISTA PROFISSIONAL PETSCELLY */}
          <a
            href="#"
            className="flex items-center group transition-transform duration-200 hover:scale-[1.01]"
            aria-label="CURSO BANHISTA PROFISSIONAL PETSCELLY"
          >
            <span className="font-display font-black tracking-tight sm:tracking-wider text-white uppercase flex flex-col sm:flex-row sm:items-center sm:gap-1.5 leading-tight select-none">
              <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base text-slate-200">
                CURSO BANHISTA PROFISSIONAL
              </span>
              <span className="text-xs xs:text-sm sm:text-base lg:text-lg text-red-500 drop-shadow-[0_0_12px_rgba(225,29,42,0.6)]">
                PETSCELLY
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0F131C]/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full transition-all duration-200 hover:bg-white/[0.06]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/40 border border-red-500/20 text-[11px] font-semibold text-red-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span>Turma Inaugural • 3 Vagas</span>
            </div>

            <a
              href={navWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-emerald flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-950/40 transition-all border border-emerald-400/30"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100" />
              <span>Garantir Vaga</span>
            </a>
          </div>

          {/* Mobile Menu Button - 44px minimum touch targets */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={navWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-950/40"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] active:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#090C14]/98 backdrop-blur-2xl border-b border-white/[0.1] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="mb-3 px-3 py-2 rounded-xl bg-red-950/50 border border-red-500/30 text-xs font-semibold text-red-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Turma Inaugural: Apenas 3 vagas em São José/SC</span>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/[0.08]">
            <a
              href={navWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-glow-emerald flex items-center justify-center gap-2.5 w-full min-h-[48px] py-3 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white text-sm font-bold shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100 fill-current" />
              <span>Falar no WhatsApp (48) 99929-3654</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
