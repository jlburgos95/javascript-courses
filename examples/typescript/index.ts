console.log('Hello TypeScript');

//============================Boolean============================
let muted: boolean = true;
muted = false;
//muted = 'hi';  no se puede

//============================Number============================
let num1: number = 5; //Especificamos el tipo de variable
let num2: number = 10;
let div = num1 / num2; //Incluso aunque no seamos explícitos se queda el tipo de variable

//============================String============================
let name1: string = 'Richard';

//============================Array============================
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Andrea', 'Roberto'];
//people.push(1); No es posible
let peopleAndNumbers: Array<string | number> = []; //Arreglo de dos tipos
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9000);

//============================Enum============================
enum Color1 {
  Red,
  Blue,
  Green,
  Yellow,
}
let favoriteColor1: Color1 = Color1.Green;
console.log(`El color favorito 1 es ${favoriteColor1}`); //Imprime el valor 2
enum Color2 {
  Red = 'Red',
  Blue = 'Blue',
  Green = 'Green',
  Yellow = 'Yellow',
}
let favoriteColor2: Color2 = Color2.Green;
console.log(`El color favorito 2 es ${favoriteColor2}`); //Imprime el valor Green

//============================Any============================
let card: any = 'Joker';
card = { type: 'Wildcard' };
card = 0;
//Es posible asignarle cualquier tipo de variable

//============================Object============================
let someObject: object = {};

//============================Functions============================
function add(a: number, b: number): number {
  //..................................^ es el valor de retorno
  return a + b;
}
const sum = add(2, 3);
console.log(sum);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName1(firstName: string, lastName?: string): string {
  //.........................................^ Permitir que el argumento sea opcional
  return `${firstName} ${lastName}`;
}
let name2 = fullName1('Oscar');
console.log(`Nombre completo 1: ${name2}`); //Será undefined

function fullName2(firstName: string, lastName: string = 'Smith'): string {
  //...................................................^ Dar un valor por defecto
  return `${firstName} ${lastName}`;
}
let name3 = fullName2('Andrew');
console.log(`Nombre completo 2: ${name3}`); //Será undefined

//============================Interfaces============================
interface Rectangle {
  width: number;
  height: number;
  color?: Color2; //Para decir que es opcional
}
let rect: Rectangle = {
  width: 5,
  height: 6,
  //color: Color2.Blue,
};
function area(r: Rectangle) {
  return r.width * r.height;
}
const areaRect = area(rect);
console.log('Area rect: ', areaRect);
//Redefinimos la funcion .toString
rect.toString = function () {
  return this.color
    ? `Un rectangulo de color ${rect.color}`
    : 'Un rectangulo sin color';
};
console.log(rect.toString());
