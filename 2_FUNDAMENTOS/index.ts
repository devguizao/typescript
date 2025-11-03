// 1 - Numbers
let y: number = 10

console.log (y)

y = 16

console.log(typeof y)

const w: number = 15.77788888

console.log(typeof w)

console.log(w)

console.log(w.toPrecision(3))

// 2 - String

const firstName: string = "Guizao"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Luiz"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - Boolean

let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

// 4 - inference e annotation

const ann: string = "Teste"

let inf = "Teste"

// ann = 1
// inf = 1

console.log("testeando 2")


// 5 - Desafio 2 

const n1: number = 10

const numToString = n1.toString()

const meuNumero: string = `${numToString}`

console.log(meuNumero)