// comando para executar no terminar que exibe as importações: node index.js


//1 - importacao de arquivos
import importGreet from './greet.js'

importGreet()

//2 - import de variavel

import {x} from "./variable.js"

console.log(x)

//3 - multiplas importações
import {a, b, myFunction} from "./multiple.js"

console.log(a)
console.log(b)

myFunction()

//4 - alias
import { someName as name} from "./changename.js";

console.log(name);

//5 - import all
import * as myNumbers from './numbers.js'

console.log(myNumbers)

const nX =myNumbers.n3

console.log(nX)

myNumbers.showNumbers()

//6 - importando tipos

import {Human} from './mytype.js'

class User implements Human {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

}

const joao = new User("Joao", 25)

console.log(joao)