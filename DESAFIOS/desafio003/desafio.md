# Desafio Júnior #2: Gerenciador de Links Favoritos com localStorage

**Data:** 05/03/2026  
**Nível:** Júnior  
**Tema:** Formulários, localStorage, renderização dinâmica

---

## Briefing do Cliente

> "Gostei muito do blog, mas quero que meus leitores possam salvar os links mais interessantes para ler depois. Preciso de uma ferramenta simples: um campo pra colar um link, um título pra ele, e um botão de salvar. Os links salvos têm que aparecer numa lista abaixo. E o mais importante: se o usuário fechar o navegador e voltar, os links têm que continuar lá."

---

## Requisitos Técnicos

### 1. Estrutura HTML (semântica e acessível)
- Um `<form>` contendo:
  - `<label for="titulo">` associado ao input de título
  - `<input type="text" id="titulo" required>` para o nome do link
  - `<label for="url">` associado ao input de URL
  - `<input type="url" id="url" required>` para o endereço do link
  - `<button type="submit">` com o texto "Salvar link"
- Uma lista (`<ul>`) vazia que receberá os links salvos
- (Opcional) Um botão de remover ao lado de cada item da lista

### 2. Comportamento JavaScript
- Ao submeter o formulário:
  - `preventDefault()` para não recarregar a página
  - Criar objeto com: `id` (usar `Date.now()`), `titulo`, `url`
  - Recuperar array do `localStorage` (ou iniciar vazio)
  - Adicionar novo objeto ao array
  - Salvar array atualizado no `localStorage` com `JSON.stringify()`
  - Chamar função `renderizarLinks()` para atualizar a tela
- Ao carregar a página:
  - Ler dados do `localStorage` com `JSON.parse()`
  - Se houver dados, chamar `renderizarLinks()` para exibi-los
- Função `renderizarLinks()`:
  - Limpar o conteúdo da `<ul>` (ex: `lista.innerHTML = ''`)
  - Percorrer o array com `forEach`
  - Para cada link, criar `<li>` contendo:
    - Um link clicável (`<a href="url" target="_blank" rel="noopener">`) com o título
    - (Opcional) Um botão "Remover" com `aria-label`
  - Inserir cada `<li>` na `<ul>`

### 3. Funcionalidade de Remoção (recomendado)
- Cada item da lista deve ter um botão para remover
- Ao clicar:
  - Filtrar o array removendo o item com o `id` correspondente
  - Salvar novo array no `localStorage`
  - Re-renderizar a lista

### 4. Validações
- Impedir campos vazios (use `required` no HTML)
- Validar se a URL é válida (o tipo `url` já ajuda, mas pode reforçar com JS)
- (Extra) Mostrar mensagem amigável se a lista estiver vazia

### 5. SEO e Acessibilidade
- Atributos `aria-label` nos botões de remover
- Links externos com `target="_blank"` devem ter `rel="noopener"`
- Estrutura de headings: `<h1>` para o título principal, `<h2>` para "Meus links salvos"
- Meta description no `<head>` descrevendo a ferramenta

### 6. CSS
- Layout responsivo (mobile first)
- Estilo limpo, pode aproveitar a identidade visual do blog anterior
- Destaque visual para os links salvos (cards ou lista estilizada)

---

## Exemplo de Estrutura Esperada


+---------------------------------------------------+
| Gerenciador de Links Favoritos |
+---------------------------------------------------+
| Título: [] |
| URL: [] |
| [ Salvar link ] |
+---------------------------------------------------+
| Meus links salvos: |
| • 🔗 Macron anuncia armas nucleares [remover] |
| • 🔗 Três caças abatidos no Kuwait [remover] |
| • 🔗 Canadá reduz dependência dos EUA [remover] |
+---------------------------------------------------+


---

## Entrega

- Arquivos: `index.html`, `style.css`, `script.js`
- Funcionamento 100% no navegador
- Repositório público no GitHub
- Commits organizados (ex: "feat: estrutura HTML", "feat: localStorage e renderização", "feat: botão remover")

**Prazo:** Amanhã, 14h (respeitando seu horário de trabalho)

---

## Dicas (se travar)

- `localStorage` só guarda strings. Use `JSON.stringify()` para salvar arrays e `JSON.parse()` para recuperar.
- Para gerar IDs únicos: `Date.now()` ou `crypto.randomUUID()` (mais moderno)
- Lembre-se de **não usar IA para resolver a lógica**. Use para consultas pontuais de sintaxe.
- Teste no navegador: abra o DevTools > Application > Local Storage para acompanhar os dados.

---

## Critérios de Avaliação

| Critério | Peso |
|----------|------|
| Funcionalidade completa (salvar + persistir) | 40% |
| Código limpo e organizado | 20% |
| Acessibilidade e SEO aplicados | 20% |
| Decisões conscientes (ex: estrutura, validações) | 20% |

**Bônus:** +10% se implementar a remoção com confirmação ou animação suave.

---

Boa sorte! Qualquer dúvida pontual, o canal está aberto. Mas lembre-se: tente resolver sozinho primeiro. É assim que se consolida o aprendizado.