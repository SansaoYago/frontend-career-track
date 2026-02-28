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