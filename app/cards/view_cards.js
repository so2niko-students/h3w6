export default class ViewCards{
    BODY_MAIN = document.body.querySelector('main');

    constructor(handleClickLike){
        this.BODY_MAIN.addEventListener('click', handleClickLike);
    }

    renderCars(cars){
        this.BODY_MAIN.innerHTML = '';
        this.BODY_MAIN.insertAdjacentHTML('beforeend', cars.map(this.getCarHTML).join(''));
    }

    getCarHTML({ id, name, year, country, img, price }){
        return `<div class="card m-2 car-id" style="width: 18rem;" data-id="${ id }">
                    <img src="${ img }" class="card-img-top" alt="${ name }">
                    <div class="card-body">
                    <h5 class="card-title">${ name }</h5>
                        <p class="card-text">Price : ${ price }</p>
                        <p class="card-text">Year : ${ year }</p>
                        <p class="card-text">Country : ${ country }</p>
                        <button type="button" class="btn btn-success">Like</button>
                    </div>
                </div>`;
    }

    //TODO:  Перенести в контроллер?
    getCardId = ev => ev.target.closest('.car-id')?.dataset.id;
}