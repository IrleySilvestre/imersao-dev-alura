const input = document.querySelector('[data-vlr]')
input.addEventListener('blur', (evento) =>{
    SimpleMaskMoney.setMask(input, {
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'

    })
})

const formConversao = document.querySelector('[data-form="form-conversao"]')


formConversao.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    const valorEmReal = evento.target.querySelector("[data-tipo=valor]").value

    const somenteNumero = (valorEmReal.replace('R$',""))
    const semPonto = somenteNumero.replace('.',"")
    const numero = parseFloat(semPonto.replace(',', "."))
    converteMoedas(numero)
})

function converteMoedas(valor){
    const url = fetch( 'https://economia.awesomeapi.com.br/json/all')
        .then( moedas => moedas.json())
        .then( moedas => {
              pesquisaValores(moedas, valor)
        })
}

function pesquisaValores(moedas, valor){
    const dataCotacao = document.querySelector('[data-tipo="dataCotacao"]')
    const tabelaMoedas = document.querySelector('[data-tipo="container-cotacao"]')
    const conteudoTabelaMoedas = document.createElement('dl')
    const listTabela = []

    const siglaMoeda = (Object.values(moedas))

    Object.values(siglaMoeda).forEach((item)=>{
        // console.log(`${item.name}-${item.code} Compra: ${item.bid} Venda: ${item.ask} Variacao Maxima:${item.high} Minima:${item.low}`)

            dataCotacao.textContent = `Horario da Contação:  ${moment(item.create_date).format('DD/MM/YYYY HH:mm:ss')}`
            dataCotacao.innerHTML
            listTabela.push(
                `
                    <dt class="titulo-cotacao">${item.name} - ${item.code} <span class="valor-convertido">${(valor * item.bid).toFixed(2)}</span> </dt>
                    <dt>
                         <table class="table-valores" >
                            <tbody>
                                <tr class="cabecalho-tabela">
                                    <th class="linha-tabela">Venda</th>
                                    <th class="linha-tabela">Compra</th>
                                   <th class="linha-tabela">Maximo - Dia</th>
                                    <th class="linha-tabela">Minimo - Dia</th>
                                </tr>
                                <tr class="cabecalho-tabela">
                                    <td class="linha-tabela">${parseFloat(item.ask).toFixed(2)}</td>
                                    <td class="linha-tabela">${parseFloat(item.bid).toFixed(2)}</td>
                                    <td class="linha-tabela">${parseFloat(item.high).toFixed(2)}</td>
                                    <td class="linha-tabela">${parseFloat(item.low).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </dt>
                `
            )

    })
    conteudoTabelaMoedas.innerHTML=listTabela
    tabelaMoedas.appendChild(conteudoTabelaMoedas)

}

