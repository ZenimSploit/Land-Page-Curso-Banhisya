import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  Building2,
  Store,
  MessageCircle,
  ArrowRight,
  Award,
  Compass,
} from 'lucide-react';
import royalPetSpaLogo from '../assets/images/royal_pet_spa_logo.jpg';
import ninaBanhoETosaLogo from '../assets/images/nina_banho_e_tosa_logo.png';
import { getWhatsAppUrl } from '../types';

interface BusinessStory {
  id: string;
  tabLabel: string;
  name: string;
  badge: string;
  category: string;
  logo: string;
  hasCustomLogo: boolean;
  locationSubtitle: string;
  address: string;
  description: string;
  stats: { label: string; value: string }[];
  highlights: string[];
}

export const BusinessesHelped: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const businessStories: BusinessStory[] = [
    {
      id: 'royal-pet-spa',
      tabLabel: 'Royal Pet Spa',
      name: 'Royal Pet Spa',
      badge: 'Alunos PetsCelly • Loja Ativa',
      category: 'Curso de Banhista + Mentoria e Consultoria Prática',
      logo: royalPetSpaLogo,
      hasCustomLogo: true,
      locationSubtitle: 'Loja & Spa em Barreiros, São José/SC',
      address: 'R. Antônio Basil Schroeder, 275 - Barreiros, São José - SC',
      description:
        'O Royal Pet Spa mostra na prática onde a qualidade do nosso curso de banhista pode te levar. Eles vieram aprender a profissão do zero com a gente, dominaram o padrão de atendimento, manejo seguro e agilidade na bancada, e receberam uma consultoria completa com Marcelli e Leandro. A formação deu tanta segurança e clareza que eles construíram sua própria clientela e hoje têm sua loja ativa em Barreiros.',
      stats: [
        { label: 'Formação', value: 'Banhista Prático' },
        { label: 'Localização', value: 'Barreiros, São José' },
        { label: 'Situação Atual', value: 'Loja Ativa & Própria' },
      ],
      highlights: [
        'Aprenderam a rotina real de um banho e tosa direto na prática presencial',
        'Suporte próximo dos instrutores para escolha de equipamentos e processos',
        'A qualidade da técnica foi a base para conquistarem clientes fiéis',
      ],
    },
    {
      id: 'nina-banho-e-tosa',
      tabLabel: 'Nina Banho e Tosa',
      name: 'Nina Banho e Tosa',
      badge: 'Alunos PetsCelly • Loja Ativa',
      category: 'Curso Banho e Tosa + Consultoria de Marketing',
      logo: ninaBanhoETosaLogo,
      hasCustomLogo: true,
      locationSubtitle: 'Banho & Tosa em Forquilhas, São José/SC',
      address: 'Rua Thereza Maria Andriolli, 166, Casa 02 - Forquilhas, São José - SC',
      description:
        'A Nina Banho e Tosa é outro grande exemplo de mudança de rumo profissional. Fizeram o curso prático com a PetsCelly, onde aprenderam as técnicas fundamentais de banho, higienização, tosa e bem-estar animal, somadas a dicas valiosas de marketing para divulgação local. O curso abriu uma nova direção de vida e deu a confiança para inaugurarem seu próprio espaço em Forquilhas.',
      stats: [
        { label: 'Formação', value: 'Banho & Tosa' },
        { label: 'Localização', value: 'Forquilhas, São José' },
        { label: 'Situação Atual', value: 'Negócio Próprio' },
      ],
      highlights: [
        'Treinamento prático direto na bancada com supervisão atenta',
        'Dicas práticas de marketing e relacionamento para atrair tutores da região',
        'Uma formação sólida que permitiu dar o passo para abrir o próprio ponto',
      ],
    },
  ];

  // Auto-rotate every 8 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % businessStories.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused, businessStories.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % businessStories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + businessStories.length) % businessStories.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentStory = businessStories[currentIndex];

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Olá! Vi no site da PetsCelly os casos do Royal Pet Spa e da Nina Banho e Tosa. Quero saber mais sobre o Curso de Banhista para ter uma nova profissão e aprender com essa qualidade!`
  );

  return (
    <section
      id="negocios-criados"
      className="py-16 sm:py-24 relative overflow-hidden bg-[#07090E] border-b border-white/[0.08]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-red-600/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-semibold text-red-400 mb-4 shadow-inner">
            <Compass className="w-3.5 h-3.5 text-red-400" />
            <span>Uma Nova Direção Profissional</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase leading-[1.15]">
            Onde Nosso Curso de Banhista{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-400">
              Pode Te Levar
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Nosso foco é formar banhistas capacitados, rápidos e seguros. Essa formação técnica e prática é tão completa que dá uma nova direção para a vida dos alunos — capacitando para trabalhar imediatamente no mercado ou até, quem sabe futuramente, abrir o seu próprio negócio como estes alunos fizeram:
          </p>

          {/* Quick Select Filter / Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {businessStories.map((story, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={story.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-950/40 border border-red-400/40'
                      : 'bg-[#0F131C] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/[0.2]'
                  }`}
                >
                  <Store className="w-3.5 h-3.5 text-red-400" />
                  <span>{story.tabLabel}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Showcase Card */}
        <div
          className="relative max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Card */}
          <div className="relative rounded-3xl glass-panel-highlight border border-white/[0.12] shadow-2xl overflow-hidden transition-all duration-500 p-6 sm:p-10 lg:p-12">
            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-semibold text-red-400">
                <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                <span>{currentStory.badge}</span>
              </div>

              <div className="text-xs font-medium text-slate-400 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-emerald-400 font-semibold">{currentStory.category}</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mt-6">
              {/* Left Column: Visual / Logo Showcase */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-[320px] aspect-square rounded-2xl bg-[#0B0E17] border border-white/[0.12] p-4 flex flex-col items-center justify-center relative group shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.1] via-transparent to-amber-500/[0.05] pointer-events-none" />

                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                    <img
                      src={currentStory.logo}
                      alt={`Logo ${currentStory.name} - Alunos formados pela PetsCelly`}
                      className="w-full h-full object-contain rounded-xl p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-[#05060A]/85 backdrop-blur-md border border-white/[0.1] rounded-lg py-1 px-2 text-center text-[10px] text-slate-200 font-medium truncate">
                      {currentStory.locationSubtitle}
                    </div>
                  </div>
                </div>

                {/* Micro indicators below image */}
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 text-center">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Prova real da qualidade do método PetsCelly</span>
                </div>
              </div>

              {/* Right Column: Story & Business Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                    {currentStory.name}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {currentStory.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 bg-[#0B0E17]/60 border border-white/[0.06] rounded-2xl p-4 sm:p-5">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                    Como a formação na PetsCelly fez a diferença:
                  </span>
                  {currentStory.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Physical Store Address Badge */}
                <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Loja Aberta por Aluno PetsCelly:</span>
                    <span className="text-slate-300">{currentStory.address}</span>
                  </div>
                </div>

                {/* Fast Stats Row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
                  {currentStory.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center"
                    >
                      <span className="block text-[10px] sm:text-xs text-slate-400 font-medium truncate">
                        {stat.label}
                      </span>
                      <span className="block text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action CTA - 100% PetsCelly Focus */}
                <div className="pt-2">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow-red inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-lg shadow-red-950/40 border border-red-400/30 hover:from-red-500 hover:to-rose-500"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Quero Aprender com Essa Qualidade no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Caso anterior"
                className="w-11 h-11 rounded-full bg-[#0F131C] border border-white/[0.1] hover:border-red-500/50 hover:bg-red-600/10 text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-slate-300" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Próximo caso"
                className="w-11 h-11 rounded-full bg-[#0F131C] border border-white/[0.1] hover:border-red-500/50 hover:bg-red-600/10 text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-slate-300" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2.5">
              {businessStories.map((story, idx) => (
                <button
                  key={story.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para ${story.name}`}
                  className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-gradient-to-r from-red-500 to-rose-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-xs text-slate-400 font-medium">
              <span>{currentIndex + 1}</span> / <span>{businessStories.length}</span>
            </div>
          </div>
        </div>

        {/* Micro Guarantee Strip below carousel */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-[#0C101A]/80 border border-white/[0.06] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0 text-red-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-white block">
                Quer dar uma nova direção para a sua vida profissional?
              </span>
              <span className="text-xs text-slate-400">
                Aprenda a profissão de banhista na prática real e com atenção individual de Leandro e Marcelli.
              </span>
            </div>
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shrink-0 shadow-md shadow-emerald-950/40"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar com Instrutores</span>
          </a>
        </div>
      </div>
    </section>
  );
};


