var cartas = [

    carta1 = {
        nome: "Harry Potter",
        atributos: {
            inteligencia: 75,
            coragem: 95,
            magia: 80
        },
        foto: '../img/harry-potter.jpg'
    },

    carta2 = {
        nome: "Ron Weasley",
        atributos: {
            inteligencia: 65,
            coragem: 80,
            magia: 65
        },
        foto: '../img/rony.jpg'
    },

    carta3 = {
        nome: "Ginny Weasley",
        atributos: {
            inteligencia: 80,
            coragem: 70,
            magia: 90
        },
        foto: '../img/Ginny-Weasley.jpg'
    },

    carta4 = {
        nome: "Severus Snape",
        atributos: {
            inteligencia: 70,
            coragem: 80,
            magia: 75
        },
        foto: '../img/severus-snape.jpg'
    },

    carta5 = {
        nome: "Hermione Granger",
        atributos: {
            inteligencia: 90,
            coragem: 80,
            magia: 75
        },
        foto: '../img/hermione-granger.png'
    },

    carta6 = {
        nome: "Luna Lovegood",
        atributos: {
            inteligencia: 60,
            coragem: 75,
            magia: 70
        },
        foto: '../img/Luna-Lovegood.jpg'
    },

    carta7 = {
        nome: "Alvos Dumbledore",
        atributos: {
            inteligencia: 90,
            coragem: 80,
            magia: 100
        },
        foto: '../img/alvos-dumbledore.jpg'
    },

    carta8 = {

        nome: "Draco Malfoy",
        atributos: {
            inteligencia: 55,
            coragem: 60,
            magia: 70
        },
        foto: '../img/draco-malfoy.jpg'
    },


    carta9 = {
        nome: "Gellet Grindewald",
        atributos: {
            inteligencia: 90,
            coragem: 90,
            magia: 95
        },
        foto: '../img/gellet-frindewald.jpg'
    },

    carta10 = {
        nome: "Lord Voldemort",
        atributos: {
            inteligencia: 70,
            coragem: 95,
            magia: 90
        },
        foto: '../img/lord-voldemort.jpg'
    },

    carta11 = {
        nome: "Minerva McGonagall",
        atributos: {
            inteligencia: 85,
            coragem: 75,
            magia: 85
        },
        foto: '../img/minerva-mcgonagall.jpg'
    },

    carta12 = {
        nome: "Hubeus Hagrid",
        atributos: {
            inteligencia: 75,
            coragem: 85,
            magia: 10
        },
        foto: '../img/hubeus-hagrid.jpg'
    },

    carta13 = {
        nome: "Neville Longbottom",
        atributos: {
            inteligencia: 60,
            coragem: 65,
            magia: 60
        },
        foto: '../img/neville-longbottom.jpg'
    },

    carta14 = {
        nome: "Bellatrix Lestrange",
        atributos: {
            inteligencia: 50,
            coragem: 90,
            magia: 70
        },
        foto: '../img/bellatrix-lestrange.jpg'
    },

    carta15 = {
        nome: "Fred Weasley",
        atributos: {
            inteligencia: 85,
            coragem: 90,
            magia: 80
        },
        foto: '../img/fred-weasley.jpg'
    },

    carta16 = {
        nome: "George Weasley",
        atributos: {
            inteligencia: 85,
            coragem: 90,
            magia: 80
        },
        foto: '../img/george-weasley.png'
    }
]

var cartaMaquina = []
var cartaJogador = []

var cartaSelecionadaJogador = []
var cartaSelecionadaMaquina = []
var numeroCartaMaquina = 0
var numeroCartaJogador = 0
var pontosJogador = 0
var pontosMaquina = 0


var btnSortear = document.querySelector('[data-btnSortear]')
var btnJogar = document.querySelector('[data-btnJogar]')
btnJogar.style.opacity = '0.15'

distribuirCartas()

function atualizarPlacar() {
    var divPontosJogador = document.querySelector('[data-pontuacao-jogador]')
    var divPontosMaquina = document.querySelector('[data-pontuacao-maquina]')
    var htmlPontos = ` 
                    <p>Cartas = ${cartaJogador.length}</p>
                    <p >Jogador</p>
                    <p>Pontos = ${pontosJogador}</p>
                    `

    var htmlPontuacaoMaquina = ` 
                    <p>Cartas = ${cartaMaquina.length}</p>
                    <p>Computador</p>
                    <p>Pontos = ${pontosMaquina}</p>
                    `
    divPontosJogador.innerHTML = htmlPontos
    divPontosMaquina.innerHTML = htmlPontuacaoMaquina
}


function distribuirCartas() {
    let i = 0
    while (i < cartas.length) {
        var cartaSorteada = parseInt(Math.random() * cartas.length)
        if (cartaJogador.length === cartaMaquina.length) {
            cartaJogador.push(cartas[cartaSorteada])
            cartas.splice(cartaSorteada, 1)
        } else {
            cartaMaquina.push(cartas[cartaSorteada])
            cartas.splice(cartaSorteada, 1)
        }

    }
    atualizarPlacar()
}


function sortearCarta() {
    if(btnSortear.value === 'Jogar novamente'){
        document.location.reload(true)
        // cartaJogador = []
        // cartaMaquina = []
        // pontosMaquina = 0
        // pontosJogador = 0
        // btnSortear.value = ''
        // distribuirCartas()
    }

    var divCartaMaquina = document.querySelector('[data-cartaMaquina]')
    var htmlDiv = `   
                <div data-pontuacao-maquina class="titulo-carta">
                    <p>Cartas = ${cartaMaquina.length}</p>
                    <p >Computador</p>
                    <p>Pontos = ${pontosMaquina}</p>
                </div>
                <div class="carta -jogador">
                    <img class="imagem-interrogacao" src="../img/img.png" alt="">
                    <img class="imagem-logo" src="../img/reliquias-potter.png"">
                </div>

            `
    divCartaMaquina.innerHTML = htmlDiv

    numeroCartaMaquina = parseInt(Math.random() * cartaMaquina.length)
    cartaSelecionadaMaquina = cartaMaquina[numeroCartaMaquina]

    numeroCartaJogador = parseInt(Math.random() * cartaJogador.length)
    cartaSelecionadaJogador = cartaJogador[numeroCartaJogador]


    document.querySelector('[data-btnSortear]').disabled = true
    document.querySelector('[data-btnJogar]').disabled = false
    document.querySelector('[data-resultado]').hidden = true

    btnSortear.style.opacity = '.15'
    btnJogar.style.opacity = '1.00'


    exibeCarta(cartaSelecionadaJogador, 'jogador')

}


function exibeCarta(carta, jogador) {
    if (jogador === 'jogador') {
        var divJogador = document.querySelector('[data-cartaJogador]')
        var html = `
                <div data-pontuacao-jogador class="titulo-carta">
                    <p>Cartas = ${cartaJogador.length}</p>
                    <p >Jogador</p>
                    <p>Pontos = ${pontosJogador}</p>
                </div>
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
                <div data-pontuacao-maquina class="titulo-carta">
                    <p>Cartas = ${cartaMaquina.length}</p>
                    <p >Computador</p>
                    <p>Pontos = ${pontosMaquina}</p>
                </div>
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
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.querySelector('[data-resultado]')
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaSelecionadaJogador.atributos[atributoSelecionado] > cartaSelecionadaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Jogador Venceu</p>'
        cartaMaquina.splice(numeroCartaMaquina, 1)
        pontosJogador++
        if (cartaMaquina.length === 0){
            htmlResultado = '<p class="resultado-final">Jogador Venceu - Fim de jogo</p>'
            btnSortear.value = 'Jogar novamente'
            btnSortear.innerText = 'Jogar novamente'
        }

    } else if (cartaSelecionadaJogador.atributos[atributoSelecionado] < cartaSelecionadaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Computador Venceu</p>'
        cartaJogador.splice(numeroCartaJogador, 1)
        pontosMaquina++
        if(cartaJogador.length === 0){
            htmlResultado = '<p class="resultado-final">Computador Venceu - Fim de jogo</p>'
            btnSortear.value = 'Jogar novamente'
            btnSortear.innerText = 'Jogar novamente'
        }

    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    divResultado.innerHTML = htmlResultado
    document.querySelector('[data-btnSortear]').disabled = false
    document.querySelector('[data-btnJogar]').disabled = true
    divResultado.hidden = false
    btnSortear.style.opacity = '1.00'
    btnJogar.style.opacity = '0.15'

    exibeCarta(cartaSelecionadaMaquina, '')
    atualizarPlacar()
}

