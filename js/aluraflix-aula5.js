let inputImagem = document.querySelector('[data-urlImagem]')
let divElementos = document.querySelectorAll('[data-filmes]')

function adicionarFilme(){
    urlImagem = inputImagem.value
    if (urlImagem.endsWith('.jpg')){
        listaFilme(urlImagem)
        inputImagem.value = ''
    }else {
        inputImagem.value = ''
        console.log('Falta url')
    }
}

function listaFilme(filme){
        var divFilmes = document.querySelector('[data-filmes]')
        const divElementos = `
            <div class  = "card-filmes">
                <img class="filmes-wrapper-img"  src="${filme}" alt="_" >
<!--                <h3 class="filmes-wrapper-nome"></h3>-->
<!--                <a class="filmes-wrapper-link"  target="_blank" href=""> Sobre o Filme</a>-->
            </div>`

        divFilmes.innerHTML = divFilmes.innerHTML + divElementos
}


