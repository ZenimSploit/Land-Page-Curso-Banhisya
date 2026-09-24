import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0D101A] rounded-2xl shadow-2xl border border-white/[0.12] overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/[0.08] bg-[#121624]">
          <h3 className="font-display font-bold text-lg text-white">
            {type === 'privacy' ? 'Política de Privacidade' : 'Termos & Regulamento do Curso'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong className="text-white">1. Compromisso de Privacidade:</strong> A PetsCelly preza pela privacidade e segurança das informações de seus alunos e clientes. Ao entrar em contato via WhatsApp, seus dados são utilizados unicamente para esclarecer dúvidas sobre o Curso Profissional de Banhista e formalizar inscrições.
              </p>
              <p>
                <strong className="text-white">2. Coleta de Informações:</strong> Não realizamos coleta automatizada ou venda de dados a terceiros. Qualquer informação compartilhada durante as tratativas é tratada em conformidade com as boas práticas de proteção de dados.
              </p>
              <p>
                <strong className="text-white">3. Comunicação:</strong> O canal oficial de atendimento para matrículas e suporte é o WhatsApp informado nesta página.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-white">1. Natureza do Curso:</strong> O Curso Profissional de Banhista da PetsCelly é um curso livre de capacitação profissional presencial com foco em Banho, Higiene e Penteado de animais domésticos.
              </p>
              <p>
                <strong className="text-white">2. Vagas e Turmas:</strong> As turmas são limitadas a no máximo 3 alunos por turma para garantir a supervisão individual. A vaga na turma inaugural só é confirmada após a validação do contato e formalização via canal oficial.
              </p>
              <p>
                <strong className="text-white">3. Não Vinculação de Renda:</strong> Conforme informado com total transparência nesta página, as simulações numéricas têm caráter ilustrativo e não constituem garantia de faturamento ou contratação automática. O sucesso profissional depende da dedicação, habilidade, pontualidade e negociação no mercado local.
              </p>
              <p>
                <strong className="text-white">4. Frequência e Certificação:</strong> O certificado será emitido aos alunos que concluírem as aulas práticas e cumprirem os requisitos pedagógicos estabelecidos pela instrutora.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#0A0D15] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-300 bg-white/[0.05] border border-white/[0.1] rounded-lg hover:bg-white/[0.1] hover:text-white transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
