export default class ModelLikometr{
    likes = 0;
    
    incrementLikes = _ => {
        this.likes += 1;
        return this.likes;
    }
}