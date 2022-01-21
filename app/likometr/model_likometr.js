export default class ModelLikometr{
    constructor(){
        this._likes = Number(localStorage.getItem('likes') ?? 0);
    }

    get likes(){
        return this._likes;
    }
    
    incrementLikes = _ => {
        this._likes += 1;
        localStorage.setItem('likes', this._likes);
        return this._likes;
    }
}