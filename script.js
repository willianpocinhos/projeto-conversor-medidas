const valueLeft = document.querySelector('#value-left')
const optionLeft = document.querySelector('#option-left')
const changeImg = document.querySelector('#change-img')
const valueRight = document.querySelector('#value-right')
const optionRight = document.querySelector('#option-right')


//REFERÊNCIAS EM CENTÍMETROS
const refMilimetro = 0.1
const refCentimetro = 1
const refMetro = 100
const refQuilometro = 100000
const refPolegada = 2.54
const refMilha = 160934
const refPe = 30.48
const refJarda = 91.44


//FAZ A CONVERSÃO DA ESQUERDA PARA A DIREITA
function convertToRight() {

    //IDENTIFICA A MEDIDA DA ESQUERDA E PASSA O VALOR REFERÊNCIA PARA A VAIRIÁVEL A BAIXO
    let refLeft = 0
    switch (optionLeft.value) {
        case 'metro':
            refLeft = refMetro
            break;
        case 'milimetro':
            refLeft = refMilimetro
            break;
        case 'centimetro':
            refLeft = refCentimetro
            break;
        case 'quilometro':
            refLeft = refQuilometro
            break;
        case 'polegada':
            refLeft = refPolegada
            break;
        case 'milha':
            refLeft = refMilha
            break;
        case 'pe':
            refLeft = refPe
            break;
        case 'jarda':
            refLeft = refJarda
            break;
    }

    //IDENTIFICA A MEDIDA DA DIREITA E PASSA O VALOR REFERÊNCIA PARA A VAIRIÁVEL A BAIXO
    let refRight = 0
    switch (optionRight.value) {
        case 'metro':
            refRight = refMetro
            break;
        case 'milimetro':
            refRight = refMilimetro
            break;
        case 'centimetro':
            refRight = refCentimetro
            break;
        case 'quilometro':
            refRight = refQuilometro
            break;
        case 'polegada':
            refRight = refPolegada
            break;
        case 'milha':
            refRight = refMilha
            break;
        case 'pe':
            refRight = refPe
            break;
        case 'jarda':
            refRight = refJarda
            break;
    }

    //VALOR * refDE / refPARA
    const result = (valueLeft.value * refLeft / refRight)

    // valueRight.value = Intl.NumberFormat({ maximumFractionDigits: 5 }).format(result)
    valueRight.value = result.toLocaleString('pt-br', { maximumFractionDigits: 5 })
}


//INVERTE AS MEDIDAS
function invertNames() {
    let aux = optionLeft.value
    optionLeft.value = optionRight.value
    optionRight.value = aux
}

//FAZ A ROTAÇÃO DAS SETAS
let rotation = 0
function spin() {
    invertNames()
    convertToRight()

    changeImg.style.transform = `rotate(${rotation + 180}deg)`
    rotation += 180
}


//IMPEDE A INSERÇÃO DO CARACTERE VÍRGULA
function block(key){
    let caracters = String.fromCharCode(key.keyCode)
    let allow = '[0-9.]'

    if(caracters.match(allow)){
        return true
    } else{
        key.preventDefault()
    }
}

valueLeft.addEventListener('keypress', block)
changeImg.addEventListener('click', spin)
valueLeft.addEventListener('keyup', convertToRight)
optionLeft.addEventListener('change', convertToRight)
optionRight.addEventListener('change', convertToRight)