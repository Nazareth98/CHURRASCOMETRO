// carne - 400gr por pessoa + de 6horas - 650gr
// cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// refriregante/agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")


function calcular(){
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value


    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas)
    let qtdTotalCerveja = cervejaPP(duracao) * adultos
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas)


    resultado.innerHTML = `<p>${qtdTotalCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} garrafas de 2L de Refrigerante</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 1200
    } else {
        return 2000
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1000
    } else {
        return 1500
    }
}