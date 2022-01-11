class TrafficLilght {
    constructor() {
        this.states = {
            LightRed: LightRed,
            LightRedYellow: LightRedYellow,
            LightGreen: LightGreen
        }
        this.state = new this.states.LightRed(this);
        this.redLight = document.querySelector('#redLight');
        this.yellowLight = document.querySelector('#yellowLight');
        this.greenLight = document.querySelector('#greenLight');
        this.state.light();

    }
    next() {

        this.state.next();
        console.log(this.state)
        this.state.light();
    }


}


class LightRed {
    constructor(trafficLight) {
        this.trafficLight = trafficLight;
    }
    next() {
        this.trafficLight.state = new this.trafficLight.states.LightRedYellow(this.trafficLight)
    }
    light() {
        this.trafficLight.redLight.style.backgroundColor = '#F72400';
        this.trafficLight.yellowLight.style.backgroundColor = '#8A8A8A';
        this.trafficLight.greenLight.style.backgroundColor = '#8A8A8A';
    }


}
class LightRedYellow {
    constructor(trafficLight) {
        this.trafficLight = trafficLight;
    }
    next() {
        this.trafficLight.state = new this.trafficLight.states.LightGreen(this.trafficLight)
    }
    light() {
        this.trafficLight.redLight.style.backgroundColor = '#F72400';
        this.trafficLight.yellowLight.style.backgroundColor = '#FF9600';
        this.trafficLight.greenLight.style.backgroundColor = '#8A8A8A';
    }

}
class LightGreen {
    constructor(trafficLight) {
        this.trafficLight = trafficLight;
    }
    next() {
        this.trafficLight.state = new this.trafficLight.states.LightRed(this.trafficLight)
    }
    light() {
        this.trafficLight.redLight.style.backgroundColor = '#8A8A8A';
        this.trafficLight.yellowLight.style.backgroundColor = '#8A8A8A';
        this.trafficLight.greenLight.style.backgroundColor = '#00C600';
    }

}

(() => {
    const nextButton = document.querySelector('#nextBtn');
    const trafficLight = new TrafficLilght();
    nextButton.addEventListener('click', () => {
        trafficLight.next();
    }, false)
})();