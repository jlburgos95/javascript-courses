//Propiedades privadas con Module pattern y Namespaces
function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

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
    _learningPaths: learningPaths,
  };
  const public = {
    email,
    age,
    approvedCourses,
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
    get learningPaths() {
      return private["_learningPaths"];
    },
    set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn("Tu LearningPath no tiene nombre");
        return;
      }
      if (!newLP.courses) {
        console.warn("Tu LearningPath no tiene cursos");
        return;
      }
      if (!isArray(newLP.courses)) {
        console.warn("Tu LearningPath no es una lista de cursos");
        return;
      }
      private["_learningPaths"].push(newLP);
    },
  };
  return public;
}

function createLearningPath({ name = requiredParam("name"), courses = [] }) {
  const private = {
    _name: name,
    _courses: name,
  };
  const public = {
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
    get courses() {
      return private["_courses"];
    },
  };
}

const juan = createStudent({
  name: "Juanito",
  email: "juanitolc@gmail.com",
});
/*Podemos crear un nuevo Learning Path directamente y tenemos maneras de corroborar si tiene
ciertas características, sin embargo, no sabemos si el learning path es creado como una instancia
de la función fábrica de ceateLearningPaths*/
juan.learningPaths = {
  name: "Escuela de Desarrollo Web",
  courses: ["a", "b"],
};
console.log(juan.learningPaths);
