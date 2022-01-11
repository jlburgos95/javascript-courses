//Abstracción con objetos literales y deep copy

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);
  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    const keyIsArray = isArray(subject[key]);
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (keyIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
}

const studenBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const juan = deepCopy(studenBase);
Object.seal(juan);
/*Object.defineProperty(juan, "name", {
  value: "Juanito",
  configurable: false,
});*/
Object.name = "Juan";
Object.isSealed(juan); //Nos permite saber si todas las propiedades están protegidas con "seal"
Object.isFrozen(juan); //Nos permite saber si todas las propiedades están protegidas con "freeze"

//Creación de objetos con Factory Pattern Y RORO (Recieve Object, Return Object)

function requiredParam(param) {
  throw new Error(param + "es obligatorio");
}

function createStudent({
  name = requiredParam("name"), //La función arroja un error cuando no se brinda el parámetro
  email = requiredParam("email"),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  instagram,
  facebook,
} = {}) {
  //Al igualarlo a un objeto vacío nos permite llamar la función aunque no se envíe nada
  return {
    name,
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };
}

const pedro = createStudent({
  name: "Pedrito",
  email: "pedrito@gmail.com",
  age: 22,
  twitter: "fpedro00",
});

console.log(pedro);
