import React from 'react';
import { Calendar, Users, Award, Clock, ArrowRight, MessageCircle, Layers, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const CourseStructure: React.FC = () => {
  const structureUrl = getWhatsAppUrl(
    'Olá! Gostaria de saber mais informações sobre as 4 semanas e 8 aulas do Curso Profissional de Banhista da PetsCelly.'
  );

  const pillars = [
    {
      value: '4 SEMANAS',
      subtitle: 'Duração total',
      desc: 'Tempo ideal para absorver a técnica sem pressa e consolidar o aprendizado.',
      highlight: false,
    },
    {
      value: '8 AULAS',
      subtitle: '2 aulas por semana',
      desc: 'Ritmo planejado para caber na sua rotina com foco intensivo e consistente.',
      highlight: false,
    },
    {
      value: '1ª AULA',
      subtitle: 'Teoria e fundamentos',
      desc: 'Base essencial de segurança, manejo respeitoso, pelagens e cosméticos.',
      highlight: false,
    },
    {
      value: '7 AULAS',
      subtitle: 'Prática supervisionada',
      desc: 'Mão na massa em animais reais, com acompanhamento e correções imediatas.',
      highlight: false,
    },
    {
      value: '3 ALUNOS',
      subtitle: 'Máximo por turma',
      desc: 'Atenção individualizada da instrutora sem salas lotadas ou disputa de atenção.',
      highlight: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#090C14] border-t border-white/[0.07] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-red-600/[0.05] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141824] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Estrutura do Curso</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            COMO FUNCIONA O CURSO?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Formato enxuto, prático e objetivo, feito sob medida para quem precisa de flexibilidade para aprender uma nova profissão.
          </p>
        </div>

        {/* 5 Pillars Journey Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {pillars.map((item, idx) => (
            <div
              key={item.value}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                item.highlight
                  ? 'glass-panel-highlight border-red-500/50 shadow-[0_0_30px_-5px_rgba(225,29,42,0.25)] relative'
                  : 'glass-panel glass-panel-hover'
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-widest">
                  Etapa 0{idx + 1}
                </span>

                <div className="mt-4">
                  <span className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight block">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-300 mt-1 block">
                    {item.subtitle}
                  </span>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] text-[11px] font-semibold text-slate-400">
                PetsCelly Presencial
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={structureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar dias disponíveis da semana pelo WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
