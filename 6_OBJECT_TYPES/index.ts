// 1 - tipos de objeto para função com interface
interface Product{
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvailable) {
        console.log("O produto está disponivel")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "Tenis", price: 178.99, isAvailable: false})

// 2 - propriedade opcional em interface
interface User {
    email: string
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if(user.role) {
        console.log(`A função dele é: ${user.role}`)
    }
}

const u1:User = {email: "guizao@email.com", role: "Adm"}
const u2:User = {email: "dulio@email.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5 

// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// coords.z = "teste"

// 5 - extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const guizao: Human = {
    name: "Guizao",
    age: 24
}

const raden: SuperHuman = {
    name: "Raden",
    age: 156,
    superpowers: ["Lança-Raio", "Voar", "Teletransportar"]
}

console.log(raden)

console.log(raden.superpowers[1])

// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const zepequeno: HumanWithGun = {
    name: "Zé Pequeno",
    type: "Revolver",
    caliber: 38
}

console.log(zepequeno) 
console.log(`Esse é ${zepequeno.name}, e ele estava com um ${zepequeno.type} calibre ${zepequeno.caliber}!`)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["Maçã", "Banana", "Limão"]

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray) 

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

// number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]

console.log(myNumberArray) 

type NameAndAge = [string, number]

const anotherUser:NameAndAge = ["Guizao", 24]

console.log(anotherUser[0])

anotherUser[0] = "Dulio"

console.log(anotherUser[0])

// anotherUser[0] = 4

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2]) 