const button = document.querySelector('.button');
const lights = [...document.querySelectorAll('.traffic_lights_element')];

const colors = {
    red: '#FF0000',
    green: '#008000',
    yellow: '#FFFF00'
};
let indexCounter = 0;


button.addEventListener('click', () => {
    if (indexCounter == 3) {
        indexCounter = 0;
    }

    removeStyleFromLights()
    lightOn(lights[indexCounter], indexCounter)

    indexCounter++;
})

const removeStyleFromLights = () => lights.forEach(light => light.style.background = 'gray')
const lightOn = function(light, index) {
    switch (index) {
        case 0:
            light.style.background = colors.red;
            break;
        case 1:
            light.style.background = colors.yellow;
            break;

        case 2:
            light.style.background = colors.green;
            break;

    }
}