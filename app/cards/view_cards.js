export default class ViewCards{
    BODY_MAIN = document.body.querySelector('main');

    renderCars(cars){
        this.BODY_MAIN.innerHTML = '';
        this.BODY_MAIN.insertAdjacentHTML('beforeend', cars.map(this.getCarHTML).join(''));
    }

    getCarHTML({ name, year, country, img, price }){
        return `<div class="card m-2" style="width: 18rem;">
                    <img src="${ img }" class="card-img-top" alt="${ name }">
                    <div class="card-body">
                    <h5 class="card-title">${ name }</h5>
                        <p class="card-text">Price : ${ price }</p>
                        <p class="card-text">Year : ${ year }</p>
                        <p class="card-text">Country : ${ country }</p>
                    </div>
                </div>`;
    }
}