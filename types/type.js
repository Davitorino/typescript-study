"use strict";
// string
let nome = 'davi';
// nome = 28;
console.log(nome);
// numbers
let idade = 27;
idade = 27.5;
console.log(idade);
// booleans
let boolean = false;
// boolean = 2;
console.log(boolean);
// explicit types
let anyType;
anyType = 27;
console.log(typeof anyType);
// anyType = 'anyType is 27';
// array
let hobbies = ['cook', 'practice sports'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);
// tuplas
let adress = ['Main Street', 100, ''];
console.log(adress);
adress = ['New Road', 200, 'house'];
console.log(adress);
// enums
var Color;
(function (Color) {
    Color["Blue"] = "Azul";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Yellow"] = 11] = "Yellow";
    Color[Color["Orange"] = 12] = "Orange";
    Color[Color["Grey"] = 10] = "Grey";
    Color[Color["Red"] = 11] = "Red";
})(Color || (Color = {}));
const myColor = Color.Green;
console.log(myColor);
console.log(Color.Blue);
console.log(Color.Yellow, Color.Orange);
console.log(Color.Green, Color.Grey);
// any
let car = 'BMW';
car = { brand: 'BMW', year: 2019 };
console.log(car);
// functions
function returnMyName() {
    return nome;
}
console.log(returnMyName());
function sayHi() {
    console.log('Hi!');
}
sayHi();
function multiply(numA, numB) {
    return numA * numB;
}
console.log(multiply(2, 4));
// type function
let calc;
calc = multiply;
console.log(calc(4, 8));
// objects
let user = {
    name: 'Joao',
    age: 20,
};
const employee = {
    supervisors: ['Adam', 'Roger'],
    point: (time) => {
        if (time > 8)
            return 'Akward';
        return 'Default';
    }
};
const employee2 = {
    supervisors: ['Adam', 'Roger'],
    point: (time) => {
        if (time > 8)
            return 'Akward';
        return 'Default';
    }
};
console.log(employee.supervisors);
console.log(employee.point(8));
console.log(employee.point(9));
// union types
let score = 10;
console.log(`My score is ${score}`);
score = '20';
console.log(`My score is ${score}`);
// never
function fail(msg) {
    // while(true) {}
    throw new Error(msg);
}
// fail('error message');
// null
let height = 80;
// height = null;
let optionalHeight = 90;
optionalHeight = null;
console.log(height, optionalHeight);
const person = {
    name: 'someone',
    tel1: 11,
    tel2: null
};
console.log(person);
let canBeNull = null; // type any
canBeNull = 12;
canBeNull = 'test';
console.log(canBeNull);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=type.js.map