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

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  instagram,
  facebook,
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    _learningPaths: [],
  };
  Object.defineProperty(Student.prototype, "learningPaths", {
    get() {
      return private._learningPaths;
    },
    set(newLP) {
      if (newLP instanceof LearningPath) {
        private._learningPaths.push(newLP);
      } else {
        console.warn("Alguno de los LP no es instancia del prototipo original");
      }
    },
    //configurable: false
  });
  for (lpIndex in learningPaths) {
    this.learningPaths = learningPaths[lpIndex];
  }
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: ["Curso 1", "Curso 2"],
});
const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: ["Curso 1", "Curso 2"],
});

const juan = new Student({
  name: "Juanito",
  email: "juanitolc@gmail.com",
  learningPaths: [
    escuelaWeb,
    escuelaData,
    {
      //esta no se va a agregar por no ser instancia de LearningPath
      name: "Escuela No Instancia",
      courses: [],
    },
  ],
});
