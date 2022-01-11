/*Para el caso de variables esto funciona, ya que estas se guardan en la memoria STACK y lo que se guarda
es directamente el valor que le corresponde a la variable */
let a = (b = 5);
b = 3;
console.log({ a, b });

/* Para el caso de los objetos esto no aplica, ya que en la variable se almacena una referencia al lugar
en la memoria HEAP que se guardan los atributos del objeto, por lo tanto al decalarar un nuevo objeto 
igual a otro, al modificar alguno de los dos, esto tendrá efecto en el otro. Por eso mismo también se pueden
declarar los objetos con "const" ya que a pesar de que sus atributos cambien, la referencia al espacio de memoria no */
const ana = {
  name: "Ana",
  age: 25,
};
const nat = ana;
nat.name = "Natalia";
nat.age = 20;
nat["mail"] = "hola@gmail.com";
console.log({ ana, nat });

/*Una manera de modificar esto es asignando cada valor con un for */
const obj1 = {
  a: "a",
  b: "b",
  c: {
    hola: "hola",
  },
  editA(newA) {
    this.a = newA;
  },
};

const obj2 = {};
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

console.log("Objetos iguales: ");
console.log({ obj1, obj2 });

obj2.a = "aa";
obj2.b = "b1";
obj2.c.hola = "holaaaaaa";

console.log("Después de modificar el obj2: ");
console.log({ obj1, obj2 });

/*Sin embargo, si existe un objeto dentro de un objeto e intentamos hacer esto, tendremos el mismo problema.
Lo realizado en el ciclo for anterior es equivalente a lo siguiente, que nos dando este problema */

const obj3 = Object.assign({}, obj1);
obj1.c.hola = "hello";
console.log("Asignando con Object.assign:");
console.log({ obj1, obj3 });

/*Para solucionarlo usamos Object.create */
const obj4 = Object.create(obj1);
obj1.a = "Aaaaa";
obj1.c.hola = "Helloooooo";
console.log("Asignando con Object.create:");
console.log({ obj1, obj4 });
/*Pero esto también tiene un error consigo, ya que las propiedades heredadas en __proto__ siguen haciendo
referencia al primer objeto, entonces cada propiedad que se quiera editar será considarada como una nueva
propiedad en este segundo objeto y no tocará a la que hace referencia (ejecutar en el navegador para observarlo) */

/*Usando JSON.parse y JSON.stringify podemos lograr hacer esto correctamente. Stringify convierte el objeto en
strings*/
const stringObj = JSON.stringify(obj1);
const obj5 = JSON.parse(stringObj);

console.log(stringObj);
console.log(obj5);
obj1.a = "AAAAAAA";
obj1.c.hola = "HELLLOOOOO";
obj5.b = "BBBBB";
console.log("Utilizando los metodos JSON:");
console.log({ obj1, obj5 });

/*Pero surge otro problema, cuando implementamos métodos dentro del objeto estos no se copian. Es necesario usar
otra función para resolver esto, partimos entonces del concepto de recursividad para aplicar deep copy*/
