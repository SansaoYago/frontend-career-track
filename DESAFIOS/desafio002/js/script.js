const card = document.querySelectorAll("article")
        
        fetch('data/posts.json')
            .then(res => res.json())
            .then(dados =>
                dados.forEach((post, i) => {
                    const artigo = card[i]
                    
                    artigo.querySelector('h2').textContent = post.titulo
                    artigo.querySelector('p').textContent = post.descricao

                    const img = document.createElement('img')
                    img.src = `img/${post.imagem}`
                    img.alt = post.alt
                    img.classList.add('img')
                    artigo.appendChild(img)

                    const link = document.createElement('a')
                    link.href = `pages/about-world/${post.link}`
                    link.target = "_self"

                    link.setAttribute('aria-label', `Leia a notícia completa sobre ${post.titulo}`)
                    link.textContent = `Leia mais`

                    artigo.appendChild(link)
                })
            )