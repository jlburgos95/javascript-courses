//Estructura normal de una función recursiva
/* function recursiva(num) {
  console.log(num);
  if (num < 5) {
    return recursiva(num + 1);
  } else {
    return 5;
  }
}
 */

//Con un for
const numeritos = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 435678, 7, 2, 3];
let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {
  numerito = numeritos[index];
  console.log({ index, numerito });
}

//Con una función recursiva
function recursiva(numbersArray) {
  if (numbersArray.length != 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);

    numbersArray.shift();
    recursiva(numbersArray);
  }
}

recursiva(numeritos);
