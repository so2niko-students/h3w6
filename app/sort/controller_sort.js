import ViewSort from "./view_sort.js";

export default class ControllerSort{
    constructor(handleSortByControllerCards){
        this.view = new ViewSort(this.handleClickBtnSort.bind(this));
        this.handleSortByControllerCards = handleSortByControllerCards;

        this.view.init();
    }

    handleClickBtnSort(ev){
        const sortType = ev.srcElement.dataset.btn;
        this.handleSortByControllerCards(sortType);
    }
}