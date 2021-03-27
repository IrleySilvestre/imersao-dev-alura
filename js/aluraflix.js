var listaFilmes = [
    {
        imagem: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        nome: 'Vingadores: Ultimato (2019)',
        link: 'https://www.imdb.com/title/tt4154796/?ref_=hm_fanfav_tt_i_4_pd_fp1'
    },
    {
        imagem: 'https://m.media-amazon.com/images/M/MV5BMWYwMWQxMmUtNjU3MS00NjIwLTllYWMtNzcxYzRkMWYyYTkwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        nome: 'Passageiro Clandestino (2021)',
        link: 'https://www.imdb.com/title/tt9203694/?ref_=vp_vi_tt_p'
    },
    {
        imagem: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        nome: 'Vingadores: Ultimato (2019)',
        link: 'https://www.imdb.com/title/tt4154796/?ref_=hm_fanfav_tt_i_4_pd_fp1'
    },
    {
        imagem: 'https://m.media-amazon.com/images/M/MV5BMWYwMWQxMmUtNjU3MS00NjIwLTllYWMtNzcxYzRkMWYyYTkwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        nome: 'Passageiro Clandestino (2021)',
        link: 'https://www.imdb.com/title/tt9203694/?ref_=vp_vi_tt_p'
    },

]

listarFilmesNaTela(listaFilmes)

function listarFilmesNaTela(filmes) {
    console.log(filmes)

    filmes.forEach(filme => {
        var divFilmes = document.querySelector('[data-filmes]')
        const divElementos = `
            <img  src="${filme.imagem}" alt="_" >
            </div>
                <h3 class="filmes-wrapper-nome">${filme.nome}</h3>
                <a class="filmes-wrapper-link"  target="_blank"
                   href="${filme.link}"> Sobre o Filme</a>`
                 .innerHTML=(divElementos)
        divFilmes.innerHTML = divFilmes.innerHTML + divElementos
    })

}

// window.onload = listarFilmesNaTela(imagem)



