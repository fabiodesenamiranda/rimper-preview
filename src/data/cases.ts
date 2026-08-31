import type { ImageMetadata } from 'astro';
import lajeAntes from '../assets/obras/nova-laje-preparacao-01.jpg';
import lajeEtapa from '../assets/obras/nova-laje-manta-02.jpg';
import lajeDepois from '../assets/obras/nova-laje-manta-03.jpg';
import piscinaAntes from '../assets/obras/nova-piscina-04.jpg';
import piscinaEtapa from '../assets/obras/nova-piscina-05.jpg';
import piscinaDepois from '../assets/obras/nova-piscina-03.jpg';

export type WorkCase = {
  slug: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  cover: ImageMetadata;
  images: Array<{ image: ImageMetadata; label: string; alt: string }>;
  steps: Array<{ title: string; text: string }>;
};

export const workCases: WorkCase[] = [
  {
    slug: 'recuperacao-e-impermeabilizacao-de-cobertura',
    title: 'Recuperação e impermeabilização de cobertura',
    category: 'Lajes e coberturas',
    location: 'Itu e região, SP',
    summary:
      'Registro da preparação da base e da aplicação do sistema asfáltico em uma cobertura exposta.',
    problem:
      'A cobertura precisava receber uma nova barreira impermeável, com atenção aos encontros, rodapés e elementos elevados.',
    solution:
      'A equipe preparou e regularizou a superfície antes de executar a manta asfáltica de forma contínua nos planos e detalhes.',
    result:
      'Sistema impermeabilizante aplicado e arremates executados, deixando a cobertura pronta para as etapas de proteção e acabamento previstas para a obra.',
    cover: lajeDepois,
    images: [
      { image: lajeAntes, label: 'PREPARAÇÃO', alt: 'Cobertura durante a preparação da superfície' },
      { image: lajeEtapa, label: 'EXECUÇÃO', alt: 'Aplicação do sistema impermeabilizante na cobertura' },
      { image: lajeDepois, label: 'SISTEMA APLICADO', alt: 'Cobertura com manta asfáltica aplicada' },
    ],
    steps: [
      { title: 'Inspeção e preparação', text: 'Verificação da base, limpeza e tratamento dos pontos que poderiam comprometer a aderência.' },
      { title: 'Detalhamento', text: 'Execução cuidadosa nos rodapés, encontros e elementos elevados da cobertura.' },
      { title: 'Aplicação do sistema', text: 'Instalação contínua da manta, com tratamento das sobreposições e emendas.' },
      { title: 'Conferência final', text: 'Revisão visual dos arremates antes da liberação para a etapa seguinte da obra.' },
    ],
  },
  {
    slug: 'impermeabilizacao-de-piscina-residencial',
    title: 'Impermeabilização de piscina residencial',
    category: 'Piscinas',
    location: 'Itu e região, SP',
    summary:
      'Sequência real de execução em uma piscina com diferentes níveis, degraus e pontos hidráulicos.',
    problem:
      'A geometria da piscina e as diversas passagens hidráulicas exigiam continuidade do sistema e atenção especial aos pontos críticos.',
    solution:
      'Foram preparados fundo, paredes, degraus e passagens antes da aplicação uniforme do sistema impermeabilizante.',
    result:
      'Barreira impermeável executada em toda a estrutura registrada, pronta para as verificações técnicas e o revestimento compatível.',
    cover: piscinaDepois,
    images: [
      { image: piscinaAntes, label: 'PREPARAÇÃO', alt: 'Estrutura da piscina durante a preparação' },
      { image: piscinaEtapa, label: 'DETALHES', alt: 'Tratamento dos pontos hidráulicos da piscina' },
      { image: piscinaDepois, label: 'SISTEMA APLICADO', alt: 'Piscina residencial com sistema impermeabilizante aplicado' },
    ],
    steps: [
      { title: 'Avaliação da estrutura', text: 'Mapeamento de paredes, fundo, degraus, encontros e dispositivos hidráulicos.' },
      { title: 'Preparação da base', text: 'Correção e regularização das superfícies para receber o sistema especificado.' },
      { title: 'Tratamento dos detalhes', text: 'Reforço dos pontos hidráulicos e mudanças de plano antes da aplicação geral.' },
      { title: 'Aplicação contínua', text: 'Execução uniforme do sistema em toda a geometria da piscina.' },
    ],
  },
];

export const getWorkCaseBySlug = (slug: string) => workCases.find((item) => item.slug === slug);
