import React from 'react';
import { CheckCircle2, ArrowRight, MessageCircle, PlayCircle, Eye, RefreshCw, Sparkles, UserCheck, Shield, PawPrint } from 'lucide-react';
import { getWhatsAppUrl } from '../types';
import estruturaImage from '../assets/images/estrutura_petscelly_real.jpg';

export const PracticalDifferentiator: React.FC = () => {
  const practicalWhatsAppUrl = getWhatsAppUrl(
    'Olá! Quero saber mais sobre a prática presencial no Banho e Tosa da PetsCelly.'
  );

  const learningSteps = [
    { num: '01', title: 'APRENDER', desc: 'Instrutora demonstra a técnica com precisão' },
    { num: '02', title: 'PRATICAR', desc: 'Você executa os procedimentos com o pet' },
    { num: '03', title: 'RECEBER ORIENTAÇÃO', desc: 'Feedback imediato a cada movimento' },
    { num: '04', title: 'CORRIGIR', desc: 'Ajuste de pegada, postura e equipamento' },
    { num: '05', title: 'PRATICAR NOVAMENTE', desc: 'Fixação muscular e segurança real' },
  ];

  const pillars = [
    {
      icon: PawPrint,
      title: 'PRÁTICA REAL',
      desc: 'Nada de simulação em bonecos. Você sente o peso, o pelo e a respiração do animal.',
    },
    {
      icon: UserCheck,
      title: 'SUPERVISÃO INDIVIDUAL',
      desc: 'A instrutora ao seu lado, observando cada corte de unha e regulagem de ar.',
    },
    {
      icon: Eye,
      title: 'ANIMAIS REAIS',
      desc: 'Cães de diferentes temperamentos e tipos de pelagens selecionados para o curso.',
    },
    {
      icon: Shield,
      title: 'ROTINA PROFISSIONAL',
      desc: 'O ritmo, a ergonomia e a organização de um banho e tosa em pleno funcionamento.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#090C14] border-t border-white/[0.07] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-600/[0.06] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141824] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Método Prático</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            O GRANDE DIFERENCIAL:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
              APRENDA NA PRÁTICA.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Dentro de um Banho e Tosa de verdade.
          </p>

          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Aqui você não fica assistindo de longe. Desde os primeiros dias, você participa das etapas do atendimento e desenvolve a sensibilidade que só o contato real com o animal ensina.
          </p>
        </div>

        {/* 5-Step Learning Pipeline Flow */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                O Ciclo Pedagógico de Fixação
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1">
                COMO VOCÊ APRENDE CADA TÉCNICA
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
              {learningSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-red-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-red-400">
                        {step.num}
                      </span>
                      {idx < 4 && (
                        <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-600" />
                      )}
                    </div>
                    <h4 className="font-display text-sm font-extrabold text-white tracking-tight">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-400 leading-snug">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Pillars + Real Photo Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 4 Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 border border-white/[0.08] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display text-base font-extrabold text-white tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Photo Media Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0E121B] shadow-2xl group">
              <img
                src={estruturaImage}
                alt="Estrutura e equipamentos profissionais do Banho e Tosa PetsCelly"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090C14]/85 backdrop-blur-xl border border-white/[0.1]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                  Estrutura PetsCelly
                </span>
                <div className="text-sm font-bold text-white mt-0.5">
                  Bancadas profissionais, sopradores e cosméticos de ponta
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Você utiliza exatamente as ferramentas exigidas pelo mercado de trabalho pet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={practicalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-emerald inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-950/50 transition-all border border-emerald-400/30"
          >
            <MessageCircle className="w-4 h-4 text-emerald-100" />
            <span>Quero aprender na prática no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
