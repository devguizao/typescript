// let - arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[1]);
var nomes = ["Guizao", "Boks"];
// 2 - outra sintaxe array
var nums = [100, 200];
nums.push(5000, 7000);
console.log(nums[2]);
//3 - any
var arr1 = [1, "teste", true, [], { nome: "Guizao" }];
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
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting("Guizao"));
//6 -  funções anonimas
setTimeout(function () {
    var sallary = 20000;
    // console.log(sallary)
}, 0);
//7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
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
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting("Guizao", "José"));
console.log(advancedGreeting("Ronald"));
//10 - union type
function showBalance(balance) {
    console.log("O saldo \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
var arr2 = [1, "teste", true];
console.log(arr2);
//11 - avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId("200");
showId(123);
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: "Guizao", age: 30 };
console.log(somePerson);
// type personType = {
// age: number
//}
//15 - literal types
var test;
test = "qual é a direção";
console.log(test);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection("left");
//showDirection("top")
//16 - non-null Assertion operators
var p = document.getElementById("some-p");
console.log(p.innerText);
//17 - bigint
var n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 10001n);
//18 - symbol
var symbolA = Symbol("a");
var symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
