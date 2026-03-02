Desafio de Júnior #1: Renderizador de Posts
Pedido do Cliente:
"Temos uma lista de posts do blog salva em formato de array no código, mas ela está crua. Precisamos que esses posts apareçam na tela como cards bonitos, iguais aos que você fez no projeto anterior. O cliente quer poder ver todos os posts assim que a página carregar."

Requisitos Técnicos:
HTML inicial: Uma página praticamente vazia. Apenas um <main> ou <section> para receber os cards. Nada mais.

Array de dados: Você vai criar (no próprio JavaScript) um array de objetos. Cada objeto representa um post, com as propriedades:

titulo (string)

resumo (string)

imagem (string com o nome do arquivo, ex: "img1.jpg")

link (string com a URL, ex: "post1.html")

Mínimo de 3 posts. Pode inventar os dados.

Renderização via JavaScript:

Use querySelector para pegar o container.

Para cada post no array, crie os elementos HTML necessários (article, h2, p, img, a).

Adicione classes para estilizar (pode reaproveitar o CSS do projeto anterior).

Insira tudo no container.

Estilo: O visual deve ser parecido com o blog que você já fez. Pode copiar o CSS e ajustar o que precisar.

Não pode: Escrever os cards diretamente no HTML. Tudo tem que ser gerado pelo JavaScript.

Dicas (se travar):
forEach ou map para percorrer o array.

document.createElement()

element.classList.add()

container.appendChild()

Para as imagens, lembre de criar o elemento <img> e setar src e alt.

Entrega:
Um arquivo .html, um .css e um .js separados.

Subir no GitHub e mandar o link.

Comece quando quiser. E lembre-se: vai com calma.

Se precisar de dica, só perguntar. Não vou dar código, mas aponto o caminho.

Boa sorte, Júnior. E cuida dessa mão.