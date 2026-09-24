import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const floatingUrl = getWhatsAppUrl(
    'Olá! Estou navegando no site da PetsCelly e gostaria de falar sobre o Curso Profissional de Banhista.'
  );

  return (
    <>
      {/* Mobile Sticky Bottom Conversion Bar (Screens < 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#090C14]/95 backdrop-blur-xl border-t border-white/[0.12] px-3.5 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_25px_rgba(0,0,0,0.7)] animate-in slide-in-from-bottom-2 duration-300">
        <div className="flex items-center justify-between gap-2 mb-1.5 px-0.5">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-white font-bold">Turma Inaugural:</span>
            <span className="text-red-300">3 Vagas</span>
          </div>

          <span className="text-[10px] text-slate-400 font-mono">
            São José/SC
          </span>
        </div>

        <a
          href={floatingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow-emerald flex items-center justify-center gap-2.5 w-full h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-emerald-950/60 transition-transform active:scale-[0.98] border border-emerald-400/40"
          aria-label="Garantir Vaga no WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-emerald-100 fill-current shrink-0" />
          <span>GARANTIR VAGA NO WHATSAPP</span>
          <ArrowRight className="w-4 h-4 text-emerald-200 shrink-0" />
        </a>
      </div>

      {/* Desktop / Tablet Floating WhatsApp Button (Screens >= 640px) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 items-end gap-3">
        {/* Tooltip Card */}
        {showTooltip && (
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0F131E]/95 backdrop-blur-xl border border-white/[0.1] shadow-2xl text-xs text-white animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex flex-col">
              <span className="font-bold text-emerald-400">Atendimento PetsCelly</span>
              <span className="text-slate-300 text-[11px]">Dúvidas sobre as 3 vagas da turma?</span>
            </div>

            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-slate-500 hover:text-white p-1 transition-colors"
              aria-label="Fechar mensagem"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Floating Action Button */}
        <a
          href={floatingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-950/80 transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-emerald-300/40"
          aria-label="Abrir WhatsApp da PetsCelly"
        >
          {/* Pulsing beacon */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 group-hover:opacity-75 animate-ping pointer-events-none" />

          <MessageCircle className="w-7 h-7 relative z-10 fill-current text-white" />
        </a>
      </div>
    </>
  );
};
