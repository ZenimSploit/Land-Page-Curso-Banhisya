import React from 'react';
import {
  BookOpen,
  Droplets,
  Wind,
  Scissors,
  Sparkles,
  Crown,
  ClipboardCheck,
  Award,
  Layers,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { MODULES_DATA, getWhatsAppUrl } from '../types';

export const Curriculum: React.FC = () => {
  const curriculumUrl = getWhatsAppUrl(
    'Olá! Gostaria de tirar dúvidas sobre os 8 módulos práticos do Curso Profissional de Banhista da PetsCelly.'
  );

  // Mapeamento de ícones minimalistas específicos para cada um dos 8 módulos
  const moduleIcons = [
    BookOpen,       // Módulo 01: Fundamentos
    Droplets,       // Módulo 02: Banho Profissional
    Wind,           // Módulo 03: Secagem e Escovação
    Scissors,       // Módulo 04: Higiene
    Sparkles,       // Módulo 05: Desembolo e Finalização
    Crown,          // Módulo 06: Penteados
    ClipboardCheck, // Módulo 07: Atendimento Completo
    Award,          // Módulo 08: Prática Final
  ];

  return (
    <section
      id="conteudo"
      className="py-20 sm:py-28 bg-[#07090E] border-t border-white/[0.07] relative overflow-hidden"
    >
      {/* Luz ambiente difusa PetsCelly */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-600/[0.06] rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-[450px] h-[350px] bg-rose-600/[0.04] rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121622] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>Grade Curricular Completa • 8 Módulos</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            O QUE VOCÊ VAI APRENDER
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Uma formação prática para você aprender as principais etapas da rotina de um banhista profissional.
          </p>
        </div>

        {/* Grade Visual dos 8 Módulos: 4 colunas no Desktop (2x4 perfeito) / 1 coluna confortável no Celular */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {MODULES_DATA.map((module, idx) => {
            const Icon = moduleIcons[idx] || Sparkles;
            const isHighlight = module.number === 7 || module.number === 8;

            return (
              <div
                key={module.number}
                className={`rounded-2xl p-6 flex flex-col justify-between relative group transition-all duration-300 ${
                  isHighlight
                    ? 'glass-panel-highlight border-red-500/35 hover:border-red-500/60 shadow-[0_0_25px_-8px_rgba(225,29,42,0.2)]'
                    : 'glass-panel glass-panel-hover'
                }`}
              >
                {/* Linha de brilho sutil no topo do card ao passar o cursor */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/0 group-hover:via-red-500/60 to-transparent transition-all duration-500" />

                <div>
                  {/* Cabeçalho do Card: Ícone Minimalista + Numeração Grande */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    {/* Ícone com container estilizado */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                        isHighlight
                          ? 'bg-red-950/80 border border-red-500/40 text-red-400 shadow-[0_0_15px_rgba(225,29,42,0.3)]'
                          : 'bg-[#121622] border border-white/[0.08] text-red-400 group-hover:border-red-500/30'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Numeração Grande Estilizada de 01 a 08 */}
                    <span className="font-display font-black text-3xl sm:text-4xl text-white/20 group-hover:text-red-400/50 transition-colors select-none tracking-tighter">
                      0{module.number}
                    </span>
                  </div>

                  {/* Tag do Módulo */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono font-extrabold tracking-widest uppercase text-red-400">
                      MÓDULO 0{module.number}
                    </span>
                  </div>

                  {/* Título do Módulo */}
                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug group-hover:text-red-50 transition-colors">
                    {module.title}
                  </h3>

                  {/* Lista de Conteúdos com bullets visuais refinados */}
                  <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4">
                    {module.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1 shadow-[0_0_6px_#ef4444]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Nota especial do Módulo 07 */}
                  {module.note && (
                    <div className="mt-4 p-3 rounded-xl bg-red-950/40 border border-red-500/25 text-[11px] text-red-200 leading-snug flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>{module.note}</span>
                    </div>
                  )}
                </div>

                {/* Rodapé do Card */}
                <div className="mt-6 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium text-slate-400">
                    {module.items.length} tópicos práticos
                  </span>
                  <span className="font-mono text-[10px] text-red-400/90 font-bold uppercase tracking-wider">
                    {module.badge || 'PetsCelly'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resumo da Formação + Botão de Ação */}
        <div className="mt-14 max-w-3xl mx-auto glass-panel rounded-2xl p-5 sm:p-6 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-display">
                8 Módulos Integrados em 4 Semanas
              </div>
              <div className="text-xs text-slate-400">
                Do primeiro contato seguro até a execução completa com animais reais.
              </div>
            </div>
          </div>

          <a
            href={curriculumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-emerald inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-950/50 transition-all border border-emerald-400/30 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-100" />
            <span>Tirar Dúvidas no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
