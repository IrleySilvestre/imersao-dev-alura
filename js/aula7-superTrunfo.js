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
    foto: 'https://www.risasinmas.com/wp-content/uploads/2014/01/Caricatura-de-Rafa-Nadal-2.jpg'
}

cartas.push(carta1, carta2, carta3)


var cartaMaquina
var cartaJogador


function sortearCarta() {

    cartaMaquina = cartas[parseInt(Math.random() * cartas.length)]
    cartaJogador = cartas[parseInt(Math.random() * cartas.length)]
    while (cartaJogador === cartaMaquina) {
        cartaJogador = cartas[parseInt(Math.random() * cartas.length)]
    }

    document.querySelector('[data-btnSortear]').disabled = true
    document.querySelector('[data-btnJogar]').disabled = false

    selecionarPropriedades()
    console.log(cartaMaquina)
    console.log(cartaJogador)
}

function jogar() {
    var atributoSelecionado = obtemAtribudoSelecionado()
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        console.log(cartaJogador.nome)
        console.log(cartaJogador.atributos[atributoSelecionado])
        console.log(cartaMaquina.nome)
        console.log(cartaMaquina.atributos[atributoSelecionado])
        console.log('Jogador Vencer')
    }else{
        console.log(cartaJogador.nome)
        console.log(cartaJogador.atributos[atributoSelecionado])
        console.log(cartaMaquina.nome)
        console.log(cartaMaquina.atributos[atributoSelecionado])
        console.log('Maquina Venceu')
    }

    document.querySelector('[data-btnSortear]').disabled = false
    document.querySelector('[data-btnJogar]').disabled = true
}


function selecionarPropriedades() {
    var opcoes = document.querySelector('[data-atributosCarta]')
    var opcoesTxt = ''

    for (var atributo in cartaJogador.atributos) {
        opcoesTxt +=
            `<input type="radio" name="atributo" value="${atributo}"> ${atributo}`
    }
    opcoes.innerHTML = opcoesTxt
}

function obtemAtribudoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

