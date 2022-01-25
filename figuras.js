// Código del cuadrado

var funcionesCuadrado = {
  perimetro: function (lado) {
    return lado * 4;
  },
  area: function (lado) {
    return lado * lado;
  },
};
function obtenerCuadrado(funcion) {
  const input = document.getElementById("inputCuadrado");
  const lado = Number(input.value);

  const result = funcionesCuadrado[funcion](lado);
  document.getElementById("resultadoCuadrado").innerText =
    "El " + funcion + " es: " + result;
}
function calcularPerimetroCuadrado() {
  obtenerCuadrado("perimetro");
}
function calcularAreaCuadrado() {
  obtenerCuadrado("area");
}

// Código del triángulo

function calcularAlturaTriangulo() {
  const inputs = [
    document.getElementById("ladoTriangulo01"),
    document.getElementById("ladoTriangulo02"),
    document.getElementById("ladoTriangulo03"),
  ];
  const lados = [];
  for (let i = 0; i < 3; i++) {
    lados[i] = Number(inputs[i].value);
  }
  const resultText = document.getElementById("resultadoTriangulo");
  if (lados[1] == lados[2]) {
    const altura = Math.sqrt(lados[1] ** 2 - (lados[0] / 2) ** 2);
    resultText.innerText = "La altura es: " + altura;
  } else {
    resultText.innerText = "Error: los lados no son iguales";
  }
}
