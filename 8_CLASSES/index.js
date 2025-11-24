//1 - campos em classe
class User {
}
const guizao = new User();
console.log(guizao);
guizao.name = "Guizao";
guizao.age = 24;
//guizao.email = true
console.log(guizao);
//2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 32);
console.log(joao);
//3 - campo readyonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fuscasso Turbinas";
//fusca.wheels = 5
console.log(fusca.name);
//4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class ObjMachine extends Machine {
    constructor(name, objMachine) {
        super(name);
        this.objMachine = objMachine;
    }
}
const esteiras = new ObjMachine("Trator", "de esteiras");
console.log(trator);
console.log(esteiras);
//5 - metodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Strangger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
//6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`O caminhao do modelo ${this.model}, possui ${this.hp} cavalos de potencia!`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
//7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const guilhermeLuiz = new Person("Guilherme", "Luiz");
console.log(guilhermeLuiz.name);
console.log(guilhermeLuiz.fullName);
//8 - setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inseridos com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inseridos com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 12;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogSpot {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é: ${this.title}`;
    }
}
const myPost = new blogSpot("Hello Word");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é: ${this.title}`;
    }
}
const myPost2 = new TestingInterface("Hello Word");
console.log(myPost2.itemTitle());
//10 - override de metodos
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
    showName() {
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
//11 - public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cIntance = new C();
console.log(cIntance.x);
const dIntance = new D();
console.log(dIntance.x);
//12 - protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Este Metodo é protegido");
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
//13 - private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método Privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
// console.log(pObj.privateMethod())
pObj.showPrivateMethod();
export {};
// class TestingPrivate extends PrivateClass {
//    myMethod() {
//        this.privateMethod()
//    }
// }
//# sourceMappingURL=index.js.map