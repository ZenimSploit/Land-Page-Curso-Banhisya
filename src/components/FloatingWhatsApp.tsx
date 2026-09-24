import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const floatingUrl = getWhatsAppUrl(
    'Olá! Estou navegando no site da PetsCelly e gostaria de falar sobre o Curso Profissional de Banhista.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0F131E]/95 backdrop-blur-xl border border-white/[0.1] shadow-2xl text-xs text-white animate-in fade-in slide-in-from-right-4 duration-300">
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
  );
};
