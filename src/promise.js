/*
//Ejemplo de uso básico
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Good');
    } else {
      reject('Not good');
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
*/

const fetchData = require('./utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then((data) => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(data.name);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => console.error(err));
