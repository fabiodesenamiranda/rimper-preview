export type PostSection = {
  heading?: string;
  paragraphs?: string[];
  items?: Array<{ title: string; text: string }>;
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readingTime: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: 'crescimento-setor-impermeabilizacao',
    title: 'O crescimento do setor de impermeabilização',
    category: 'Mercado',
    excerpt:
      'Entenda por que a proteção contra a umidade ganhou espaço na construção civil e quais tendências devem movimentar o setor.',
    image: '/images/setor1-1-1.jpg',
    imageAlt: 'Profissional instalando manta impermeabilizante em uma cobertura',
    readingTime: '5 min de leitura',
    sections: [
      {
        paragraphs: [
          'Nos últimos anos, testemunhamos um crescimento significativo no setor de impermeabilização na construção civil. Com a crescente conscientização sobre a importância da proteção contra a umidade, os avanços tecnológicos e a demanda por construções mais duráveis e sustentáveis, o mercado está florescendo como nunca antes.',
        ],
      },
      {
        heading: 'O que impulsiona esse crescimento?',
        items: [
          {
            title: 'Consciência e prevenção',
            text: 'Proprietários e construtores estão mais atentos aos danos causados por infiltrações, mofo e deterioração estrutural. Investir em impermeabilização desde o início do projeto evita problemas e custos futuros.',
          },
          {
            title: 'Inovação tecnológica',
            text: 'Novos materiais e técnicas oferecem maior eficiência, durabilidade e sustentabilidade para diferentes tipos de estrutura e exposição à água.',
          },
          {
            title: 'Regulamentações e normas',
            text: 'Requisitos técnicos mais rigorosos incentivam práticas eficazes de prevenção da umidade e ajudam a elevar a qualidade das construções.',
          },
          {
            title: 'Crescimento do mercado imobiliário',
            text: 'A expansão de habitações e infraestrutura, especialmente nos centros urbanos, aumenta a necessidade de soluções profissionais de impermeabilização.',
          },
          {
            title: 'Sustentabilidade e eficiência energética',
            text: 'Uma estrutura protegida contra a umidade é mais durável e também contribui para o conforto térmico, reduzindo desperdícios de energia e materiais.',
          },
        ],
      },
      {
        heading: 'Perspectivas futuras',
        paragraphs: [
          'Com a urbanização e o aumento da conscientização ambiental, a tendência é que o setor continue crescendo. Tecnologias e materiais inovadores devem ampliar a eficiência e a sustentabilidade das soluções, acompanhando um mercado em constante evolução.',
        ],
      },
      {
        heading: 'Conclusão',
        paragraphs: [
          'O crescimento do setor reflete a importância atribuída à proteção contra a umidade em todas as fases da obra. Investir em soluções eficazes preserva a integridade das estruturas e ajuda a construir comunidades mais resilientes e sustentáveis.',
        ],
      },
    ],
  },
  {
    slug: 'tipos-de-impermeabilizacao-na-construcao-civil',
    title: 'Conheça os tipos de impermeabilização na construção civil',
    category: 'Guia técnico',
    excerpt:
      'Conheça os sistemas flexível, rígido, por injeção, cristalizante e por pintura e saiba onde cada um costuma ser aplicado.',
    image: '/images/construcao-civil-1-1.jpg',
    imageAlt: 'Equipe de profissionais em um canteiro de obras',
    readingTime: '6 min de leitura',
    sections: [
      {
        paragraphs: [
          'Ao construir ou reformar, a impermeabilização é um dos aspectos mais importantes a considerar. Proteger a estrutura contra infiltrações e umidade é essencial para a durabilidade e a segurança da construção. Existem diferentes sistemas, e cada um responde melhor a determinadas condições.',
        ],
      },
      {
        heading: 'Principais tipos de impermeabilização',
        items: [
          {
            title: 'Impermeabilização flexível',
            text: 'Mantas asfálticas, membranas de PVC e materiais flexíveis acompanham pequenas movimentações da estrutura. São comuns em lajes, terraços, áreas molhadas e piscinas.',
          },
          {
            title: 'Impermeabilização rígida',
            text: 'Argamassas poliméricas, cimentos modificados e resinas formam uma barreira sólida. A solução é indicada para estruturas estáveis, reservatórios e áreas sujeitas à pressão de água.',
          },
          {
            title: 'Impermeabilização por injeção',
            text: 'Resinas ou géis são injetados em fissuras e trincas para bloquear a passagem de água. É uma alternativa para recuperar pontos já comprometidos.',
          },
          {
            title: 'Impermeabilização cristalizante',
            text: 'Produtos químicos penetram no concreto e formam cristais insolúveis que reduzem a passagem de água. Pode ser usada em concreto novo ou existente, inclusive em estruturas enterradas.',
          },
          {
            title: 'Impermeabilização por pintura',
            text: 'Tintas e membranas à base de resinas acrílicas, elastoméricas ou de poliuretano criam uma camada protetora, especialmente útil em superfícies externas e verticais.',
          },
        ],
      },
      {
        heading: 'Como escolher o sistema correto?',
        paragraphs: [
          'A escolha depende da movimentação da estrutura, da pressão de água, do acabamento previsto, do clima e das condições do local. Uma avaliação técnica evita incompatibilidades entre materiais e define o preparo adequado da base.',
          'Não deixe a umidade comprometer seus planos. Com projeto, produto e execução compatíveis, a impermeabilização protege a obra por muitos anos.',
        ],
      },
    ],
  },
  {
    slug: 'sinais-de-infiltracao-que-nao-devem-ser-ignorados',
    title: 'Sinais de infiltração que não devem ser ignorados',
    category: 'Manutenção',
    excerpt:
      'Manchas, bolor, pintura descascando e odores persistentes podem revelar um problema maior escondido na estrutura.',
    image: '/images/parede.png',
    imageAlt: 'Parede com sinais de infiltração e umidade',
    readingTime: '4 min de leitura',
    sections: [
      {
        paragraphs: [
          'Infiltrações raramente surgem de uma hora para outra. Antes de a água aparecer em grande quantidade, a edificação costuma apresentar sinais discretos que merecem atenção.',
        ],
      },
      {
        heading: 'Os alertas mais comuns',
        items: [
          { title: 'Manchas e escurecimento', text: 'Marcas amareladas ou escuras em tetos e paredes indicam umidade recorrente e precisam ter sua origem investigada.' },
          { title: 'Bolor e odor de umidade', text: 'Além de afetar o acabamento, fungos podem prejudicar a qualidade do ar e a saúde dos ocupantes.' },
          { title: 'Pintura ou revestimento soltando', text: 'Bolhas, descascamento e rejuntes deteriorados mostram que a água já está interferindo na aderência dos materiais.' },
          { title: 'Fissuras e eflorescência', text: 'Trincas e depósitos esbranquiçados são sinais de movimentação e transporte de sais pela água dentro da estrutura.' },
        ],
      },
      {
        heading: 'O que fazer ao encontrar um sinal?',
        paragraphs: [
          'Evite apenas cobrir a mancha com tinta. O primeiro passo é localizar a entrada da água, avaliar a extensão do dano e corrigir a causa. Quanto mais cedo ocorre o diagnóstico, menor tende a ser a intervenção.',
        ],
      },
    ],
  },
  {
    slug: 'impermeabilizacao-de-lajes-como-proteger',
    title: 'Impermeabilização de lajes: como proteger a cobertura',
    category: 'Lajes e coberturas',
    excerpt:
      'Veja quais cuidados com caimento, ralos, preparação da base e proteção mecânica aumentam a vida útil da impermeabilização.',
    image: '/images/laje.jpg',
    imageAlt: 'Aplicação de manta impermeabilizante em laje',
    readingTime: '5 min de leitura',
    sections: [
      {
        paragraphs: [
          'A laje recebe sol, chuva e variações de temperatura todos os dias. Sem um sistema bem executado, pequenas falhas podem levar água ao interior da edificação e comprometer acabamentos e estruturas.',
        ],
      },
      {
        heading: 'Etapas que fazem diferença',
        items: [
          { title: 'Diagnóstico e preparação', text: 'A base deve estar firme, limpa e regular. Fissuras, partes soltas e contaminações precisam ser tratadas antes da aplicação.' },
          { title: 'Caimento e drenagem', text: 'A água deve seguir para ralos e condutores sem formar poças. Detalhes em rodapés, tubulações e juntas exigem atenção especial.' },
          { title: 'Escolha do sistema', text: 'Manta asfáltica, membrana líquida e outras soluções devem ser definidas conforme o uso da laje, a movimentação e o acabamento.' },
          { title: 'Teste e proteção', text: 'Após a execução, o teste de estanqueidade verifica o desempenho. Quando necessário, a proteção mecânica preserva a camada impermeável.' },
        ],
      },
      {
        heading: 'Manutenção prolonga o resultado',
        paragraphs: [
          'Ralos limpos, inspeções periódicas e cuidados ao instalar antenas ou equipamentos evitam perfurações e reduzem o risco de infiltrações futuras.',
        ],
      },
    ],
  },
  {
    slug: 'impermeabilizacao-de-piscinas-cuidados-essenciais',
    title: 'Impermeabilização de piscinas: cuidados essenciais',
    category: 'Piscinas',
    excerpt:
      'Pressão constante de água, juntas e tubulações exigem projeto e execução precisos para evitar vazamentos e perda de água.',
    image: '/images/piscina.jpg',
    imageAlt: 'Piscina residencial impermeabilizada',
    readingTime: '5 min de leitura',
    sections: [
      {
        paragraphs: [
          'Piscinas trabalham sob pressão constante e passam por variações de temperatura e movimentações. Por isso, a impermeabilização precisa formar um conjunto compatível com a estrutura, os dispositivos hidráulicos e o revestimento final.',
        ],
      },
      {
        heading: 'Pontos críticos do serviço',
        items: [
          { title: 'Regularização da estrutura', text: 'Falhas de concretagem, fissuras e quinas devem ser tratadas antes que o sistema impermeável seja aplicado.' },
          { title: 'Tubulações e dispositivos', text: 'Ralos, retornos, refletores e passagens de tubos são encontros sensíveis e exigem vedação detalhada.' },
          { title: 'Compatibilidade dos materiais', text: 'Impermeabilizante, argamassa de assentamento, rejunte e revestimento precisam funcionar como um sistema único.' },
          { title: 'Teste de estanqueidade', text: 'O enchimento controlado antes do acabamento ajuda a confirmar a ausência de vazamentos e permite corrigir falhas com menor impacto.' },
        ],
      },
      {
        heading: 'Evite reparos improvisados',
        paragraphs: [
          'Quando o nível da piscina baixa sem explicação, a origem pode estar na estrutura ou no sistema hidráulico. Um diagnóstico técnico evita quebrar revestimentos sem necessidade.',
        ],
      },
    ],
  },
  {
    slug: 'manutencao-preventiva-da-impermeabilizacao',
    title: 'Manutenção preventiva da impermeabilização: quando fazer?',
    category: 'Prevenção',
    excerpt:
      'Inspeções simples e periódicas ajudam a encontrar falhas cedo e evitam reformas emergenciais mais caras.',
    image: '/images/Banner-1920-x-700-px-1.png',
    imageAlt: 'Técnico realizando serviço em uma cobertura',
    readingTime: '4 min de leitura',
    sections: [
      {
        paragraphs: [
          'Mesmo um sistema impermeabilizante bem executado precisa ser acompanhado. A exposição ao clima, intervenções posteriores e o uso diário podem danificar pontos antes protegidos.',
        ],
      },
      {
        heading: 'O que deve ser inspecionado?',
        items: [
          { title: 'Ralos e calhas', text: 'Folhas e resíduos impedem o escoamento e mantêm a água acumulada sobre a cobertura.' },
          { title: 'Juntas e selantes', text: 'Ressecamento, perda de aderência e fissuras em juntas indicam necessidade de reparo.' },
          { title: 'Rodapés e encontros', text: 'A transição entre piso, parede, tubulação e equipamento concentra movimentações e deve permanecer íntegra.' },
          { title: 'Intervenções recentes', text: 'Instalações de ar-condicionado, antenas e estruturas metálicas podem perfurar ou sobrecarregar a impermeabilização.' },
        ],
      },
      {
        heading: 'Qual é a melhor periodicidade?',
        paragraphs: [
          'Uma inspeção anual e verificações após chuvas intensas ou obras próximas são uma boa referência. A frequência pode ser maior em coberturas expostas, áreas de grande circulação ou estruturas com histórico de infiltração.',
          'Registrar as inspeções e agir nos primeiros sinais reduz custos, preserva acabamentos e aumenta a vida útil da edificação.',
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug: string) => posts.find((post) => post.slug === slug);
