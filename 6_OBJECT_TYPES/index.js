function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 178.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função dele é: ${user.role}`);
    }
}
const u1 = { email: "guizao@email.com", role: "Adm" };
const u2 = { email: "dulio@email.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const guizao = {
    name: "Guizao",
    age: 24
};
const raden = {
    name: "Raden",
    age: 156,
    superpowers: ["Lança-Raio", "Voar", "Teletransportar"]
};
console.log(raden);
console.log(raden.superpowers[1]);
const zepequeno = {
    name: "Zé Pequeno",
    type: "Revolver",
    caliber: 38
};
console.log(zepequeno);
console.log(`Esse é ${zepequeno.name}, e ele estava com um ${zepequeno.type} calibre ${zepequeno.caliber}!`);
// 7 - readonly array
let myArray = ["Maçã", "Banana", "Limão"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]
console.log(myNumberArray);
const anotherUser = ["Guizao", 24];
console.log(anotherUser[0]);
anotherUser[0] = "Dulio";
console.log(anotherUser[0]);
// anotherUser[0] = 4
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
export {};
//# sourceMappingURL=index.js.map