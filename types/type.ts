// string
let nome: string = 'davi';
// nome = 28;
console.log(nome);

// numbers
let idade: number = 27;
idade = 27.5;
console.log(idade);

// booleans
let boolean: boolean = false;
// boolean = 2;
console.log(boolean);


// explicit types
let anyType: number;
anyType = 27;
console.log(typeof anyType)
// anyType = 'anyType is 27';

// array
let hobbies: any[] = ['cook', 'practice sports'];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);

// tuplas
let adress: [string, number, string] = ['Main Street', 100, ''];
console.log(adress);

adress = ['New Road', 200, 'house'];
console.log(adress);

// enums
enum Color {
  Blue = 'Azul',
  Green = 10,
  Yellow,
  Orange,
  Grey = 10,
  Red,
}

const myColor: Color = Color.Green;
console.log(myColor);

console.log(Color.Blue);
console.log(Color.Yellow, Color.Orange);
console.log(Color.Green, Color.Grey);

// any
let car: any = 'BMW';
car = { brand: 'BMW', year: 2019 };
console.log(car);

// functions
function returnMyName(): string {
  return nome;
}

console.log(returnMyName());

function sayHi(): void {
  console.log('Hi!')
}

sayHi();

function multiply(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiply(2, 4))

// type function

let calc: (x: number, y: number) => number;
calc = multiply;
console.log(calc(4, 8));

// objects

let user: { name: string, age: number } = {
  name: 'Joao',
  age: 20,
}

// alias

type Employee = {
  supervisors: string[],
  point: (time: number) => string
}

const employee: Employee = {
  supervisors: ['Adam', 'Roger'],
  point: (time: number): string => {
    if (time > 8) return 'Akward';
    return 'Default'; 
  }
}

const employee2: Employee = {
  supervisors: ['Adam', 'Roger'],
  point: (time: number): string => {
    if (time > 8) return 'Akward';
    return 'Default'; 
  }
}

console.log(employee.supervisors);
console.log(employee.point(8));
console.log(employee.point(9));

// union types

let score: number | string  = 10;
console.log(`My score is ${score}`);
score = '20';
console.log(`My score is ${score}`);

// never
function fail(msg: string): never {
  // while(true) {}
  throw new Error(msg);
}

// fail('error message');

// null

let height = 80;
// height = null;

let optionalHeight: number | null = 90;
optionalHeight = null;
console.log(height, optionalHeight);

type Contact = {
  name: string,
  tel1: number,
  tel2: number | null,
}

const person: Contact = {
  name: 'someone',
  tel1: 11,
  tel2: null
}

console.log(person);

let canBeNull = null; // type any
canBeNull = 12;
canBeNull = 'test';
console.log(canBeNull);

// Challenge

type Conta = {
  saldo: number,
  depositar: (valor: number) => void,
}

let contaBancaria: Conta = {
  saldo: 3456,
  depositar(valor: number): void {
    this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: Conta,
  contatos: string[],
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)