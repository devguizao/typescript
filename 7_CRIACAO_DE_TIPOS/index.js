// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("teste"));
console.log(showData(true));
console.log(showData([]));
console.log(showData(["teste"]));
// 2 - constraint em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Cinza" };
const otherProduct = { name: "Carro", wheels: "4", engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "Ford", wheels: 4, engine: 1.0, color: "Azul" };
const myPen = { name: "Caneta", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Guizao",
    age: 24,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
//6 - typeof type operator
const userName = "Guizao";
const userName2 = "Joao";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    hr: 5000,
    description: "Caminhao para pouca carga"
};
function showKm(value) {
    console.log(`O veículo tem a km de: ${value}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    hr: 12000
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
export {};
//# sourceMappingURL=index.js.map