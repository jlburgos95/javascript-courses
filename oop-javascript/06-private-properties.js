//Propiedades privadas con Module pattern y Namespaces
function requiredParam(param) {
  throw new Error(param + "es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  instagram,
  facebook,
} = {}) {
  const private = {
    _name: name,
  };
  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    /* //Funciones para encapsular y no permitir el acceso a la propiedad name
    readName() {
      return private["_name"];
    },
    changeName(newName) {
      private["_name"] = newName;
    }, */
  };
  /* //Aplicando los metodos anteriores se aplican las propiedades para que no puedan ser editados ni eliminados
  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });
  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  }); */
  //Con los getters y setters ya no es necesario
  return public;
}

const juan = createStudent({
  name: "Juanito",
  email: "juanitolc@gmail.com",
});
juan.name = "Juan";
console.log(juan);
console.log(juan.name);
