import React from 'react';
import { Award, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const CertificateSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#07090E] border-t border-white/[0.07] relative overflow-hidden">
      {/* Glow discreto nas cores da PetsCelly */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/[0.07] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121622] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Reconhecimento da Formação</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            CERTIFICADO DE CONCLUSÃO
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Ao finalizar as 8 aulas e concluir o curso, o aluno recebe seu certificado de conclusão.
          </p>
        </div>

        {/* Card Visual com Glassmorphism e Estilo Premium */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="rounded-3xl glass-panel-highlight border border-white/[0.12] p-6 sm:p-10 relative overflow-hidden group shadow-2xl">
            {/* Linha de brilho superior */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Representação visual do Certificado / Badge Oficial */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px] bg-gradient-to-b from-[#141826] to-[#0A0D15] rounded-2xl border-2 border-amber-500/30 p-5 shadow-2xl text-center relative overflow-hidden group-hover:border-amber-400/50 transition-all duration-300">
                  {/* Borda interna estilizada estilo diploma */}
                  <div className="absolute inset-2 border border-white/[0.06] rounded-xl pointer-events-none" />

                  {/* Selo do certificado */}
                  <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 mb-3">
                    <Award className="w-7 h-7 stroke-[2.5]" />
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-widest text-amber-400 font-extrabold block">
                    PetsCelly Banho e Tosa
                  </span>

                  <h3 className="font-display text-sm font-black text-white mt-1 uppercase tracking-tight">
                    Certificado de Conclusão
                  </h3>

                  <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-2.5" />

                  <p className="text-[11px] text-slate-300 leading-snug">
                    Curso Livre de Capacitação Profissional de Banhista
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[9px] text-slate-400 font-mono">
                    <span>8 Aulas Presenciais</span>
                    <span className="text-emerald-400 font-bold">100% Prático</span>
                  </div>
                </div>
              </div>

              {/* Informações explicativas e benefícios */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300">
                  <FileText className="w-3.5 h-3.5 text-red-400" />
                  <span>Documento Oficial de Conclusão</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                  Comprovação das suas novas habilidades práticas
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Ao concluir o curso, o aluno receberá um{' '}
                  <strong className="text-white">
                    Certificado de Conclusão do Curso Livre de Capacitação Profissional de Banhista
                  </strong>
                  , atestando sua dedicação e o aprendizado das técnicas de banho, higiene, secagem, escovação e finalização.
                </p>

                <div className="pt-2 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Diferencial para apresentar a pet shops e clínicas veterinárias</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Segurança e credibilidade para atuar com diárias freelancers</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Emitido nominalmente após cumprimento das etapas práticas</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-[11px] text-slate-400 leading-relaxed">
                  * Curso livre de capacitação profissional em conformidade com a Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/96).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
