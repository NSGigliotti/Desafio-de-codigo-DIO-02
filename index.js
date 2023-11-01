var read = require('readline-sync');


let win
let isWin = 1
while (isWin <= 1) {
    win = read.question("Quantidade de vitorias:")
    if (isNaN(win)) {
        console.log("Valor invalido")
    }
    if (win && !isNaN(win)) {
        isWin++
    }
}

let defeat
let isDefeat = 1
while (isDefeat <= 1) {
    defeat = read.question("Quantidade de derrotas:")

    if (isNaN(defeat)) {
        console.log("Valor invalido")
    }

    if (defeat && !isNaN(defeat)) {
        isDefeat++
    }
}
const saldoDeVitorias = win - defeat
const rank = validaRank(saldoDeVitorias)


console.log("O Herói tem de saldo de " + saldoDeVitorias + " vitorias está no nível de " + rank)

function validaRank(saldoDeVitorias) {

    if (saldoDeVitorias <= 10) {
        return "Ferro"
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
        return "Bronze"
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        return "Prata"
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        return "Ouro"
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        return "Diamante"
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
        return "Diamante"
    } else {
        return "Imortal"
    }

}
