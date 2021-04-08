var cartas = []

var carta1 = {
    nome: "Harry Potter",
    atributos: {
        inteligencia: 75,
        coragem: 95,
        magia: 80
    },
    foto: '../img/harry-potter.jpg'
}

var carta2 = {
    nome: "Ron Weasley",
    atributos: {
        inteligencia: 65,
        coragem: 80,
        magia: 65
    },
    foto: '../img/rony.jpg'
}

var carta3 = {
    nome: "Ginny Weasley",
    atributos: {
        inteligencia: 80,
        coragem: 70,
        magia: 90
    },
    foto: '../img/Ginny-Weasley.jpg'
}

var carta4 = {
    nome: "Severus Snape",
    atributos: {
        inteligencia: 70,
        coragem: 80,
        magia: 75
    },
    foto: '../img/severus-snape.jpg'
}

var carta5 = {
    nome: "Hermione Granger",
    atributos: {
        inteligencia: 90,
        coragem: 80,
        magia: 75
    },
    foto: '../img/hermione-granger.png'
}

var carta6 = {
    nome: "Luna Lovegood",
    atributos: {
        inteligencia: 60,
        coragem: 75,
        magia: 70
    },
    foto: '../img/Luna-Lovegood.jpg'
}

var carta7 = {
    nome: "Alvos Dumbledore",
    atributos: {
        inteligencia: 90,
        coragem: 80,
        magia: 100
    },
    foto: '../img/alvos-dumbledore.jpg'
}

var carta8 = {

    nome: "Draco Malfoy",
    atributos: {
        inteligencia: 55,
        coragem: 60,
        magia: 70
    },
    foto: '../img/draco-malfoy.jpg'
}


var carta9 = {
    nome: "Gellet Grindewald",
    atributos: {
        inteligencia: 90,
        coragem: 90,
        magia: 95
    },
    foto: '../img/gellet-frindewald.jpg'
}

var carta10 = {
    nome: "Lord Voldemort",
    atributos: {
        inteligencia: 70,
        coragem: 95,
        magia: 90
    },
    foto: '../img/lord-voldemort.jpg'
}

var carta11 = {
    nome: "Minerva McGonagall",
    atributos: {
        inteligencia: 85,
        coragem: 75,
        magia: 85
    },
    foto: '../img/minerva-mcgonagall.jpg'
}

var carta12 = {
    nome: "Hubeus Hagrid",
    atributos: {
        inteligencia: 75,
        coragem: 85,
        magia: 10
    },
    foto: '../img/hubeus-hagrid.jpg'
}

var carta13 = {
    nome: "Neville Longbottom",
    atributos: {
        inteligencia: 60,
        coragem: 65,
        magia: 60
    },
    foto: '../img/neville-longbottom.jpg'
}

var carta14 = {
    nome: "Bellatrix Lestrange",
    atributos: {
        inteligencia: 50,
        coragem: 90,
        magia: 70
    },
    foto: '../img/bellatrix-lestrange.jpg'
}

var carta15 = {
    nome: "Fred Weasley",
    atributos: {
        inteligencia: 85,
        coragem: 90,
        magia: 80
    },
    foto: '../img/fred-weasley.jpg'
}

var carta16 = {
    nome: "George Weasley",
    atributos: {
        inteligencia: 85,
        coragem: 90,
        magia: 80
    },
    foto: '../img/george-weasley.png'
}


cartas.push(carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16)

var cartaMaquina
var cartaJogador
var pontosJogador = 0
var pontosMaquina = 0

var btnSortear = document.querySelector('[data-btnSortear]')
var btnJogar = document.querySelector('[data-btnJogar]')
btnJogar.style.opacity = '0.15'


function atualizarPlacar(){
    var divPlacar = document.querySelector('[data-placar]')
    var htmlPlacar = `Jogador ${pontosJogador}    / ${pontosMaquina} Computador`
    divPlacar.innerHTML = htmlPlacar
}



function sortearCarta() {
    var divCartaMaquina = document.querySelector('[data-cartaMaquina]')
    var htmlDiv = `   
        <p class="titulo-carta">Maquina</p>
        <div class="carta -jogador">
            <img class="imagem-interrogacao" src="../img/img.png" alt="">
            <img class="imagem-logo" src="../img/reliquias-potter.png"">
        </div>

        `
    divCartaMaquina.innerHTML = htmlDiv

    var numeroCartaMaquina = parseInt(Math.random() * 16)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 16)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 16)
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
                    <div class="atributos-carta">
                        <div>
                            <input data-atributo class="input-radio" type="radio" id="atributo" name="atributo"
                                   value="inteligencia">
                            <label for="inteligencia"> Inteligencia: ${carta.atributos.inteligencia} </label>
                        </div>
                        <div>
                            <input data-atributo type="radio" id="atributo" name="atributo" value="coragem">
                            <label for="coragem"> Coragem: ${carta.atributos.coragem}</label>
                        </div>
                        <div>
                            <input data-atributo type="radio" id="atributo" name="atributo" value="magia">
                            <label for="magia"> Magia: ${carta.atributos.magia}</label>
                        </div>
                    </div>
                </div>
            `
        atualizarPlacar()
    } else {
        var divJogador = document.querySelector('[data-cartaMaquina]')
        var html = `
                <p class="titulo-carta">Computador</p>
                <div class="carta -jogador">
                    <h3 class="nome-jogador jogador"> ${carta.nome} </h3>
                    <img class="carta-imagem" src="${carta.foto}"
                         alt="">
                    <div class="atributos-carta">
                            <p>Inteligencia: ${carta.atributos.inteligencia}</p>
                            <p>Coragem: ${carta.atributos.coragem}</p>
                            <p>Magia: ${carta.atributos.magia}</p>
                    </div>
                </div>
            `
        atualizarPlacar()
    }


    divJogador.innerHTML = html

}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    console.log(radioAtributo)
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.querySelector('[data-resultado]')
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Jogador Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Computador Venceu</p>'
        pontosMaquina++
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

