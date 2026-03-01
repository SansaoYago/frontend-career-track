# Seu Primeiro Desafio: Seção "Blog" para a Landing Page da Clínica Vida Nova

## O Pedido do Cliente:

"Precisamos de uma seção na página inicial que mostre os últimos artigos do nosso blog. O objetivo é mostrar que a clínica tem autoridade no assunto e melhorar nossa posição no Google quando alguém pesquisar sobre os temas. Tem que ser simples, mas passar confiança. Temos 3 posts prontos para mostrar."

# Lista de Requisitos Técnicos (É a sua check-list):

## Estrutura HTML Semântica: Nada de div para tudo. Use as tags corretas para essa seção (<section>, <article>, <header>, etc.).

## Hierarquia de Títulos: A seção tem um título principal ("Últimas do Blog" ou algo do tipo). Cada artigo preview deve ter seu título. A hierarquia (<h1>, <h2>, <h3>) precisa fazer sentido.

## CSS com Grid ou Flex: A exibição dos 3 posts deve ser em colunas (um do lado do outro) no desktop e empilhar no mobile. É responsivo, ok?

## Otimização SEO (O mais importante):

## Cada título de post deve ser um link para a página do artigo completo (use href="#" por enquanto, mas a semântica do link deve existir).

## Adicione um atributo title descritivo nesses links.

## Inclua um texto alternativo (alt) relevante para as imagens dos posts.

## Pense na meta descrição: mesmo não sendo visível na página, crie um parágrafo de resumo para cada post que seria um bom resumo para o Google.

## Performance: Nada de código CSS poluído ou sem necessidade.

Entrega:

Um arquivo index.html e um style.css (ou o que preferir).

Suba no seu GitHub e me mande o link.

Prazo: Amanhã, 14h. Quero ver o link no privado.

Se tiver dúvida, volta aqui e pergunta. Mas pergunta direito: "Chefe, estou em dúvida sobre a melhor tag para o resumo do post, posso usar <p> ou tem uma mais semântica?". Não vem com "não consigo".

Bora trabalhar. O relógio tá rodando.

# RELATÓRIO

## MELHORAR COM A VERSÃO 2.0

Cristian, vi o código. Você entregou algo funcionando, o que é ótimo. Mas funcionar não é suficiente. Seu papel como estagiário não é só fazer funcionar, é fazer certo. E aqui você pulou etapas.

A boa notícia: Seu CSS está organizado, usou variáveis, responsivo com mobile-first (mesmo tendo um arquivo separado), e o código está limpo. Isso mostra evolução.

A má notícia: Você ignorou completamente o principal da tarefa: SEMÂNTICA e SEO.

Vamos ao code review:

1. Estrutura HTML e Semântica (NOTA: 4/10)
Você fez escolhas questionáveis que prejudicam a acessibilidade e o ranqueamento:

<header> dentro de uma <div class="container">?
O <header> principal da página deveria vir antes ou conter o <h1> da página. Aqui você colocou um <h2> dentro dele. Qual é o título principal da página? Não tem <h1>. Isso é erro grave de hierarquia.

Uso da tag <details> para o conteúdo dos posts?
Por que esconder o resumo atrás de um clique? O cliente pediu uma seção de blog com previews dos posts. O resumo TEM que estar visível. O usuário não deveria precisar clicar em "Saiba mais" só pra ler um resumo de 3 linhas.
Além disso, você colocou os LINKS dentro do <details>. Ou seja, o link para o post só aparece DEPOIS do clique. Isso é péssimo para SEO e para experiência do usuário.

<footer> posicionado com fixed?
Você usou position: fixed no rodapé, mas no CSS mobile mudou pra relative. Isso mostra que você mesmo percebeu que não funciona direito. Rodapé fixo tapa conteúdo e não faz sentido numa seção de blog.

2. SEO (NOTA: 2/10)
Você falhou nos pontos críticos que eu exigi:

Atributo title nos links: Você até colocou, mas estão dentro do <details>, então os links ficam escondidos. Robôs do Google podem não indexar conteúdo escondido adequadamente.

Alt das imagens: Tem, mas são genéricos ("Imagem Laboratório...", "Imagem Espaço Saúde"). Isso não ajuda em nada. O alt precisa descrever a imagem de forma específica para acessibilidade.

Meta description: Eu pedi explicitamente para pensar na meta description, mesmo não visível. Cadê a <meta name="description"> no <head>? Não tem.

Links: Estão com href="#". Você poderia ter usado algo como href="/blog/pesquisas-avancadas" só pra simular uma URL real e pensar na estrutura.

3. CSS e Experiência do Usuário
height: 90vh no container com overflow-y: scroll? Por que limitar a altura? Deixe o conteúdo crescer naturalmente. Isso corta informação e força scroll desnecessário.

O summary com ✚ é criativo, mas não intuitivo. O usuário não sabe que aquilo expande conteúdo.

As imagens com aspect-ratio: 1/1 ficaram quadradas, distorcendo o layout em telas maiores.

Diagnóstico Final
Você tentou ser criativo com o <details>, mas criatividade sem base quebra o projeto. Você entregou um componente interativo, mas o cliente pediu uma seção de blog SIMPLES com previews visíveis. Você complicou onde não precisava e esqueceu o básico.

Status: REPROVADO. Precisa refazer.

O que eu quero na versão 2.0:
Estrutura correta:

Um <h1> para o título principal da página ("Blog da Clínica Vida Nova" ou similar).

Cada post dentro de <article> com <h2> para o título do post.

Resumo do post em <p> visível (nada de esconder).

Link "Leia mais" ou similar APÓS o resumo, com href semântico (pode ser # ainda, mas pense na URL real).

SEO:

Adicione <meta name="description"> no <head>.

Atributos title nos links com texto descritivo.

alt das imagens específico (ex: "Médico analisando exame em laboratório da Clínica Vida Nova").

Links clicáveis e visíveis para os robôs.

CSS:

Remova height fixa do container. Deixe o conteúdo determinar a altura.

Ajuste o grid para ser responsivo com flex-wrap ou grid.

Corrija o posicionamento do footer (não use fixed).

Acessibilidade:

Garanta contraste de cores (seu laranja (#DB6623) no fundo verde claro pode não ter contraste suficiente).

Teste com leitores de tela (mentalmente).

Pesquise sobre:
"Hierarquia de headings HTML5"

"Quando usar a tag <details>"

"Boas práticas de acessibilidade em links"

"Meta descriptions para SEO"

# RESUMO DO MEU TRABALHO NA VERSÃO 2.0

CODE REVIEW - Versão 2.0
1. HTML Semântico e Estrutura (NOTA: 9/10)
Acertos:

✅ <h1> presente e bem posicionado no <header>

✅ <main> envolvendo o conteúdo principal (antes não tinha)

✅ Cada post em <article> com <h2> próprio

✅ Links semânticos com href simulando URLs reais (/pages-blog/...)

✅ Uso correto de <picture> para imagens responsivas (isso é profissional)

Observação: Você usou target="_self" nos links. É o comportamento padrão, então é opcional. Não é erro, mas é redundância. Deixar sem já funciona.

2. SEO e Acessibilidade (NOTA: 9.5/10)
Acertos:

✅ Meta description bem construída no <head>

✅ Atributos title em todos os links (e com textos diferentes e descritivos)

✅ alt das imagens específicos e contextuais (mudou completamente dos genéricos anteriores)

✅ Links visíveis e clicáveis (nada escondido em <details>)

✅ URLs amigáveis (pesquisas-avancadas.html em vez de post?id=1)

Ponto extra: A meta description está otimizada para SEO e chama atenção do usuário. Bom trabalho.

3. CSS e Arquitetura (NOTA: 8.5/10)
Acertos:

✅ Mobile-first com breakpoints conscientes (900px e 1300px)

✅ Grid no body com grid-template-columns: auto 93vw auto - criativo e funcional

✅ Uso de max-width: 80ch nos parágrafos (ótima prática de legibilidade)

✅ Variáveis CSS bem utilizadas

✅ Transições suaves nos links

Pontos de atenção:

Três arquivos CSS separados: Você criou mobile-first.css, medium-screen.css e LargeScreen.css. Isso funciona, mas pode dificultar manutenção. O padrão de mercado é um arquivo principal com media queries dentro, a menos que o projeto seja muito grande. Mas como exercício, está correto.

grid-column-start: 2 no container: Funciona, mas se você adicionar mais colunas no futuro, pode quebrar. Uma alternativa mais robusta seria:

css
.container {
  grid-column: 2 / 3; /* mais semântico */
}
Espaçamento no mobile: O gap: 5px no .content deixa os cards muito colados. Em mobile, dedos precisam de área de toque. Um gap maior (15px ou 20px) melhoraria a experiência.

4. Decisões Técnicas (O que você explicou antes)
Sua decisão de manter flex-direction: column até 900px:

Você implementou exatamente como explicou: no mobile-first (padrão coluna) e no breakpoint 900px mudou para row

Testei mentalmente e faz sentido: em tablets de até 900px, 3 colunas realmente ficariam apertadas. Sua escolha foi intencional e testada, não preguiçosa. Aprovado.

Sobre o grid no body:

Implementou conforme explicou: body como grid, container ocupando a coluna central

Funciona perfeitamente e mantém o código limpo

No LargeScreen.css você fixou a largura em 1200px, o que é uma boa prática para telas muito largas

5. Experiência do Usuário
Textos justificados: Você usou text-align: justify. Isso pode criar "rios" (espaços estranhos entre palavras) em telas estreitas. No mobile, talvez left fosse melhor, mas não é erro grave.

Contraste de cores: O laranja (#E99920) no fundo verde claro tem contraste aceitável, mas poderia ser testado. Recomendo verificar com ferramentas de acessibilidade.

Links com emoji 🔗: Criativo e intuitivo.

Diagnóstico Final
Cristian, você entregou exatamente o que foi pedido na tarefa, com bônus de qualidade:

Estrutura semântica correta ✅

SEO aplicado em todos os níveis ✅

Responsividade pensada e testada ✅

Código limpo e organizado ✅

Documentou suas decisões (o que é comportamento de pleno) ✅

A primeira versão foi reprovada por falta de atenção ao básico. Esta versão mostra que você entendeu o erro, estudou e aplicou a correção com qualidade. Isso é o que separa estagiário de profissional.

PROMOÇÃO
Cristian, você está promovido a Desenvolvedor Front-end Júnior.

Justificativa:

Entregou no prazo mesmo com imprevisto (comunicou proativamente)

Recebeu críticas, não rebateu, e entregou uma versão superior

Tomou decisões técnicas conscientes e soube explicá-las

Código pronto para ir para produção (com pequenos ajustes)

Você não é mais estagiário. A partir de agora, o nível de exigência sobe. Vou começar a te tratar como Junior, com responsabilidades de Junior.

Últimas orientações antes da próxima tarefa:
Ajuste fino: Se quiser deixar o código redondo, aumenta o gap no mobile e considera unificar os CSS em um arquivo só com media queries.

Commit no GitHub: Faz um commit com a mensagem "feat: entrega final do blog pós code review" e me manda o link atualizado.

Descança: Segunda-feira tem nova tarefa, agora de Junior.

Parabéns, Cristian. Você mereceu essa.