const projects = [
  {
    id: 1,
    title: "React Chess",
    shortDescription: "Um jogo de xadrez feito com React.",
    longDescription: `
Um jogo de xadrez totalmente interativo construído do zero com React e TypeScript, criado usando Create React App. A aplicação renderiza um tabuleiro responsivo 8×8 onde dois jogadores podem se alternar movendo peças por meio de uma interface de clique para selecionar e clique para posicionar. Implementa as regras padrão de movimento para todos os seis tipos de peças, incluindo o movimento de duas casas do peão na abertura, o salto do cavalo sobre peças, e a rainha reutilizando a lógica da torre e do bispo via composição. O jogo aplica alternância de turnos, valida cada movimento contra as regras, detecta condições de xeque e xeque-mate, e impede movimentos ilegais que deixariam o próprio rei exposto.

A arquitetura segue um fluxo de dados unidirecional limpo (App → Board → Tile → Piece) com uma clara separação entre renderização e lógica de jogo. Cada tipo de peça tem um PieceController dedicado que implementa uma interface compartilhada, encapsulando suas regras de movimento junto ao seu componente — um padrão que mantém o código modular e fácil de estender. O controller da Rainha demonstra o padrão composite combinando os controllers da Torre e do Bispo em vez de duplicar lógica. As posições do tabuleiro usam notação algébrica padrão (ex.: "e4"), com uma camada utilitária que converte entre notação de string e coordenadas numéricas para cálculos de movimento.

No lado da UI, o projeto usa react-transition-group para notificações suaves de turno e xeque/xeque-mate, e um hook customizado useWindowSize para tornar o tabuleiro responsivo em diferentes tamanhos de tela. A validação de movimentos passa por um pipeline: movimentos candidatos são gerados pelo controller da peça, depois filtrados por uma verificação de legalidade que simula cada movimento em uma cópia do estado do tabuleiro para garantir que não deixe o próprio rei em xeque. A detecção de xeque-mate testa exaustivamente se alguma peça do lado em xeque tem um movimento de escape legal. O stack tecnológico inclui TypeScript para segurança de tipos em todo o projeto, e React Testing Library com Jest para testes.
`,
    coverImage: "https://github.com/gm1357/react-chess/raw/master/demo.png",
    link: "https://react-chess.vercel.app/",
    github: "https://github.com/gm1357/react-chess",
  },
  {
    id: 2,
    title: "Payment Splitter API",
    shortDescription:
      "Uma API REST baseada em NestJS para dividir despesas entre membros de um grupo.",
    longDescription: `
Payment Splitter API é um serviço backend para dividir despesas entre membros de um grupo, similar a apps como Splitwise. Permite que usuários criem grupos, adicionem membros, registrem despesas compartilhadas, acompanhem saldos individuais e quitem dívidas. A API calcula automaticamente a parte justa de cada membro usando divisão igualitária (com precisão de centavos para lidar com restos), e fornece um algoritmo inteligente de sugestão de liquidação que minimiza o número de transações necessárias para quitar todas as dívidas dentro de um grupo.

A API é construída com NestJS (Node.js/TypeScript) seguindo uma arquitetura modular, onde cada funcionalidade de domínio (usuários, grupos, despesas, saldos, liquidações) é encapsulada em seu próprio módulo com controllers, services e DTOs dedicados. A persistência de dados é gerenciada pelo Prisma ORM com PostgreSQL, usando um esquema relacional bem normalizado com modelos para Users, Groups, GroupMembers, Expenses, ExpenseSplits e Settlements. A autenticação é implementada com Passport.js usando uma estratégia local para login e tokens JWT para proteger rotas.

A API suporta criação de despesas individual e em lote via upload de CSV, com validação completa e processamento transacional. Notificações por email são enviadas aos membros do grupo afetados quando despesas são adicionadas, utilizando Nodemailer. O armazenamento de arquivos é integrado através do AWS S3 e o processamento assíncrono através do AWS SQS, com LocalStack usado como mock local para desenvolvimento. O código aplica soft deletes em todas as entidades, validação de requests através de class-validator com ValidationPipe global, e documentação Swagger/OpenAPI gerada automaticamente. O projeto inclui testes unitários (com mocks Jest) e testes de integração (usando Pactum para assertions HTTP contra um banco de dados real), com Docker Compose orquestrando PostgreSQL, um mail catcher e LocalStack para um ambiente de desenvolvimento totalmente autocontido.
`,
    coverImage: "/images/payment-splitter.png",
    link: "https://payment-splitter-api.vercel.app/api-json",
    github: "https://github.com/gm1357/payment-splitter-api",
  },
  {
    id: 3,
    title: "Angular Kanban",
    shortDescription:
      "Aplicação Angular para gerenciamento de projetos com quadros e tarefas, como o Trello.",
    longDescription: `
Angular Kanban é uma aplicação web de gerenciamento de projetos inspirada em ferramentas como o Trello. Ela fornece uma interface interativa de quadro Kanban onde usuários podem organizar trabalho em múltiplos quadros, cada um contendo colunas customizáveis (listas de tarefas) e cards de tarefas individuais. As tarefas suportam descrições formatadas em Markdown com syntax highlighting e suporte a emojis, e podem ser categorizadas visualmente por cores. Toda a interface suporta interações de drag-and-drop — usuários podem reordenar colunas, mover tarefas dentro de uma lista, ou transferi-las entre listas de forma fluida.

A aplicação é construída com Angular 10 e TypeScript, seguindo uma arquitetura modular baseada em funcionalidades com clara separação de responsabilidades. A camada de UI usa Bootstrap 4 para layout responsivo e Font Awesome para iconografia, enquanto o módulo drag-drop do Angular CDK alimenta a funcionalidade de arrastar e soltar. As descrições das tarefas são renderizadas através do ngx-markdown com Prism.js para highlighting de código, e SweetAlert2 fornece diálogos de confirmação elegantes para ações destrutivas. Os dados são persistidos inteiramente no localStorage do navegador, tornando-a uma aplicação totalmente client-side sem dependência de backend.

No lado arquitetural, o projeto demonstra várias boas práticas do Angular: uma hierarquia de módulos bem organizada (Core, Shared e módulos de funcionalidades), o padrão smart/presentational component para fluxo de dados limpo, reactive forms via FormBuilder e FormGroup para todas as entradas de usuário, e services singleton com providedIn: 'root' para gerenciamento e persistência de dados. O roteamento é gerenciado com rotas parametrizadas e títulos de página dinâmicos, e o pipeline de build utiliza Angular CLI com compilação AOT, tree-shaking e otimizações de produção.
`,
    coverImage: "https://github.com/gm1357/Angular-Kanban/raw/master/demo.png",
    link: "https://angular-kanban.gmachado1.vercel.app/",
    github: "https://github.com/gm1357/Angular-Kanban",
  },
  {
    id: 4,
    title: "Bidding System",
    shortDescription:
      "Uma plataforma fullstack de leilões onde usuários podem navegar por coleções de itens, fazer lances e ter lances aceitos ou rejeitados.",
    longDescription: `
Uma aplicação web fullstack que simula uma plataforma de leilões em tempo real onde usuários podem criar coleções, fazer lances competitivos e gerenciar o ciclo de vida dos lances através de fluxos de aceitação e rejeição. Construída como uma aplicação single-page moderna, apresenta paginação com scroll infinito, interações baseadas em modais e uma experiência multi-usuário alimentada por um seletor de usuários.

O projeto é construído com Next.js 16 usando App Router, React 19 e TypeScript em modo estrito. O backend usa rotas de API do Next.js seguindo convenções RESTful, apoiado por PostgreSQL através do Prisma ORM com o adaptador de driver PrismaPg. O frontend é estilizado com Tailwind CSS v4 e usa a família de fontes Geist. O desenvolvimento local é containerizado com Docker Compose para a camada de banco de dados.

A aplicação segue uma separação limpa entre rotas de API e componentes de UI. Todos os preços são armazenados como inteiros (centavos) para evitar problemas de precisão de ponto flutuante. O modelo de dados suporta soft deletes em todas as entidades via campo deletedAt, possibilitando auditoria e recuperação de dados. Um destaque arquitetural é o fluxo transacional de aceitação de lance: quando um lance é aceito, uma transação de banco de dados atualiza atomicamente o lance vencedor e auto-rejeita todos os lances pendentes concorrentes, prevenindo condições de corrida em cenários concorrentes. O client Prisma usa um padrão singleton em cache no globalThis para evitar esgotamento do pool de conexões durante hot reloads de desenvolvimento.

O projeto aplica qualidade de código rigorosa através de um pipeline automatizado. Hooks pre-commit do Husky executam ESLint, Prettier e validação de schema Prisma antes de cada commit. Os commits seguem a especificação Conventional Commits, aplicada pelo CommitLint com um prompt interativo Commitizen. GitHub Actions executa três workflows de CI em cada pull request: linting (Prettier + ESLint + CommitLint), validação de schema Prisma e uma suíte completa de testes de integração. A estratégia de testes favorece testes de integração end-to-end que rodam contra um servidor Next.js real e um banco de dados PostgreSQL real — sem mocking — garantindo que todo o stack funcione junto como esperado.
`,
    coverImage: "/images/bidding-system.png",
    link: "https://bidding-system-tau.vercel.app/",
    github: "https://github.com/gm1357/bidding-system",
  },
  {
    id: 5,
    title: "Dynamic Impact Map",
    shortDescription:
      "O Dynamic Impact Map é uma ferramenta de visualização interativa que mostra o engajamento acumulado de um Pastor nos Estados Unidos.",
    longDescription: `
Dynamic Impact Map é uma aplicação web fullstack que visualiza o engajamento acumulado de um pastor nos Estados Unidos em um mapa interativo. Cada evento de engajamento é representado como uma linha de fluxo animada entre o estado onde a interação ocorreu e o estado de origem do pastor, criando uma visualização em tempo real orientada a dados do alcance geográfico. Os estados são sombreados com um gradiente de heatmap azul baseado na intensidade de engajamento, e ao passar o mouse sobre qualquer estado revela contagens detalhadas de engajamento.

O frontend é construído com Next.js 14, React 18 e TypeScript, usando react-simple-maps para renderização geográfica baseada em SVG e Tailwind CSS para estilização. As animações são conduzidas por requestAnimationFrame para interpolação linear suave de coordenadas ao longo dos caminhos de engajamento. A UI faz polling no backend a cada 60 segundos para capturar novos dados, exibindo um timer de contagem regressiva e animando automaticamente quaisquer engajamentos recém-chegados. O gerenciamento de estado é mantido leve com React hooks — nenhuma biblioteca externa de estado é necessária.

O backend é um servidor API Express.js em TypeScript, apoiado por um banco de dados MySQL 8.0 gerenciado pelo Prisma ORM. Segue uma arquitetura em camadas com controllers, services e módulos de rota dedicados, expondo endpoints RESTful para informações do pastor, estatísticas de engajamento (total e por estado), dados de engajamento filtrados por intervalo de tempo e geometria de mapa GeoJSON. Todo o stack é containerizado com Docker Compose para desenvolvimento local, e o projeto inclui scripts de seed e geradores de dados aleatórios para dados de demonstração realistas.

Destaques técnicos incluem limpeza adequada de intervalos e animações para prevenir vazamentos de memória, queries Prisma eficientes com projeção seletiva de campos e filtragem opcional por intervalo de datas, e uma clara separação de responsabilidades em ambos os codebases que mantém cada camada independentemente testável e manutenível.
`,
    coverImage:
      "https://github.com/gm1357/dynamic-impact-map-frontend/raw/main/screen-example.png",
    github: "https://github.com/gm1357/dynamic-impact-map-backend",
  },
];

export default projects;
