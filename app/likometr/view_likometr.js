export default class ViewLikometr{
    BODY_HEADER = document.body.querySelector('header');

    constructor(){
        const htmlStr = '<div class="progress likes"></div>';
        this.BODY_HEADER.insertAdjacentHTML('beforeend', htmlStr);
        this.PROGRESS_LIKES = this.BODY_HEADER.querySelector('.progress.likes');
    }

    //https://bootstrap-4.ru/docs/5.1/components/progress/
    render = count => {
        const htmlStr = `<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${ count }%" aria-valuenow="${ count }" aria-valuemin="0" aria-valuemax="100">${ count }</div>`;
        this.PROGRESS_LIKES.innerHTML = '';
        this.PROGRESS_LIKES.insertAdjacentHTML('beforeend', htmlStr);
    }
}