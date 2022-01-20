export default class ModelStat{
    TG_BASE_URL = 'https://api.telegram.org/bot5280071314:AAGnNtHr0P9ic3XVv_Ot3mXPcf2tBZ9BJPg/sendMessage?';
    CHAT_ID = 194287825;

    likes = {
        sum : 0
    };

    sendMsg = text => {
        const url = `${ this.TG_BASE_URL }chat_id=${ this.CHAT_ID }&text=${ text }`;
        // fetch(url);
    }

    updateLikes = id => {
        if(!this.likes[id]){
            this.likes[id] = 0;
        }

        this.likes[id] += 1;
        this.likes.sum += 1;
    }

    sendStat = _ => {
        const msg = JSON.stringify(this.likes);
        this.sendMsg(msg);
    }
}