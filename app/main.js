import ControllerCards from "./cards/controller_cards.js";
import ControllerSort from "./sort/controller_sort.js";

const controllerCards = new ControllerCards();
const controllerSort = new ControllerSort(controllerCards.handleSort.bind(controllerCards));


// const URL_SHEET = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOqWva_m9I6H9Xr6wkscA-MHWPp2T-xkXZKsLIF-0haZYERPhbUnCjJP7LgQq4x1hZVY0NA6GY12bc/pub?output=tsv'; //! M
// const BODY_MAIN = document.body.querySelector('main'); //? V

// fetch(URL_SHEET) //! M
//     .then(r => r.text())
//     .then(d => {
//         console.log(d);
//         parseSheet(d);
//     });

// const parseSheet = tsv => { //! M
//     const d = tsv.split('\r\n').map(line => line.split('\t'));
//     const keys = d.shift();
//     const data = d.map(arr => arr.reduce((obj, prop, i) => {
//         obj[keys[i]] = prop;
//         return obj;
//     }, {}));
//     renderCars(data);
// }   

// const renderCars = cars => { //? V
//     BODY_MAIN.insertAdjacentHTML('beforeend', cars.map(getCarHTML).join(''));
// }

// const getCarHTML = ({ name, year, country, img, price }) => { //? V
//     return `<div class="card m-2" style="width: 18rem;">
//                 <img src="${ img }" class="card-img-top" alt="${ name }">
//                 <div class="card-body">
//                 <h5 class="card-title">${ name }</h5>
//                     <p class="card-text">Price : ${ price }</p>
//                     <p class="card-text">Year : ${ year }</p>
//                     <p class="card-text">Country : ${ country }</p>
//                 </div>
//             </div>`;
// };

