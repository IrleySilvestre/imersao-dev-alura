var cartas = []
var carta1 = {
    nome: "Roger Federer",
    atributos: {
        ataque: 90,
        defesa: 85,
        magia: 95
    },
    foto: 'https://i.pinimg.com/originals/7c/46/fc/7c46fcbe014c5bf53b63f6b5a6b21a64.jpg'
}

var carta2 = {
    nome: "Rafael Nadal",
    atributos: {
        ataque: 85,
        defesa: 95,
        magia: 80
    },
    foto: 'https://www.risasinmas.com/wp-content/uploads/2014/01/Caricatura-de-Rafa-Nadal-2.jpg'
}

var carta3 = {
    nome: "Novak Djoko",
    atributos: {
        ataque: 88,
        defesa: 90,
        magia: 87
    },
    foto: 'https://es.toonpool.com/user/1679/files/novak_djokovic_1395185.jpg'
}

cartas.push(carta1, carta2, carta3)

var cartaMaquina
var cartaJogador
var ponstoJogador = 0
var pontosMaquina = 0

var btnSortear = document.querySelector('[data-btnSortear]')
var btnJogar = document.querySelector('[data-btnJogar]')
btnJogar.style.opacity = '0.15'

function sortearCarta() {
    var divCartaMaquina = document.querySelector('[data-cartaMaquina]')
    var htmlDiv = `   
        <p class="titulo-carta">Maquina</p>
        <img class="imagem-interrogacao" src="../img/img.png" alt="">
        <img class="imagem-logo" src="../img/fireboll-tennis.png" alt="">

        `
    divCartaMaquina.innerHTML = htmlDiv

    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    document.querySelector('[data-btnSortear]').disabled = true
    document.querySelector('[data-btnJogar]').disabled = false
    document.querySelector('[data-resultado]').hidden = true

    btnSortear.style.opacity = '.15'
    btnJogar.style.opacity = '1.00'

    exibeCarta(cartaJogador, 'jogador')
}


function exibeCarta(carta, jogador) {
    if (jogador === 'jogador') {
        var divJogador = document.querySelector('[data-cartaJogador]')
        var html = `
                <p class="titulo-carta">Jogador</p>
                <div class="carta -jogador">
                    <h3 class="nome-jogador jogador"> ${carta.nome} </h3>
                    <img class="carta-imagem" src="${carta.foto}"
                         alt="">
                    <div class="atributos-jogador">
                        <div>
                            <input data-atributo class="input-radio" type="radio" id="atributo" name="atributo"
                                   value="defesa">
                            <label for="defesa"> Defesa: ${carta.atributos.defesa} </label>
                        </div>
                        <div>
                            <input data-atributo type="radio" id="atributo" name="atributo" value="ataque">
                            <label for="forca"> Ataque: ${carta.atributos.ataque}</label>
                        </div>
                        <div>
                            <input data-atributo type="radio" id="atributo" name="atributo" value="magia">
                            <label for="magia"> Magia: ${carta.atributos.magia}</label>
                        </div>
                    </div>
                </div>
            `
    } else {
        var divJogador = document.querySelector('[data-cartaMaquina]')
        var html = `
                <p class="titulo-carta">Computador</p>
                <div class="carta -jogador">
                    <h3 class="nome-jogador jogador"> ${carta.nome} </h3>
                    <img class="carta-imagem" src="${carta.foto}"
                         alt="">
                    <div class="atributos-maquina">
                            <p>Defesa: ${carta.atributos.defesa}</p>
                            <p>Ataque: ${carta.atributos.ataque}</p>
                            <p>Magia: ${carta.atributos.magia}</p>
                    </div>
                </div>
            `
    }


    divJogador.innerHTML = html

}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.querySelector('[data-resultado]')
    var atributoSelecionado = obtemAtributoSelecionado()
    console.log(cartaJogador.atributos[atributoSelecionado])

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Jogador Venceu</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Computador Venceu</p>'
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    divResultado.innerHTML = htmlResultado
    document.querySelector('[data-btnSortear]').disabled = false
    document.querySelector('[data-btnJogar]').disabled = true
    divResultado.hidden = false
    btnSortear.style.opacity = '1.00'
    btnJogar.style.opacity = '0.15'
    exibeCarta(cartaMaquina, '')
}

