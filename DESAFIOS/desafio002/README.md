🌍 Giro pelo Mundo - Portal de Notícias
O Giro pelo Mundo é um projeto de blog de notícias internacionais desenvolvido para consolidar conceitos avançados de HTML5 semântico, arquitetura de dados com JSON e manipulação dinâmica do DOM via JavaScript.

🚀 Tecnologias Utilizadas
HTML5: Estruturação semântica para SEO e acessibilidade.

CSS3: Estilização moderna com foco em responsividade (Flexbox/Grid).

JavaScript (ES6+): Consumo de dados via Fetch API e renderização dinâmica.

FontAwesome: Ícones vetoriais para interface.

JSON: Armazenamento estruturado de dados das notícias.

🛠️ Funcionalidades e Aprendizados
1. Manipulação Dinâmica de Dados
O projeto utiliza a Fetch API para ler um arquivo posts.json. Isso permite que o conteúdo do blog seja atualizado sem a necessidade de alterar o código HTML diretamente, simulando o comportamento de um CMS (Content Management System).

2. SEO & Semântica
URLs Amigáveis: Estrutura de pastas organizada em /pages/country/ e /pages/about-world/.

Meta Tags: Implementação de meta description e títulos otimizados para motores de busca.

Atributos de Segurança: Uso de rel="noopener" em todos os links externos (target="_blank").

3. Acessibilidade (A11y)
ARIA Labels: Links dinâmicos configurados com aria-label para garantir que leitores de tela forneçam o contexto correto aos usuários.

Texto Alternativo: Imagens renderizadas com o atributo alt vindo diretamente da base de dados.

📂 Estrutura de Pastas
Plaintext
├── css/            # Estilos do projeto
├── data/           # Arquivo posts.json (Base de dados)
├── img/            # Ativos visuais e fotos das notícias
├── js/             # Lógica de fetch e manipulação do DOM
├── pages/
│   ├── about-world/ # Conteúdo detalhado das notícias
│   └── country/     # Páginas de categorias por continente
└── index.html       # Página principal
✒️ Autor
Desenvolvido por Cristian Sansão Yago Bezerra.