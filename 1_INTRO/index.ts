const firstName = "Guizao"
const anotherName = 1
const x = true

function greeting(name: string) {
    console.log ("Olá" + name)
}

greeting (firstName)
//greeting (anotherName)
//greeting (x)

// Desafio 1 - criando uma função de soma.

function soma(a: number, b: number) {
    return a + b
}

console.log(soma(5, 9))