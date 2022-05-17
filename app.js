const loadDoc = (url, func, errFunc = () => console.error('Error in fetching data')) => {
    console.time('load');
    const xhttp = new XMLHttpRequest();
    
    xhttp.addEventListener('load', () => func(xhttp.responseText));
    xhttp.addEventListener('error', () => errFunc(xhttp));

    xhttp.open("GET", url);
    
    xhttp.send();
}

// document.querySelector('.btn_load').addEventListener('click', () => loadDoc('countries.txt', d => {
//     document.querySelector('#demo').innerText = d;
// }));

// const cb1 = () => console.log(1);
// document.querySelector('.btn_load').addEventListener('click', cb1);
// document.querySelector('.btn_load').addEventListener('click', () => console.log(2));
// document.querySelector('.btn_load').removeEventListener('click', cb1);
// document.querySelector('.btn_load').onclick = () => console.log(1);
// document.querySelector('.btn_load').onclick = () => console.log(2); 

// fetch(url).then(d => { /* щось робимо */})

const myF = url => {
    return new Promise((resolve, reject) => {
        loadDoc(url, resolve, reject);
    });
};

document.querySelector('.btn_load').addEventListener('click', () => { 
    myF('countries1.txt')
        .then(d => {
            document.querySelector('#demo').innerText = d;
        })
        .catch(d => console.error(d));
});


