var listAtletas = []
var atleta1 = {
    nome: "Roger Federer",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    foto: 'https://i.pinimg.com/originals/7c/46/fc/7c46fcbe014c5bf53b63f6b5a6b21a64.jpg'
}

var atleta2 = {
    nome: "Rafael Nadal",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    foto: 'https://www.risasinmas.com/wp-content/uploads/2014/01/Caricatura-de-Rafa-Nadal-2.jpg'
}
addAtleta()

listAtletas.push(atleta1, atleta2)

function addAtleta (){
    const atleta  = new Object()
    atleta.nome = 'Djoko'
    atleta.vitorias = 0
    atleta.empates = 0
    atleta.derrotas = 0
    atleta.pontos = 0
    atleta.foto = 'https://i.pinimg.com/originals/9c/06/d0/9c06d003094b961667482ec883300058.jpg'
    listAtletas.push(atleta)
    return listAtletas
}

// const atleta3 = addAtleta()


exibirJogadores(listAtletas)

function exibirJogadores(atletas) {
    var tr = ''

    for (let i = 0; i < atletas.length; i++) {
        tr = tr + `
            <tr >
                <td align="middle" class="table-classificacao-th-tr-td"><img class="img-tabela"
                                                                             src=${atletas[i].foto}></td>
                <td class="table-classificacao-th-tr-td">${atletas[i].nome}</td>
                <td class="table-classificacao-th-tr-td">${atletas[i].vitorias}</td>
                <td class="table-classificacao-th-tr-td">${atletas[i].empates}</td>
                <td class="table-classificacao-th-tr-td">${atletas[i].derrotas}
                <td class="table-classificacao-th-tr-td">${atletas[i].pontos}
                <td class="table-classificacao-th-tr-td">
                    <button class="btn-tabelas" onClick="addVitoria(${i})">Vitória</button>
                </td>
                <td class="table-classificacao-th-tr-td">
                    <button class="btn-tabelas" onClick="addEmpate(${i})">Empate</button>
                </td>
                <td class="table-classificacao-th-tr-td">
                    <button class="btn-tabelas" onClick="addDerrota(${i})">Derrota</button>
                </td>
            </tr>
        `
    }
    var tblJogadores = document.querySelector('[data-tbljogadores]')
    tblJogadores.innerHTML = tr
}

var pontos = calculaPontos(atleta1)

function calculaPontos(atleta) {
    return atleta.vitorias * 3 + atleta.empates
}

function addVitoria(i) {
    let atleta = listAtletas[i]
    atleta.vitorias++
    atleta.pontos = calculaPontos(atleta)
    exibirJogadores(listAtletas)

}

function addEmpate(i) {
    let atleta = listAtletas[i]
    atleta.empates++
    atleta.pontos = calculaPontos(atleta)
    exibirJogadores(listAtletas)
}

function addDerrota(i) {
    let atleta = listAtletas[i]
    atleta.derrotas++
    exibirJogadores(listAtletas)
}