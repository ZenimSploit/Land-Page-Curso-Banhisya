import React, { useState } from 'react';
import { FAQ_DATA, getWhatsAppUrl } from '../types';
import { ChevronDown, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqWhatsAppUrl = getWhatsAppUrl(
    'Olá! Tenho uma dúvida específica sobre o Curso Profissional de Banhista da PetsCelly.'
  );

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#07090E] border-t border-white/[0.07] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/[0.05] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121622] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            PERGUNTAS FREQUENTES
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Tudo o que você precisa saber antes de iniciar sua capacitação na PetsCelly.
          </p>
        </div>

        {/* Accordion list in Dark Glass */}
        <div className="mt-12 space-y-3.5">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'glass-panel-highlight border-red-500/40 shadow-[0_0_20px_-5px_rgba(225,29,42,0.2)]'
                    : 'glass-panel border-white/[0.08] hover:border-white/[0.14]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-red-950/80 text-red-400 border border-red-500/30'
                        : 'bg-white/[0.06] text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/[0.06]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/[0.08] text-center">
          <p className="text-sm text-slate-300 font-medium">
            Tem alguma outra dúvida que não foi respondida acima?
          </p>
          <div className="mt-3">
            <a
              href={faqWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar a PetsCelly no WhatsApp agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
