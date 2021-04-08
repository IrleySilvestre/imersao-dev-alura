var cartas = []

var carta1 = {
    nome: "Harry Potter",
    atributos: {
        inteligencia: 75,
        coragem: 95,
        magia: 80
    },
    foto: 'https://i.pinimg.com/236x/dd/0c/d7/dd0cd716a704887cb6bd7dc4e8b512ca--harry-potter-world-laser.jpg'
}

var carta2 = {
    nome: "Ron Weasley",
    atributos: {
        inteligencia: 65,
        coragem: 80,
        magia: 65
    },
    foto: 'http://3.bp.blogspot.com/-H9OX168nDls/TmgRnEFdqnI/AAAAAAAAALo/gXP6MEwRYBY/s1600/rony.jpg'
}

var carta3 = {
    nome: "Ginny Weasley",
    atributos: {
        inteligencia: 80,
        coragem: 70,
        magia: 90
    },
    foto: 'https://i.pinimg.com/originals/b1/6f/77/b16f77135f494ef36e651c8e4167bd20.jpg'
}

var carta4 = {
    nome: "Severus Snape",
    atributos: {
        inteligencia: 70,
        coragem: 80,
        magia: 75
    },
    foto: 'https://www.magazine-hd.com/apps/wp/wp-content/uploads/2016/11/harry-potter-top-snape.jpg'
}

var carta5 = {
    nome: "Hermione Granger",
    atributos: {
        inteligencia: 90,
        coragem: 80,
        magia: 75
    },
    foto: 'https://static.wikia.nocookie.net/harrypotter/images/d/d5/Hermione_Scarf_TDH.png'
}

var carta6 = {
    nome: "Luna Lovegood",
    atributos: {
        inteligencia: 60,
        coragem: 75,
        magia: 70
    },
    foto: 'https://i.pinimg.com/originals/1b/90/3f/1b903f4eaf31a94850d8684133722d79.jpg'
}

var carta7 = {
    nome: "Alvos Dumbledore",
    atributos: {
        inteligencia: 90,
        coragem: 80,
        magia: 100
    },
    foto: 'https://i.pinimg.com/originals/cf/b1/22/cfb12295e252a4e49f9cbc2d2303d6a4.jpg'
}

var carta8 = {

    nome: "Draco Malfoy",
    atributos: {
        inteligencia: 55,
        coragem: 60,
        magia: 70
    },
    foto: 'https://i.pinimg.com/originals/03/3d/4d/033d4d829a721ba5093d8b496c774d32.jpg'
}


var carta9 = {
    nome: "Gellet Grindewald",
    atributos: {
        inteligencia: 90,
        coragem: 90,
        magia: 95
    },
    foto: 'https://i.pinimg.com/736x/40/90/93/409093e8f8118e554f81ea37ddc47766.jpg'
}

var carta10 = {
    nome: "Lord Voldemort",
    atributos: {
        inteligencia: 70,
        coragem: 95,
        magia: 90
    },
    foto: 'https://i.pinimg.com/originals/31/71/46/3171460f7c6cd8cdca19aacae0e0ca46.jpg'
}

var carta11 = {
    nome: "Minerva McGonagall",
    atributos: {
        inteligencia: 85,
        coragem: 75,
        magia: 85
    },
    foto: 'https://i.pinimg.com/originals/31/60/f0/3160f0669cbdf7b07cdce1bfc8e87e5d.jpg'
}

var carta12 = {
    nome: "Hubeus Hagrid",
    atributos: {
        inteligencia: 75,
        coragem: 85,
        magia: 10
    },
    foto: 'https://pm1.narvii.com/6360/567a2053de25d31d513c2e356366c91efb5a96c7_hq.jpg'
}

var carta13 = {
    nome: "Neville Longbottom",
    atributos: {
        inteligencia: 60,
        coragem: 65,
        magia: 60
    },
    foto: 'http://pm1.narvii.com/6433/0a49f6bd15103354ca6b1d568e57a6b3cdcb5344_00.jpg'
}

var carta14 = {
    nome: "Bellatrix Lestrange",
    atributos: {
        inteligencia: 50,
        coragem: 90,
        magia: 70
    },
    foto: 'https://i.pinimg.com/736x/88/b8/40/88b8405cf8e86b3d049354dc56140d2e.jpg'
}

var carta15 = {
    nome: "Fred Weasley",
    atributos: {
        inteligencia: 85,
        coragem: 90,
        magia: 80
    },
    foto: 'https://pbs.twimg.com/profile_images/1367298406687858688/hkSfXiGH.jpg'
}

var carta16 = {
    nome: "George Weasley",
    atributos: {
        inteligencia: 85,
        coragem: 90,
        magia: 80
    },
    foto: 'https://64.media.tumblr.com/a4ae60aeb5bd172282f9edb4f0bb24ed/c319f8bc3c1f50a7-50/s400x600/709c2d09b18a4673eef1d962a1a0a2a2a874fa53.png'
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
                            <label for="magia"> Magia: ${carta.atributos.coragem}</label>
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

