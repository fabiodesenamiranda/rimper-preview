export interface ServiceStep {
  title: string;
  text: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  introduction: string;
  problems: string[];
  systems: string[];
  steps: ServiceStep[];
  benefits: string[];
  faqs: ServiceFaq[];
  relatedImages: Array<{ src: string; alt: string }>;
}

export const services: Service[] = [
  {
    slug: 'impermeabilizacao-de-lajes',
    title: 'Impermeabilização de lajes',
    eyebrow: 'Lajes e coberturas',
    description: 'Impermeabilização de lajes expostas, coberturas e áreas transitáveis em Itu e região, com diagnóstico técnico e sistema adequado à estrutura.',
    heroImage: '/images/servicos/impermeabilizacao-laje.webp',
    heroAlt: 'Aplicação de manta asfáltica em laje de cobertura',
    introduction: 'Lajes ficam expostas ao sol, à chuva e às movimentações naturais da estrutura. Sem um sistema adequado, a água encontra fissuras e pontos frágeis, atingindo forros, paredes e acabamentos internos.',
    problems: ['Infiltrações no teto e nas paredes', 'Fissuras e falhas junto aos ralos', 'Umidade em platibandas e rodapés', 'Desgaste causado por sol e chuva'],
    systems: ['Manta asfáltica', 'Manta líquida', 'Membranas de poliuretano', 'Proteção mecânica e caimento'],
    steps: [
      { title: 'Inspeção da cobertura', text: 'Avaliamos fissuras, ralos, caimentos, juntas e o sistema existente.' },
      { title: 'Preparação da base', text: 'A superfície é limpa, regularizada e preparada para receber o produto.' },
      { title: 'Aplicação do sistema', text: 'Executamos a impermeabilização com reforço nos encontros e pontos críticos.' },
      { title: 'Teste e proteção', text: 'Verificamos a estanqueidade e aplicamos a proteção indicada para o uso da área.' },
    ],
    benefits: ['Proteção da estrutura', 'Redução de infiltrações', 'Maior vida útil da cobertura', 'Preservação dos ambientes internos'],
    faqs: [
      { question: 'Qual é o melhor sistema para uma laje?', answer: 'Depende da exposição, movimentação, circulação e condições da base. A escolha é feita após uma avaliação técnica.' },
      { question: 'É necessário retirar o piso existente?', answer: 'Nem sempre. A necessidade depende do sistema atual, da origem da infiltração e da aderência das camadas existentes.' },
      { question: 'A laje pode ser utilizada depois do serviço?', answer: 'Sim, desde que o sistema receba a proteção e o acabamento compatíveis com o nível de circulação previsto.' },
    ],
    relatedImages: [
      { src: '/images/servicos/impermeabilizacao-laje.webp', alt: 'Cobertura protegida com manta asfáltica' },
      { src: '/images/servicos/impermeabilizacao-sacada.webp', alt: 'Detalhe de aplicação de manta em área externa' },
      { src: '/images/servicos/impermeabilizacao-beiral.webp', alt: 'Área externa impermeabilizada junto à fachada' },
    ],
  },
  {
    slug: 'impermeabilizacao-de-piscinas',
    title: 'Impermeabilização de piscinas',
    eyebrow: 'Piscinas',
    description: 'Impermeabilização de piscinas novas ou em recuperação, com tratamento de estrutura, pontos hidráulicos, fundo, paredes e degraus.',
    heroImage: '/images/servicos/impermeabilizacao-piscina.webp',
    heroAlt: 'Piscina residencial com impermeabilização aplicada',
    introduction: 'Piscinas trabalham sob pressão constante de água e possuem muitos encontros, tubulações e mudanças de plano. Esses pontos exigem preparação cuidadosa e continuidade total da barreira impermeabilizante.',
    problems: ['Perda recorrente de água', 'Umidade no entorno da piscina', 'Falhas em tubulações e refletores', 'Fissuras no fundo, paredes ou degraus'],
    systems: ['Argamassa polimérica', 'Membranas flexíveis', 'Reforço de cantos e passagens', 'Sistemas compatíveis com revestimento'],
    steps: [
      { title: 'Avaliação da estrutura', text: 'Identificamos fissuras, falhas de concretagem e pontos hidráulicos vulneráveis.' },
      { title: 'Correções e regularização', text: 'Tratamos a base, os encontros e as passagens antes da impermeabilização.' },
      { title: 'Barreira impermeável', text: 'O sistema é aplicado de forma contínua em paredes, fundo, degraus e bordas.' },
      { title: 'Teste de estanqueidade', text: 'A estrutura é testada antes da liberação para receber o revestimento.' },
    ],
    benefits: ['Redução da perda de água', 'Proteção da estrutura', 'Segurança antes do revestimento', 'Tratamento de pontos críticos'],
    faqs: [
      { question: 'A impermeabilização é feita antes do revestimento?', answer: 'Sim. A barreira impermeável é executada e testada antes da instalação do revestimento final.' },
      { question: 'Piscinas antigas podem ser recuperadas?', answer: 'Podem, após identificar a origem da falha e verificar as condições da estrutura e das camadas existentes.' },
      { question: 'Por que o teste de estanqueidade é importante?', answer: 'Ele permite verificar o desempenho do sistema antes que o revestimento cubra toda a área executada.' },
    ],
    relatedImages: [
      { src: '/images/servicos/impermeabilizacao-piscina.webp', alt: 'Piscina residencial impermeabilizada' },
      { src: '/images/obras/1 (3).jpg', alt: 'Piscina e área de lazer em execução' },
      { src: '/images/obras/1 (4).jpg', alt: 'Piscina com diferentes níveis impermeabilizada' },
    ],
  },
  {
    slug: 'impermeabilizacao-de-reservatorios',
    title: "Impermeabilização de caixas d'água e reservatórios",
    eyebrow: "Caixas d'água e reservatórios",
    description: 'Impermeabilização de caixas d’água e reservatórios enterrados ou elevados, com sistemas adequados ao contato permanente com água.',
    heroImage: '/images/servicos/impermeabilizacao-reservatorio.webp',
    heroAlt: 'Reservatório de água com impermeabilização interna',
    introduction: 'Reservatórios precisam manter a água dentro da estrutura e impedir a entrada de contaminantes externos. O sistema deve ser contínuo, compatível com a finalidade do reservatório e aplicado sobre uma base corretamente preparada.',
    problems: ['Perda de água armazenada', 'Umidade nas faces externas', 'Falhas em juntas e tubulações', 'Desagregação do revestimento interno'],
    systems: ['Argamassa polimérica', 'Revestimentos impermeáveis', 'Tratamento de juntas', 'Produtos adequados à finalidade do reservatório'],
    steps: [
      { title: 'Esvaziamento e inspeção', text: 'Analisamos paredes, fundo, teto, juntas e passagens hidráulicas.' },
      { title: 'Saneamento da base', text: 'Partes soltas são removidas e falhas, fissuras e encontros recebem tratamento.' },
      { title: 'Impermeabilização', text: 'Aplicamos o sistema especificado em toda a superfície interna necessária.' },
      { title: 'Cura e liberação', text: 'Respeitamos o período técnico e realizamos as verificações antes do uso.' },
    ],
    benefits: ['Preservação da água', 'Proteção da estrutura', 'Tratamento contínuo', 'Maior segurança operacional'],
    faqs: [
      { question: 'O reservatório precisa ficar vazio?', answer: 'Sim. A execução exige acesso à base, preparação das superfícies e respeito ao período de cura antes do enchimento.' },
      { question: 'O mesmo produto serve para qualquer reservatório?', answer: 'Não. O sistema deve considerar o tipo de água armazenada, a estrutura e as condições de operação.' },
      { question: 'Também são tratadas as tubulações?', answer: 'Os encontros com tubos e demais passagens são pontos críticos e fazem parte da avaliação e do detalhamento do serviço.' },
    ],
    relatedImages: [
      { src: '/images/servicos/impermeabilizacao-reservatorio.webp', alt: 'Reservatório impermeabilizado internamente' },
      { src: '/images/servicos/impermeabilizacao-area-molhada.webp', alt: 'Estrutura interna com impermeabilização aplicada' },
      { src: '/images/servicos/impermeabilizacao-piscina.webp', alt: 'Sistema impermeável aplicado em estrutura hidráulica' },
    ],
  },
  {
    slug: 'impermeabilizacao-de-areas-molhadas',
    title: 'Impermeabilização de banheiros e áreas molhadas',
    eyebrow: 'Banheiros e áreas molhadas',
    description: 'Impermeabilização de banheiros, boxes, cozinhas, lavanderias e áreas molhadas antes da instalação dos revestimentos.',
    heroImage: '/images/servicos/impermeabilizacao-area-molhada.webp',
    heroAlt: 'Área molhada interna preparada com impermeabilização',
    introduction: 'A água utilizada diariamente pode atravessar rejuntes e alcançar a base. A impermeabilização sob o revestimento protege o piso, os rodapés, os encontros com paredes e os ambientes vizinhos.',
    problems: ['Manchas no teto do pavimento inferior', 'Rodapés e paredes com umidade', 'Falhas ao redor de ralos', 'Descolamento de revestimentos'],
    systems: ['Argamassa polimérica', 'Membrana flexível', 'Reforço em ralos e cantos', 'Subida impermeável nos rodapés'],
    steps: [
      { title: 'Conferência da base', text: 'Verificamos caimento, ralos, tubulações e condições do contrapiso.' },
      { title: 'Preparação dos encontros', text: 'Cantos, rodapés e passagens recebem o detalhamento necessário.' },
      { title: 'Aplicação da membrana', text: 'O sistema é aplicado no piso e nas paredes conforme a exposição à água.' },
      { title: 'Teste e revestimento', text: 'Após a cura e a verificação, a área pode avançar para o acabamento.' },
    ],
    benefits: ['Proteção dos ambientes vizinhos', 'Segurança sob o revestimento', 'Tratamento de ralos e cantos', 'Prevenção desde a obra'],
    faqs: [
      { question: 'O rejunte sozinho impede infiltrações?', answer: 'Não. O revestimento e o rejunte são acabamentos; a proteção principal deve estar no sistema impermeabilizante abaixo deles.' },
      { question: 'Até que altura a parede deve ser impermeabilizada?', answer: 'A altura depende do ambiente e da exposição direta à água, especialmente dentro da área do box.' },
      { question: 'É possível corrigir depois que o banheiro está pronto?', answer: 'É possível, mas o diagnóstico define se será necessário remover parte dos acabamentos para acessar a origem da falha.' },
    ],
    relatedImages: [
      { src: '/images/servicos/impermeabilizacao-area-molhada.webp', alt: 'Área interna impermeabilizada antes do acabamento' },
      { src: '/images/servicos/impermeabilizacao-sacada.webp', alt: 'Tratamento impermeável em área sujeita à água' },
      { src: '/images/servicos/impermeabilizacao-reservatorio.webp', alt: 'Detalhe de estrutura com proteção impermeável' },
    ],
  },
  {
    slug: 'impermeabilizacao-de-fundacoes',
    title: 'Impermeabilização de baldrames e fundações',
    eyebrow: 'Baldrames e fundações',
    description: 'Proteção de baldrames e fundações contra a umidade ascendente e o contato permanente com o solo.',
    heroImage: '/images/servicos/impermeabilizacao-baldrame.webp',
    heroAlt: 'Impermeabilização de baldrames durante a execução da fundação',
    introduction: 'A umidade do solo pode subir pela fundação e alcançar paredes, rebocos e pinturas. Quando a barreira é executada no início da obra, a estrutura fica protegida antes mesmo da elevação da alvenaria.',
    problems: ['Umidade ascendente nas paredes', 'Bolhas e descascamento da pintura', 'Mofo próximo ao piso', 'Contato direto da estrutura com o solo'],
    systems: ['Pintura asfáltica', 'Manta impermeabilizante', 'Argamassa impermeável', 'Proteção e drenagem quando necessárias'],
    steps: [
      { title: 'Análise da fundação', text: 'Verificamos o tipo de elemento, o solo e as faces que ficarão enterradas.' },
      { title: 'Regularização', text: 'A base é preparada para evitar falhas, pontas e descontinuidades.' },
      { title: 'Criação da barreira', text: 'O sistema é aplicado nas faces previstas e nos encontros com a alvenaria.' },
      { title: 'Proteção e continuidade', text: 'A impermeabilização é protegida antes do reaterro ou avanço da obra.' },
    ],
    benefits: ['Bloqueio da umidade ascendente', 'Proteção de rebocos e pinturas', 'Execução preventiva', 'Maior durabilidade da edificação'],
    faqs: [
      { question: 'Quando o baldrame deve ser impermeabilizado?', answer: 'Preferencialmente durante a execução da fundação, antes da alvenaria e do reaterro cobrirem as áreas de acesso.' },
      { question: 'A impermeabilização elimina a necessidade de drenagem?', answer: 'Não necessariamente. Em locais com pressão de água no solo, impermeabilização e drenagem podem trabalhar em conjunto.' },
      { question: 'É possível tratar umidade ascendente em uma construção pronta?', answer: 'Existem soluções de recuperação, mas o método depende da origem da umidade, do acesso e do estado das paredes e fundações.' },
    ],
    relatedImages: [
      { src: '/images/servicos/impermeabilizacao-baldrame.webp', alt: 'Baldrames protegidos durante a fundação' },
      { src: '/images/servicos/impermeabilizacao-muro-arrimo.webp', alt: 'Estrutura em contato com o solo impermeabilizada' },
      { src: '/images/obras/1 (2).jpg', alt: 'Fundação e estrutura protegidas contra umidade' },
    ],
  },
  {
    slug: 'impermeabilizacao-de-sacadas-e-pocos',
    title: 'Impermeabilização de sacadas e poços de elevador',
    eyebrow: 'Sacadas e poços',
    description: 'Soluções de impermeabilização para sacadas expostas e poços de elevador sujeitos à entrada ou ao acúmulo de água.',
    heroImage: '/images/servicos/impermeabilizacao-sacada.webp',
    heroAlt: 'Sacada externa protegida com manta asfáltica',
    introduction: 'Sacadas recebem chuva e variações térmicas; poços de elevador podem sofrer com água vinda do solo ou de áreas próximas. Embora sejam estruturas diferentes, ambas exigem diagnóstico da origem e detalhamento dos encontros.',
    problems: ['Infiltração em ambientes abaixo da sacada', 'Falhas junto a portas, ralos e rodapés', 'Entrada de água no poço', 'Umidade em juntas e paredes enterradas'],
    systems: ['Manta asfáltica', 'Membranas flexíveis', 'Tratamento de juntas e ralos', 'Soluções associadas à drenagem'],
    steps: [
      { title: 'Diagnóstico da origem', text: 'Avaliamos exposição, caimentos, juntas, paredes e possíveis caminhos da água.' },
      { title: 'Correção da base', text: 'Regularizamos a superfície e tratamos fissuras e passagens.' },
      { title: 'Execução dos detalhes', text: 'Rodapés, ralos, soleiras e juntas recebem reforço antes da área principal.' },
      { title: 'Aplicação e verificação', text: 'Concluímos a barreira impermeável e verificamos o sistema antes do acabamento.' },
    ],
    benefits: ['Proteção de áreas inferiores', 'Tratamento de soleiras e ralos', 'Controle da entrada de água', 'Solução adequada a cada estrutura'],
    faqs: [
      { question: 'Sacada precisa de caimento?', answer: 'Sim. O escoamento correto reduz o acúmulo de água e trabalha em conjunto com o sistema impermeabilizante.' },
      { question: 'Por que entra água no poço de elevador?', answer: 'A água pode vir do solo, de juntas, paredes, tubulações ou áreas adjacentes. Identificar a origem é essencial para especificar a solução.' },
      { question: 'A soleira da porta também precisa de tratamento?', answer: 'Sim. Encontros com portas e esquadrias são pontos sensíveis e precisam integrar a continuidade da impermeabilização.' },
    ],
    relatedImages: [
      { src: '/images/servicos/impermeabilizacao-sacada.webp', alt: 'Sacada com manta asfáltica aplicada' },
      { src: '/images/servicos/impermeabilizacao-beiral.webp', alt: 'Área externa junto à fachada protegida' },
      { src: '/images/servicos/impermeabilizacao-area-molhada.webp', alt: 'Estrutura interna submetida à umidade' },
    ],
  },
  {
    slug: 'impermeabilizacao-de-beirais',
    title: 'Impermeabilização de beirais',
    eyebrow: 'Beirais',
    description: 'Tratamento de beirais, marquises e encontros de fachada contra infiltrações, umidade e deterioração dos acabamentos.',
    heroImage: '/images/servicos/impermeabilizacao-beiral.webp',
    heroAlt: 'Beiral externo impermeabilizado junto à fachada',
    introduction: 'Beirais protegem a fachada, mas permanecem diretamente expostos à chuva. Fissuras, pingadeiras insuficientes e falhas no encontro com a cobertura podem levar água para forros, paredes e revestimentos externos.',
    problems: ['Manchas na face inferior do beiral', 'Pintura externa descascando', 'Fissuras junto à fachada', 'Água retornando por ausência de pingadeira'],
    systems: ['Membrana impermeável', 'Selamento de fissuras', 'Tratamento de encontros', 'Correção de pingadeiras e caimentos'],
    steps: [
      { title: 'Inspeção externa', text: 'Mapeamos fissuras, emendas, caimentos e o caminho percorrido pela água.' },
      { title: 'Reparo da superfície', text: 'Partes frágeis são corrigidas e os pontos de entrada recebem preparação.' },
      { title: 'Impermeabilização', text: 'Aplicamos o sistema compatível com a exposição e o acabamento previsto.' },
      { title: 'Proteção do conjunto', text: 'Conferimos arremates, pingadeiras e continuidade com a cobertura.' },
    ],
    benefits: ['Preservação da fachada', 'Proteção de forros', 'Tratamento de fissuras', 'Melhor escoamento da chuva'],
    faqs: [
      { question: 'A infiltração do beiral sempre começa nele?', answer: 'Não. A água pode entrar pela cobertura e percorrer a estrutura até aparecer no beiral; por isso o diagnóstico deve considerar todo o conjunto.' },
      { question: 'Somente pintar resolve?', answer: 'A pintura pode renovar o acabamento, mas não substitui o tratamento da origem, das fissuras e dos encontros vulneráveis.' },
      { question: 'A pingadeira faz parte da solução?', answer: 'Ela pode ser essencial para interromper o retorno da água e direcionar corretamente o escoamento para longe da fachada.' },
    ],
    relatedImages: [
      { src: '/images/servicos/impermeabilizacao-beiral.webp', alt: 'Beiral tratado junto à fachada' },
      { src: '/images/servicos/impermeabilizacao-laje.webp', alt: 'Cobertura impermeabilizada acima da fachada' },
      { src: '/images/servicos/impermeabilizacao-sacada.webp', alt: 'Encontros externos protegidos contra água' },
    ],
  },
  {
    slug: 'impermeabilizacao-de-muros-de-arrimo',
    title: 'Impermeabilização de muros de arrimo',
    eyebrow: 'Muros de arrimo',
    description: 'Impermeabilização e proteção de muros de arrimo em contato com o solo, associadas ao direcionamento correto da água.',
    heroImage: '/images/servicos/impermeabilizacao-muro-arrimo.webp',
    heroAlt: 'Muro de arrimo protegido contra a umidade do solo',
    introduction: 'Muros de arrimo recebem umidade e pressão provenientes do terreno. A impermeabilização da face adequada, protegida contra danos do reaterro e combinada com drenagem quando necessária, ajuda a preservar a estrutura.',
    problems: ['Umidade atravessando o muro', 'Eflorescência e manchas', 'Pressão de água acumulada no solo', 'Deterioração de revestimentos'],
    systems: ['Manta asfáltica', 'Membranas impermeáveis', 'Proteção mecânica', 'Drenagem e direcionamento da água'],
    steps: [
      { title: 'Avaliação do terreno', text: 'Analisamos acesso, face de aplicação, condições do solo e presença de água.' },
      { title: 'Preparação do muro', text: 'Regularizamos a base e tratamos falhas, juntas e passagens.' },
      { title: 'Barreira impermeável', text: 'Executamos o sistema de forma contínua na área em contato com a umidade.' },
      { title: 'Proteção e drenagem', text: 'Protegemos a camada antes do reaterro e integramos a drenagem prevista.' },
    ],
    benefits: ['Proteção contra umidade do solo', 'Preservação da estrutura', 'Integração com drenagem', 'Maior durabilidade dos acabamentos'],
    faqs: [
      { question: 'Qual face do muro deve ser impermeabilizada?', answer: 'Sempre que houver acesso, o tratamento mais eficiente considera a face que recebe a água e o contato direto com o solo.' },
      { question: 'Impermeabilização e drenagem são a mesma coisa?', answer: 'Não. A impermeabilização cria a barreira; a drenagem coleta e direciona a água, reduzindo sua pressão sobre o muro.' },
      { question: 'É possível recuperar um muro já enterrado?', answer: 'Sim, mas o método depende do acesso, da origem da umidade e das condições estruturais e de acabamento.' },
    ],
    relatedImages: [
      { src: '/images/servicos/impermeabilizacao-muro-arrimo.webp', alt: 'Muro de arrimo com manta impermeável' },
      { src: '/images/servicos/impermeabilizacao-baldrame.webp', alt: 'Estruturas em contato com o solo protegidas' },
      { src: '/images/obras/1 (2).jpg', alt: 'Execução de impermeabilização em fundações' },
    ],
  },
];
