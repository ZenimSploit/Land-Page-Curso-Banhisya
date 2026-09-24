/**
 * PetsCelly - Curso Profissional de Banhista
 * Landing Page de Alta Conversão - Redesign Visual Moderno & Premium
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IncomeSimulation } from './components/IncomeSimulation';
import { CoursePresentation } from './components/CoursePresentation';
import { PracticalDifferentiator } from './components/PracticalDifferentiator';
import { Curriculum } from './components/Curriculum';
import { CourseStructure } from './components/CourseStructure';
import { TimelineSchedule } from './components/TimelineSchedule';
import { SmallClasses } from './components/SmallClasses';
import { Instructor } from './components/Instructor';
import { RealPractice } from './components/RealPractice';
import { TargetAudience } from './components/TargetAudience';
import { CertificateSection } from './components/CertificateSection';
import { PricingSection } from './components/PricingSection';
import { ScarcitySection } from './components/ScarcitySection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#07090E] text-slate-100 antialiased selection:bg-red-500/30 selection:text-white">
      {/* Top Bar navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero: Primeira Dobra */}
        <Hero />

        {/* 2. Uma Habilidade Que Pode Gerar Renda Extra */}
        <IncomeSimulation />

        {/* 3. Apresentação do Curso */}
        <CoursePresentation />

        {/* 4. O Grande Diferencial: Prática no Banho e Tosa */}
        <PracticalDifferentiator />

        {/* 5. O Que Você Vai Aprender (Módulos 1 ao 8) */}
        <Curriculum />

        {/* 6. Como Funciona o Curso */}
        <CourseStructure />

        {/* 7. Cronograma: 4 Semanas */}
        <TimelineSchedule />

        {/* 8. Por Que Apenas 3 Alunos? */}
        <SmallClasses />

        {/* 9. Quem Vai Ensinar: Leandro Claudio e Marcelli */}
        <Instructor />

        {/* 10. Prática Com Animais Reais */}
        <RealPractice />

        {/* 11. Para Quem É Esse Curso */}
        <TargetAudience />

        {/* 12. Certificado de Conclusão */}
        <CertificateSection />

        {/* 13. Investimento: Fechamento Turma Inaugural */}
        <PricingSection />

        {/* 13. Escassez: 3 Vagas */}
        <ScarcitySection />

        {/* 14. Perguntas Frequentes (FAQ Accordion) */}
        <FaqSection />

        {/* 15. CTA Final */}
        <FinalCta />
      </main>

      {/* 16. Rodapé */}
      <Footer
        onOpenPrivacy={() => setLegalModal('privacy')}
        onOpenTerms={() => setLegalModal('terms')}
      />

      {/* Modal Legal (Privacidade e Termos) */}
      <LegalModal
        isOpen={!!legalModal}
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />

      {/* WhatsApp Flutuante com mensagem pré-preenchida */}
      <FloatingWhatsApp />
    </div>
  );
}
