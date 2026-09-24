import React from 'react';
import { SCHEDULE_DATA, getWhatsAppUrl } from '../types';
import { CalendarDays, Clock, ArrowRight, MessageCircle, CheckCircle2, Milestone } from 'lucide-react';

export const TimelineSchedule: React.FC = () => {
  const scheduleUrl = getWhatsAppUrl(
    'Olá! Gostaria de saber mais detalhes sobre os dias e horários das 8 aulas do Curso de Banhista da PetsCelly.'
  );

  const weeklySummary = [
    { week: 1, label: 'SEMANA 01', focus: 'Fundamentos + Banho' },
    { week: 2, label: 'SEMANA 02', focus: 'Banho + Secagem + Higiene' },
    { week: 3, label: 'SEMANA 03', focus: 'Desembolo + Penteado' },
    { week: 4, label: 'SEMANA 04', focus: 'Atendimento Completo + Prática Final' },
  ];

  return (
    <section id="cronograma" className="py-20 sm:py-28 bg-[#07090E] border-t border-white/[0.07] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-red-600/[0.05] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121622] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
            <Milestone className="w-3.5 h-3.5" />
            <span>Jornada Profissional</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            4 SEMANAS PARA APRENDER NA PRÁTICA
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Veja como você sairá dos fundamentos básicos até a execução de um atendimento completo de forma progressiva e segura.
          </p>
        </div>

        {/* Quick Journey Track Overview */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {weeklySummary.map((item) => (
            <div
              key={item.week}
              className="p-4 rounded-xl glass-panel border border-white/[0.06] text-center"
            >
              <span className="text-[11px] font-mono font-bold text-red-400 uppercase tracking-widest block">
                {item.label}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white mt-1 block">
                {item.focus}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Detailed Weeks */}
        <div className="mt-12 max-w-4xl mx-auto space-y-6">
          {SCHEDULE_DATA.map((weekItem) => (
            <div
              key={weekItem.week}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/[0.08] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/[0.08] gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-950/80 border border-red-500/40 text-red-400 font-extrabold flex items-center justify-center text-sm font-mono shadow-[0_0_12px_rgba(225,29,42,0.3)]">
                    0{weekItem.week}
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-white">
                    {weekItem.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider bg-white/[0.04] px-3 py-1 rounded-md border border-white/[0.06]">
                  2 Aulas Presenciais
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {weekItem.lessons.map((lesson) => (
                  <div
                    key={lesson.name}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-white">
                        {lesson.name}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {lesson.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-emerald inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/50 transition-all border border-emerald-400/30"
          >
            <MessageCircle className="w-4 h-4 text-emerald-100" />
            <span>Consultar datas de início da turma pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
