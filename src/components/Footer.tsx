import React from 'react';
import { MessageCircle, MapPin, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PHONE } from '../types';
import { PetsCellyLogo } from './PetsCellyLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const footerWhatsAppUrl = getWhatsAppUrl(
    'Olá! Entrei em contato pelo site da PetsCelly e gostaria de conversar com o atendimento.'
  );

  return (
    <footer className="bg-[#050609] border-t border-white/[0.08] text-slate-400 text-xs sm:text-sm pt-16 pb-32 sm:pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <PetsCellyLogo size="lg" />

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed mt-4">
              Curso Profissional de Banhista com formação 100% presencial e prática dentro da operação de Banho e Tosa da PetsCelly em São José/SC.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-emerald-600 hover:text-white border border-white/[0.08] flex items-center justify-center text-slate-300 transition-all"
                aria-label="WhatsApp PetsCelly"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/petscelly"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-red-600 hover:text-white border border-white/[0.08] flex items-center justify-center text-slate-300 transition-all"
                aria-label="Instagram PetsCelly"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-display text-sm font-bold text-white uppercase tracking-wider block">
              Navegação
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#renda" className="hover:text-white transition-colors">
                  Simulador de Renda Extra
                </a>
              </li>
              <li>
                <a href="#o-curso" className="hover:text-white transition-colors">
                  Sobre a Formação
                </a>
              </li>
              <li>
                <a href="#conteudo" className="hover:text-white transition-colors">
                  Grade Curricular
                </a>
              </li>
              <li>
                <a href="#cronograma" className="hover:text-white transition-colors">
                  Cronograma das 4 Semanas
                </a>
              </li>
              <li>
                <a href="#investimento" className="hover:text-white transition-colors">
                  Investimento e Vagas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and address */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-display text-sm font-bold text-white uppercase tracking-wider block">
              Contato Oficial
            </span>
            <div className="space-y-2.5 text-xs">
              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: (48) 99929-3654</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                <span>São José - Santa Catarina - Brasil</span>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 leading-snug">
                Turmas presenciais com no máximo 3 alunos para garantir segurança e aproveitamento individual.
              </div>
            </div>
          </div>
        </div>

        {/* Legal & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} PetsCelly Banho e Tosa. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Política de Privacidade
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
