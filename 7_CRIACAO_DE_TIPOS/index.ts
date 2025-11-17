// 1 - generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("teste"))
console.log(showData(true))
console.log(showData([]))
console.log(showData(["teste"]))

// 2 - constraint em generics
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta", cor: "Cinza"}
const otherProduct = {name: "Carro", wheels: "4", engine: 1.0}
const thirdObj = {price: 19.99, category: "Roupa"}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj))

// 3 - generics com interfaces
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car = {name: "Ford", wheels: 4, engine: 1.0, color: "Azul"}
const myPen:Pen = {name: "Caneta", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`

}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))