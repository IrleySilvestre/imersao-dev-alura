function calcular() {

    const vlr1 = parseFloat(document.querySelector('[data-primeiroNumero]').value)

    const vlr2 =parseFloat( document.querySelector('[data-segundoNumero]').value)

    const operacao = document.querySelector('[data-operacaoselect]').value

    if (vlr2 == 0 & operacao === '/'){
        document.querySelector('[data-resultado]').textContent = 'Error div/0'
    }else{
        const result = calcula(vlr1, vlr2, operacao).toFixed(2)
        console.log(result)
        document.querySelector('[data-resultado]').textContent = `${vlr1} ${operacao} ${vlr2} = ${result}`
    }

    function calcula(num1, num2, op) {
        document.querySelector('[data-resultado]').textContent = ''

        switch (op) {
            case '+':
                limpar()
                return num1 + num2
            case '-':
                limpar()
                return num1 - num2
            case '*':
                limpar()
                return num1 * num2
            case '/':
                limpar()
                return num1 / num2

        }

    }

    function limpar(){
        document.querySelector('[data-primeiroNumero]').value = ''
        document.querySelector('[data-segundoNumero]').value = ''
        document.querySelector('[data-operacaoselect]').value = ''
    }


}


