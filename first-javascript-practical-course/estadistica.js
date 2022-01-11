//Inserción de datos del usuario

var listaUsuario = [];
const etiquetaResultado = document.getElementById("resultado");

function numeroDatos() {
  const input = document.getElementById("numeroDatos");
  return parseInt(input.value);
}

function datosUsuario() {
  listaUsuario = [];
  for (let i = 0; i < numeroDatos(); i++) {
    let dato = document.getElementById(i);
    let valueDato = parseInt(dato.value);

    listaUsuario.push(valueDato);
  }
}

function insertarCantidadDeDatos() {
  var elementos = document.getElementById("insertarInputs");
  //Eliminar todos los elementos hijos del contenedor de inputs
  while (elementos.firstChild) {
    elementos.removeChild(elementos.firstChild);
  }
  for (let i = 0; i < numeroDatos(); i++) {
    var direccion =
      '<label for="' +
      i +
      '">dato: </label> <input id="' +
      i +
      '"type="number"></input>';
    elementos.insertAdjacentHTML("beforeend", direccion);
  }
  elementos.insertAdjacentHTML(
    "beforeend",
    '<button type="button" onclick="calcularMedia()">CalcularMedia</button>'
  );
  elementos.insertAdjacentHTML(
    "beforeend",
    '<button type="button" onclick="calcularMediana()">CalcularMediana</button>'
  );
  elementos.insertAdjacentHTML(
    "beforeend",
    '<button type="button" onclick="calcularModa()">CalcularModa</button>'
  );
}

//Código de Media
function calcularMedia() {
  datosUsuario();
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  //Esta es otra manera de hacer la suma con una función del array
  const sumaLista = listaUsuario.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / listaUsuario.length;

  etiquetaResultado.innerText = "Media: " + promedioLista;
}

//Código Mediana
function esPar(numero) {
  return numero % 2 === 0;
}
function calcularMediana() {
  datosUsuario();
  const mitadLista = parseInt(listaUsuario.length / 2);
  function comparar(a, b) {
    return a - b;
  }
  listaUsuario.sort(comparar);
  if (esPar(listaUsuario.length)) {
    const elem1 = listaUsuario[mitadLista - 1];
    const elem2 = listaUsuario[mitadLista];
    let mediana = (elem1 + elem2) / 2;
    etiquetaResultado.innerText = "Mediana: " + mediana;
  } else {
    etiquetaResultado.innerText = "Mediana: " + listaUsuario[mitadLista];
  }
}

//Código Moda
function calcularModa() {
  datosUsuario();
  const conteoLista = {};
  listaUsuario.map(function (elemento) {
    if (conteoLista[elemento]) {
      conteoLista[elemento] += 1;
    } else {
      conteoLista[elemento] = 1;
    }
  });

  const conteoOrdenado = Object.entries(conteoLista).sort(function (a, b) {
    return a[1] - b[1];
  });

  etiquetaResultado.innerText =
    "Moda: " + conteoOrdenado[conteoOrdenado.length - 1][0];
}
//Otra manera de sacar Moda
function mode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}
