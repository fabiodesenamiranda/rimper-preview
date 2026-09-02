import type { ImageMetadata } from 'astro';
import lajeAntes from '../assets/obras/manta-asfaltica-antes.jpeg';
import lajeDepois from '../assets/obras/manta-asfaltica-depois.jpeg';
import piscinaAntes from '../assets/obras/piscina-antes-cliente.jpeg';
import piscinaDepois from '../assets/obras/piscina-depois-cliente.jpeg';

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
    slug: 'impermeabilizacao-em-laje-com-manta-asfaltica',
    title: 'Impermeabilização em Laje com Manta Asfáltica',
    category: 'Lajes e coberturas',
    location: 'Itu e região, SP',
    summary:
      'Antes e depois da preparação da laje e da aplicação da manta asfáltica em toda a cobertura.',
    problem:
      'A laje exposta precisava de uma barreira impermeável contínua para proteger a estrutura contra infiltrações e a ação do tempo.',
    solution:
      'A equipe preparou a base e aplicou a manta asfáltica em toda a área, tratando emendas, ralos, rodapés e encontros com as paredes.',
    result:
      'A laje recebeu uma camada impermeável contínua, com sobreposições e arremates executados para garantir a proteção da cobertura.',
    cover: lajeDepois,
    images: [
      { image: lajeAntes, label: 'ANTES', alt: 'Laje preparada antes da aplicação da manta asfáltica' },
      { image: lajeDepois, label: 'DEPOIS', alt: 'Laje impermeabilizada com manta asfáltica aplicada' },
    ],
    steps: [
      { title: 'Preparação da laje', text: 'Limpeza e regularização da base para proporcionar a aderência correta do sistema.' },
      { title: 'Tratamento dos detalhes', text: 'Reforço nos ralos, rodapés, cantos e encontros com elementos da cobertura.' },
      { title: 'Aplicação da manta', text: 'Instalação da manta asfáltica com sobreposição e aderência contínuas em toda a laje.' },
      { title: 'Conferência dos arremates', text: 'Inspeção das emendas e dos pontos críticos antes da liberação da área.' },
    ],
  },
  {
    slug: 'impermeabilizacao-em-piscina',
    title: 'Impermeabilização em Piscina',
    category: 'Piscinas',
    location: 'Itu e região, SP',
    summary:
      'Antes e depois da impermeabilização de uma piscina com degraus, diferentes níveis e pontos hidráulicos.',
    problem:
      'A estrutura apresentava a base exposta e precisava de tratamento completo para evitar perdas de água e infiltrações futuras.',
    solution:
      'Fundo, paredes, degraus, cantos e passagens hidráulicas foram preparados e receberam o sistema impermeabilizante de forma contínua.',
    result:
      'A piscina ficou integralmente protegida e pronta para o teste de estanqueidade e as próximas etapas de acabamento.',
    cover: piscinaDepois,
    images: [
      { image: piscinaAntes, label: 'ANTES', alt: 'Piscina antes da aplicação do sistema impermeabilizante' },
      { image: piscinaDepois, label: 'DEPOIS', alt: 'Piscina com sistema impermeabilizante aplicado em toda a estrutura' },
    ],
    steps: [
      { title: 'Avaliação da estrutura', text: 'Inspeção do fundo, paredes, degraus, encontros e dispositivos hidráulicos.' },
      { title: 'Preparação da base', text: 'Limpeza, correção e regularização das superfícies antes da impermeabilização.' },
      { title: 'Tratamento dos pontos críticos', text: 'Reforço das passagens hidráulicas, cantos e mudanças de plano.' },
      { title: 'Aplicação do sistema', text: 'Execução uniforme da barreira impermeável em toda a geometria da piscina.' },
    ],
  },
];

export const getWorkCaseBySlug = (slug: string) => workCases.find((item) => item.slug === slug);
