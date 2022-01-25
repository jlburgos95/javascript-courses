//Métodos estáticos del prototipo Object

const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

//Object.entries(juan)[3][1]("Curso 2");
/*En teoría esto debería ejecutar el método addCourse pero al generarse un nuevo 
array a partir de juan, este ya no contiene las mismas propiedades y es un objeto 
independiente, por lo que marcar error al ser indefinido*/

//console.log(Object.getOwnPropertyDescriptors(juan)); //Nos da una descripción más específica de cada propiedad

//Hace que la propiedad no aparezca cuando se listen todas como con Object.keys, pero si con .getOwnPropertyNames
Object.defineProperty(juan, "navegador", {
  value: "Chrome",
  writable: true,
  enumerable: false,
  configurable: true,
});
//No permite la edición de la propieda al intentar de asignarle otro valor, pero si se puede eliminar con "delete"
Object.defineProperty(juan, "editor", {
  value: "VSCode",
  writable: false,
  enumerable: true,
  configurable: true,
});
//Si deja editarla pero no eliminarla
Object.defineProperty(juan, "terminal", {
  value: "WSL",
  writable: true,
  enumerable: true,
  configurable: false,
});

//Hace que todas las propuedades pasen a ser configurable:false
Object.seal(juan);
//hace que todas las propiedades pasen a ser writable: false
Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));
