const formConversao = document.querySelector('[data-form="form-conversao"]')


formConversao.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    const valorEmReal = evento.target.querySelector("[data-tipo=valor]").value
    converteMoedas(valorEmReal)
})

function converteMoedas(valor){
    const url = fetch( 'https://economia.awesomeapi.com.br/json/all')
        .then( moedas => moedas.json())
        .then( moedas => {
              pesquisaValores(moedas, valor)
        })
}

function pesquisaValores(moedas, valor){
    const vlrConvertido = document.querySelector('[data-tipo="valorConvertido"]')
    const dataCotacao = document.querySelector('[data-tipo="dataCotacao"]')
    const siglaMoeda = (Object.values(moedas))

    Object.values(siglaMoeda).forEach((item)=>{
        // console.log(`${item.name}-${item.code} Compra: ${item.bid} Venda: ${item.ask} Variacao Maxima:${item.high} Minima:${item.low}`)
        if (item.code === 'USD'){
            dataCotacao.textContent = item.create_date
            dataCotacao.innerHTML

            vlrConvertido.textContent = valor * item.bid
            vlrConvertido.innerHTML


        }
    })
}

