// let - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[1]);
const nomes = ["Guizao", "Boks"];
// 2 - outra sintaxe array
const nums = [100, 200];
nums.push(5000, 7000);
console.log(nums[2]);
//3 - any
const arr1 = [1, "teste", true, [], { nome: "Guizao" }];
console.log(arr1);
arr1.push([1], 2, 3);
console.log(arr1);
//4 - paramentros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 10);
//5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Guizao"));
//6 -  funções anonimas
setTimeout(function () {
    const sallary = 20000;
    // console.log(sallary)
}, 0);
//7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
//8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    if (b) {
        console.log("B: " + b);
    }
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(100, 101, 103);
showNumbers(14, 1002, 10034);
//9 - validação de propriedade opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Guizao", "José"));
console.log(advancedGreeting("Ronald"));
//10 - union type
function showBalance(balance) {
    console.log(`O saldo é R$${balance}`);
}
showBalance(100);
showBalance("500");
const arr2 = [1, "teste", true];
console.log(arr2);
//11 - avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
export {};
//# sourceMappingURL=index.js.map