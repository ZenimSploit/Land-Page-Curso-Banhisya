import React from 'react';
import { Award, CheckCircle2, MessageCircle, BookOpen, Scissors, HeartHandshake } from 'lucide-react';
import { getWhatsAppUrl } from '../types';
import leandroPhoto from '../assets/images/leandro_claudio_real.jpg';
import marcelliPhoto from '../assets/images/marcelli_real.png';

export const Instructor: React.FC = () => {
  const instructorUrl = getWhatsAppUrl(
    'Olá! Gostaria de saber mais sobre os instrutores Leandro e Marcelli e o Curso Profissional de Banhista da PetsCelly.'
  );

  return (
    <section id="quem-ensina" className="py-20 sm:py-28 bg-[#07090E] border-t border-white/[0.07] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/[0.08] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-600/[0.05] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121622] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4 shadow-inner">
            <Award className="w-3.5 h-3.5" />
            <span>Corpo Docente • Quem Vai Ensinar</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            APRENDA COM QUEM VIVE ESSA ROTINA
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nossa formação une a fundamentação teórica de alto nível e visão de gestão à prática real supervisionada dentro da rotina de Banho e Tosa.
          </p>
        </div>

        {/* Instructors Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Leandro Claudio */}
          <div className="group relative rounded-3xl glass-panel-highlight border border-white/[0.1] hover:border-red-500/40 transition-all duration-500 overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/[0.08] rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0" />

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Photo & Role Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-white/[0.08]">
                <div className="relative shrink-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-red-500/40 shadow-xl shadow-red-950/40 bg-[#0E121B]">
                    <img
                      src={leandroPhoto}
                      alt="Leandro Claudio - Gerente de Operações PetsCelly e Responsável pelas Aulas Teóricas"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-red-950/90 border border-red-500/40 text-[10px] font-mono font-bold text-red-300 uppercase tracking-wider">
                    Teoria
                  </span>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.06] text-[11px] font-bold text-red-400 mb-1.5 border border-white/[0.06]">
                    <BookOpen className="w-3 h-3" />
                    <span>AULAS TEÓRICAS & GESTÃO</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                    LEANDRO CLAUDIO
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                    Gerente de Operações da PetsCelly
                  </p>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Experiência em gestão operacional, atendimento ao público e especialista no manejo de animais de porte gigante e pets reativos.
                  </p>
                </div>
              </div>

              {/* What Leandro Teaches */}
              <div className="mt-6 flex-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  O que você vai aprender com o Leandro:
                </span>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Tipos de pelagens:</strong> estrutura capilar, texturas e particularidades de cada tipo de pelo.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Equipamentos e produtos:</strong> sopradores, secadores, lâminas e a utilização correta dos cosméticos profissionais.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Pets reativos e porte gigante:</strong> leitura do comportamento animal, contenção segura e manejo sem estresse.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>O mundo do Banho e Tosa:</strong> rotina profissional real e como se portar para ser um profissional de destaque no mercado.</span>
                  </li>
                </ul>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap gap-2 text-[11px] font-semibold text-slate-300">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  Manejo de Reativos
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  Porte Gigante
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  Gestão & Atendimento
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  Postura Profissional
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Marcelli */}
          <div className="group relative rounded-3xl glass-panel-highlight border border-white/[0.1] hover:border-emerald-500/40 transition-all duration-500 overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/[0.08] rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0" />

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Photo & Role Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-white/[0.08]">
                <div className="relative shrink-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-xl shadow-emerald-950/40 bg-[#0E121B]">
                    <img
                      src={marcelliPhoto}
                      alt="Marcelli - 18 anos de experiência, Fundadora da PetsCelly e Responsável por Todos os Módulos Práticos"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-wider">
                    Prática & Módulos
                  </span>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.06] text-[11px] font-bold text-emerald-400 mb-1.5 border border-white/[0.06]">
                    <Scissors className="w-3 h-3" />
                    <span>TODOS OS DEMAIS MÓDULOS & PRÁTICA</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                    MARCELLI
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                    Especialista em Estética Pet & Fundadora da PetsCelly
                  </p>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    <strong>18 anos de experiência na área</strong> com tradição familiar de 3 gerações: neta e filha de tosadoras, começou aos 13 anos ajudando a vó e a mãe. Hoje tem seu próprio negócio de sucesso, conquistando os clientes pela alta qualidade do trabalho e carinho com os pets. Já capacitou pessoas que hoje têm seus próprios negócios pet!
                  </p>
                </div>
              </div>

              {/* What Marcelli Teaches */}
              <div className="mt-6 flex-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  O que você vai dominar e praticar com a Marcelli:
                </span>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Todos os módulos práticos:</strong> condução completa de todas as aulas de banho, hidratação, secagem, escovação e finalização estética.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>18 anos de bagagem e tradição familiar:</strong> técnicas refinadas passadas de geração em geração, testadas e aprovadas na rotina diária real.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Qualidade técnica com afeto:</strong> como conquistar e fidelizar tutores exigentes pelo padrão do acabamento e respeito ao bem-estar do pet.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Procedimentos completos de higiene:</strong> corte de unhas seguro, limpeza de ouvidos, tosa higiênica e desembolo sem sofrimento.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Mentoria para o seu próprio negócio:</strong> ensinamentos de quem construiu sua própria empresa e já ajudou ex-alunos a abrirem seus próprios negócios.</span>
                  </li>
                </ul>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap gap-2 text-[11px] font-semibold text-slate-300">
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/20 text-emerald-300">
                  18 Anos de Experiência
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  3ª Geração Pet (Vó e Mãe Tosadoras)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  Início aos 13 Anos
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  Dona do Próprio Negócio
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  Já Formou Novos Negócios Pet
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  Qualidade & Carinho
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Link at bottom */}
        <div className="mt-12 text-center">
          <a
            href={instructorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar dúvidas sobre a formação diretamente com a equipe PetsCelly no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
