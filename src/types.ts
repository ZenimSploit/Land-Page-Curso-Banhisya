/**
 * Configuration and helpers for PetsCelly Landing Page
 */

export const WHATSAPP_PHONE = '48999293654';

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage =
    'Olá! Tenho interesse no Curso Profissional de Banhista da PetsCelly e gostaria de saber como garantir minha vaga na turma inaugural.';
  const message = customMessage || defaultMessage;
  return `https://wa.me/55${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Preciso ter experiência com animais?',
    answer:
      'Não. O curso foi estruturado para ensinar os fundamentos e desenvolver a prática progressivamente, desde o manejo seguro até as técnicas de finalização.',
  },
  {
    question: 'Quantos alunos terão na turma?',
    answer:
      'No máximo 3 alunos. Essa limitação existe para garantir acompanhamento próximo, equipamentos disponíveis e supervisão individual em cada procedimento.',
  },
  {
    question: 'Quanto tempo dura o curso?',
    answer:
      '4 semanas de duração total, com 8 aulas presenciais (sendo 2 aulas por semana com acompanhamento próximo).',
  },
  {
    question: 'Todas as aulas são práticas?',
    answer:
      'A primeira aula é teórica, cobrindo segurança, manejo, tipos de pelagem e equipamentos. As outras 7 aulas são predominantemente práticas dentro do Banho e Tosa.',
  },
  {
    question: 'Vou praticar nos animais?',
    answer:
      'Sim. As atividades práticas são realizadas dentro da rotina do Banho e Tosa, com animais selecionados para cada atividade e supervisão da instrutora.',
  },
  {
    question: 'O curso ensina tosa?',
    answer:
      'Não. Esta primeira formação é focada em Banho, Higiene e Penteado, que é a base indispensável e onde há mais demanda contínua de trabalho freelancer.',
  },
  {
    question: 'O curso é presencial?',
    answer:
      'Sim, 100% presencial dentro da operação de Banho e Tosa da PetsCelly em São José/SC.',
  },
  {
    question: 'Quantas vagas existem?',
    answer:
      'A primeira turma terá apenas 3 vagas. Quando preenchidas, novas inscrições serão abertas somente para turmas futuras.',
  },
  {
    question: 'O valor da turma inaugural é definitivo?',
    answer:
      'Não. A condição especial informada é exclusiva de lançamento para a primeira turma e poderá ser reajustada nas próximas turmas.',
  },
  {
    question: 'O curso garante renda?',
    answer:
      'Não. O curso oferece capacitação e experiência prática de alto nível. As oportunidades e a remuneração dependem de experiência, região, disponibilidade, dedicação e negociação individual.',
  },
];

export interface ModuleItem {
  number: number;
  title: string;
  badge?: string;
  note?: string;
  items: string[];
}

export const MODULES_DATA: ModuleItem[] = [
  {
    number: 1,
    title: 'Fundamentos do Banhista',
    badge: 'Teoria & Manejo',
    items: [
      'Introdução à profissão',
      'Rotina de um Banho e Tosa',
      'Comportamento e manejo dos animais',
      'Segurança durante o atendimento',
      'Tipos de pelagem',
      'Produtos e equipamentos',
      'Organização do ambiente de trabalho',
    ],
  },
  {
    number: 2,
    title: 'Banho Profissional',
    badge: 'Prática de Banho',
    items: [
      'Preparação do animal',
      'Avaliação inicial',
      'Preparação da pelagem',
      'Pré-lavagem',
      'Utilização correta dos produtos',
      'Técnicas de banho',
      'Enxágue',
      'Cuidados durante o procedimento',
      'Finalização',
    ],
  },
  {
    number: 3,
    title: 'Secagem e Escovação',
    badge: 'Equipamentos',
    items: [
      'Técnicas de secagem',
      'Utilização dos equipamentos',
      'Direcionamento correto do pelo',
      'Escovação',
      'Preparação da pelagem',
      'Finalização',
    ],
  },
  {
    number: 4,
    title: 'Higiene',
    badge: 'Cuidados Essenciais',
    items: [
      'Corte de unhas',
      'Higienização externa das orelhas',
      'Higiene das patas',
      'Higiene íntima',
      'Cuidados durante os procedimentos',
      'Finalização',
    ],
  },
  {
    number: 5,
    title: 'Desembolo e Finalização',
    badge: 'Técnica Avançada',
    items: [
      'Identificação de nós e emaranhados',
      'Técnicas de desembolo',
      'Escovação correta',
      'Cuidados com a pelagem',
      'Finalização profissional',
    ],
  },
  {
    number: 6,
    title: 'Penteados',
    badge: 'Estética & Acessórios',
    items: [
      'Preparação da pelagem',
      'Penteados simples',
      'Utilização de laços e acessórios',
      'Organização da pelagem',
      'Finalização estética',
    ],
  },
  {
    number: 7,
    title: 'Atendimento Completo',
    badge: 'Supervisão Real',
    note: 'O aluno acompanha o atendimento completo e realiza os procedimentos sob supervisão.',
    items: [
      'Recepção do animal',
      'Avaliação',
      'Preparação',
      'Banho',
      'Higiene',
      'Secagem',
      'Escovação',
      'Finalização',
      'Entrega do animal',
    ],
  },
  {
    number: 8,
    title: 'Prática Final',
    badge: 'Consolidação Profissional',
    items: [
      'Atendimento completo',
      'Execução dos procedimentos',
      'Correção das técnicas',
      'Orientação individual',
      'Avaliação do desenvolvimento do aluno',
      'Preparação para a rotina profissional',
    ],
  },
];

export interface ScheduleWeek {
  week: number;
  title: string;
  lessons: {
    name: string;
    description: string;
  }[];
}

export const SCHEDULE_DATA: ScheduleWeek[] = [
  {
    week: 1,
    title: 'SEMANA 1',
    lessons: [
      {
        name: 'Aula 1 — Fundamentos',
        description:
          'Teoria, segurança, manejo, equipamentos, produtos, pelagens e rotina profissional.',
      },
      {
        name: 'Aula 2 — Banho',
        description:
          'Preparação, banho e primeiros procedimentos práticos com supervisão direta.',
      },
    ],
  },
  {
    week: 2,
    title: 'SEMANA 2',
    lessons: [
      {
        name: 'Aula 3 — Banho + Secagem',
        description:
          'Banho completo, manuseio de soprador/secador e técnicas de escovação.',
      },
      {
        name: 'Aula 4 — Higiene',
        description:
          'Banho, higiene completa (unhas, ouvidos, almofadas) e procedimentos complementares.',
      },
    ],
  },
  {
    week: 3,
    title: 'SEMANA 3',
    lessons: [
      {
        name: 'Aula 5 — Desembolo e Finalização',
        description:
          'Técnicas de desembolo cuidadoso, alinhamento de pelagem e acabamento refinado.',
      },
      {
        name: 'Aula 6 — Penteado',
        description:
          'Penteados comerciais, aplicação de laços e apresentação estética do animal.',
      },
    ],
  },
  {
    week: 4,
    title: 'SEMANA 4',
    lessons: [
      {
        name: 'Aula 7 — Atendimento Completo',
        description:
          'Execução do atendimento do início ao fim com supervisão passo a passo da instrutora.',
      },
      {
        name: 'Aula 8 — Prática Final',
        description:
          'Atendimento completo com autonomia, correções pontuais e avaliação da evolução.',
      },
    ],
  },
];
