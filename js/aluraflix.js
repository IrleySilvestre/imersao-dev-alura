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
        imagem: 'https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_UX182_CR0,0,182,268_AL_.jpg',
        nome: 'The Falcon and the Winter Soldier',
        link: 'https://www.imdb.com/title/tt9208876/?ref_=hm_tpks_tt_i_3_pd_tp1_cp'
    },
    {
        imagem: 'https://m.media-amazon.com/images/M/MV5BM2NjODViMWMtNGRhZi00NGM0LWI3ZDMtYjE0ZmQ5NGQ0NjgyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        nome: 'The Mighty Ducks: Game Changers',
        link: 'https://www.imdb.com/title/tt7939768/?ref_=hm_tpks_tt_i_15_pd_tp1_cp'
    },
    {
        imagem: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        nome: 'Batman v Superman: Dawn of Justice (2016)',
        link: 'https://www.imdb.com/title/tt2975590/?ref_=hm_tpks_tt_i_4_pd_tp1_cp'
    },
    {
        imagem: 'https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        nome: 'Wonder Woman (2017)',
        link: 'https://www.imdb.com/title/tt0451279/?ref_=hm_tpks_tt_i_5_pd_tp1_cp'
    },
    {
        imagem: 'https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg',
        nome: 'The Queen\'s Gambit',
        link: 'https://www.imdb.com/title/tt10048342/?ref_=hm_fanfav_tt_i_15_pd_fp1'
    },

]

listarFilmesNaTela(listaFilmes)

function listarFilmesNaTela(filmes) {
    filmes.forEach(filme => {
        var divFilmes = document.querySelector('[data-filmes]')
        const divElementos = `
            <div class  = "card-filmes">
                <img class="filmes-wrapper-img"  src="${filme.imagem}" alt="_" >
                <h3 class="filmes-wrapper-nome">${filme.nome}</h3>
                <a class="filmes-wrapper-link"  target="_blank" href="${filme.link}"> Sobre o Filme</a>
            </div>`

        divFilmes.innerHTML = divFilmes.innerHTML + divElementos
    })

}

