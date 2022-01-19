export default class Publisher{
    static instance = null;
    subscribers = {};
    
    constructor(){
        if(!Publisher.instance){
            Publisher.instance = this;
        }

        return Publisher.instance;
    }

    subscribe(event, func){
        this.initEvent(event);
        this.subscribers[event].push(func);
    }

    unsubscribe(event, func){
        this.initEvent(event);
        this.subscribers[event] = this.subscribers[event].filter(listener => listener != func);
    }

    notify(event, data){
        this.initEvent(event);
        this.subscribers[event].forEach(listener => listener(data));
    }

    initEvent(event){
        if(!this.subscribers[event]){
            this.subscribers[event] = [];
        }
    }
}