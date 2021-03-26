const btnReiniciar = document.querySelector('[data-reiniciar]')
btnReiniciar.addEventListener('onclick', evento =>{
    evento.preventDefault()
    reiniciar()
})

const btnVerifica = document.querySelector('[data-btnadivinha]')

btnVerifica.addEventListener('onclick', evento =>{
    evento.preventDefault()
})


function adivinhar() {
    const mensagem = document.querySelector('[data-mensagem]')
    const btnVerifica = document.querySelector('[data-btnadivinha]')

    if(btnVerifica.innerText === 'Iniciar'){
        var tentativas = parseInt(document.querySelector('[data-chances]').textContent)
        var numeroSecreto = parseInt(Math.random() * 10)

        document.querySelector('[data-numeroSecreto]').textContent = (numeroSecreto.toString())
    }else {
        tentativas = parseInt(document.querySelector('[data-chances]').textContent)
        numeroSecreto =  parseInt(document.querySelector('[data-numeroSecreto]').textContent)

    }

    const chute = document.querySelector('[data-chute]').value

    if (numeroSecreto == chute) {
        mensagem.textContent = ('Parabéns você acertou !!!')
        document.querySelector('[data-btnadivinha]').setAttribute("disabled", "disabled")
        btnVerifica.innerText = 'Fim.'

    } else {
        if (numeroSecreto < chute) {
            mensagem.textContent = ('Dica.. O numero secreto é menor')
            tentativas = tentativas - 1;
            document.querySelector('[data-chances]').textContent = (`${tentativas.toString()}`)
            btnVerifica.innerText = 'Testar.'
        } else {
            mensagem.textContent = (('Dica.. O numero secreto é maior'))
            tentativas = tentativas - 1;
            document.querySelector('[data-chances]').textContent = (`${tentativas.toString()}`)
            btnVerifica.innerText = 'Testar.'
        }if (tentativas == 0){
            document.querySelector('[data-btnadivinha]').setAttribute("disabled", "disabled")
            mensagem.textContent = ((`Você perdeu, o numero secreto era: ${numeroSecreto}`))
            btnVerifica.innerText = 'Fim.'
        }
    }

}

function reiniciar(){
    document.querySelector('[data-btnadivinha]').removeAttribute("disabled")
    document.querySelector('[data-chute]').value = ''
    document.querySelector('[data-chances]').textContent = '3'
    document.querySelector('[data-mensagem]').textContent = ''
    document.querySelector('[data-btnadivinha]').innerText = 'Iniciar.'
}

