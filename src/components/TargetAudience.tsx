import React from 'react';
import { DollarSign, Heart, Briefcase, Wrench, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const TargetAudience: React.FC = () => {
  const targetUrl = getWhatsAppUrl(
    'Olá! Me identifiquei com o perfil do Curso Profissional de Banhista da PetsCelly e gostaria de saber os próximos passos.'
  );

  const profiles = [
    {
      title: 'QUER UMA RENDA EXTRA',
      description: 'Quer desenvolver uma habilidade sólida para buscar oportunidades como banhista freelancer nos dias livres.',
      icon: DollarSign,
    },
    {
      title: 'GOSTA DE ANIMAIS',
      description: 'Quer transformar o contato, carinho e cuidado diário com cães em uma habilidade profissional valorizada.',
      icon: Heart,
    },
    {
      title: 'QUER APRENDER UMA NOVA PROFISSÃO',
      description: 'Quer desenvolver uma nova habilidade profissional com alta procura em pet shops e clínicas veterinárias.',
      icon: Briefcase,
    },
    {
      title: 'QUER APRENDER NA PRÁTICA',
      description: 'Quer colocar a mão na massa desde o início, testar equipamentos de verdade e não ficar apenas assistindo vídeos ou teoria.',
      icon: Wrench,
    },
    {
      title: 'ESTÁ COMEÇANDO DO ZERO',
      description: 'Não precisa chegar sabendo nada. O curso ensina desde o primeiro contato seguro até os procedimentos de rotina.',
      icon: Sparkles,
      highlight: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#07090E] border-t border-white/[0.07] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/[0.05] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121622] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Perfil do Aluno</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ESSE CURSO É PARA VOCÊ QUE:
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Seja para complementar seu orçamento atual ou para ingressar no mercado pet com segurança e técnica.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <div
                key={profile.title}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  profile.highlight
                    ? 'glass-panel-highlight border-red-500/50 md:col-span-2 lg:col-span-1 shadow-[0_0_30px_-10px_rgba(225,29,42,0.25)]'
                    : 'glass-panel glass-panel-hover'
                }`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-red-950/70 border border-red-500/30 text-red-400 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    {profile.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Você tem o perfil da PetsCelly</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a PetsCelly sobre sua disponibilidade e rotina</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
