import Publisher from "../publisher.js";
import ModelLikometr from "./model_likometr.js";
import ViewLikometr from "./view_likometr.js";

export default class ControllerLikometr{
    constructor(){
        this.model = new ModelLikometr();
        this.view = new ViewLikometr();

        this.pub = new Publisher();

        this.pub.subscribe('LIKE', this.handleClickLike);
        this.view.render(this.model.likes);
    }

    handleClickLike = _ => {
        const likes = this.model.incrementLikes();

        this.view.render(likes);
    }
}