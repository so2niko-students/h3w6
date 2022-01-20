import ModelStat from "./model_stat.js";
import Publisher from "../publisher.js";

export default class ControllerStat{
    TIMEOUT = 100000;
    constructor(){
        this.model = new ModelStat();
        this.pub = new Publisher();

        this.pub.subscribe('LIKE', this.handleLike);

        this.intervalID = setInterval(this.sendStat, this.TIMEOUT);
    }

    handleLike = id => {
        this.model.updateLikes(id);
    }

    sendStat = () => {
        this.model.sendStat();
    }

}