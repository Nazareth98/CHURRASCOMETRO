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


    let qtdTotalCarne = carnePP(duracao) * adultos + (carne(duracao)/2 * criancas)
    console.log(qtdTotalCarne)
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}