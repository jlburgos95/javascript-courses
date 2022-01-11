/*Naturalmente Javascript no provee una manera de encapsular atributos y métodos con 
paralabras reservadas como public y private. Se utiliza una convención que consiste en
renombrar las variables con un "_" al inicio, para denotar que es privado.*/

class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});
console.log(cursoProgBasica.name); //"Curso Gratis de Programación Básica"
cursoProgBasica.name = "Curso gratis";
console.log(cursoProgBasica.name); //"Curso gratis"

//===========================Módulos de ECMAScript 6====================================

/*Para este tipo de encapsulamiento utilizando el import y export es necesario renombrar 
los archivos que vayan a utilizar estas dos funciones a .mjs y en el html especificar que 
los script son type="module" para que funcione*/

function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

export class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

//-----------------Desde otro archivo .mjs también incluido en el html---------------------//

import { PlatziClass } from "./main.mjs";

const clase67 = new PlatziClass({
  name: "JavaScript: orientado a objetos, basado en prototipos",
  videoID: "wertyuio;p87htreghtyuioouyjtrh",
});

clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

/*Se pueden utilizar los métodos sin tener un acceso directo a su función, cuando se especifica
 que un archivo javascript es .mjs cualquier función que no tenga el export quedará escondida 
 y es necesario utilizar el import para usarla en otro lugar*/
