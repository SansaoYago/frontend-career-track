const main = document.querySelector("main")

fetch('data/posts.json')
    .then(res => res.json())
    .then(dados =>
        dados.forEach(post => {
            const artigo = document.createElement('article')

            artigo.innerHTML = `
                <h2>${post.titulo}</h2>
                <img src="img/${post.imagem}" alt="${post.alt}" class="img">
                <p>${post.descricao}</p>
                <a href="" target="_self" aria-label="Leia a notícia completa sobre ${post.link}">Leia mais</a>
            `

            main.appendChild(artigo)
        })
    )