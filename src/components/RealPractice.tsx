import React from 'react';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../types';
import praticaSupervisionadaImage from '../assets/images/pratica_supervisionada_real.jpg';

export const RealPractice: React.FC = () => {
  const realPracticeUrl = getWhatsAppUrl(
    'Olá! Gostaria de saber mais sobre a prática com animais reais no Curso da PetsCelly.'
  );

  return (
    <section className="py-20 sm:py-28 bg-[#090C14] border-t border-white/[0.07] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/[0.06] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141824] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experiência Real</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              VOCÊ VAI APRENDER COM A ROTINA REAL
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                As aulas práticas acontecem dentro da rotina da PetsCelly.
              </p>
              <p>
                Os procedimentos são realizados com animais selecionados para cada atividade e sempre com acompanhamento e supervisão da instrutora.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 italic">
                Em determinadas aulas, poderão ser utilizados animais de clientes da PetsCelly, conforme as condições e autorizações aplicáveis.
              </p>
            </div>

            {/* High Impact Callout */}
            <div className="mt-8 p-6 sm:p-7 rounded-2xl glass-panel-highlight border border-red-500/40">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 block mb-1">
                FILOSOFIA PETSCELLY
              </span>
              <div className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                NÃO É APENAS OBSERVAR. É APRENDER FAZENDO.
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Você coloca a mão na água, ajusta o soprador, corta a unha com calma e vê o resultado final do seu próprio trabalho.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={realPracticeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar sobre as aulas práticas no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0E121B] shadow-2xl group">
              <img
                src={praticaSupervisionadaImage}
                alt="Prática Supervisionada de banho e tosa na PetsCelly"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090C14]/85 backdrop-blur-xl border border-white/[0.1]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                  Prática Supervisionada
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-200 mt-1">
                  Manejo afetuoso e técnico para garantir a segurança e o conforto do pet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
