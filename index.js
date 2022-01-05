// Задание 1

let length, weight, height;

function getDynamicInfo(selector) {

    const input = document.querySelector(selector);

    input.addEventListener('input', () => {

        if (input.value.match(/\D/g) || input.value <= 0 || input.value > 1000) {
            input.style.border = '1px solid red';
            // alert('Введите коректное число!');
        } else {
            input.style.border = 'none';
        }

        switch(input.getAttribute('id')) {
            case 'length':
                length = + input.value;
                break;
            case 'weight':
                weight = + input.value;
                break;
            case 'height':
                height = + input.value;
                break;
        } 
        calcTotal();
    });
}

getDynamicInfo('#length');
getDynamicInfo('#weight');
getDynamicInfo('#height');


function calcTotal() {
    const result = document.querySelector('.calculating__result span');
    if (!length || !weight || !height) {
        result.textContent = '____';
    } else {
        result.textContent = Math.ceil(2 * (length * weight + length * height + weight * height) / 16);
    }
}

calcTotal();

// Задание 2

function easyMoney(A1, A2, A3, B1, B2, B3) {
    if (A1 <= 100 &&
        A2 <= 100 &&
        A3 <= 100 &&
        B1 <= 100 &&
        B2 <= 100 &&
        B3 <= 100) {
            const price = [A1, A2, A3].sort((a, b) => a - b);
            const containers = [B1, B2, B3].sort((a, b) => a - b);
        
            let sum = 0;
            for (let i = 0; i < price.length; i++) {
                sum += price[i] * containers[i]
            }

            console.log(sum);
    }
    
 }

 easyMoney(10,222,3,4,15,69);
 easyMoney(10,99,3,4,15,69);

// Задание 3

function isLuckyTicket(number) {
    if (number > 1000000) {
        console.log('Нет такого номера билета');
    }
    const arrayOfNumbers = String(number).split('');
    
    const leftSide = arrayOfNumbers.slice(0,3);
    const rightSide = arrayOfNumbers.slice(3);
   
    const sumLeftSide = leftSide.reduce((a, b) => Number(a) + Number(b));
    const sumRightSide = rightSide.reduce((a, b) => Number(a) + Number(b));

    console.log(sumLeftSide === sumRightSide ? 'YES' : 'NO');

}

isLuckyTicket(123456);
isLuckyTicket(444444);