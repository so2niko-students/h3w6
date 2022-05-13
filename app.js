const loadDoc = url => {
    console.time('load');
    const xhttp = new XMLHttpRequest();
    
    xhttp.addEventListener('load', () => {
        console.log(xhttp.readyState);
        console.timeEnd('load');
        document.getElementById("demo").innerHTML = xhttp.responseText;
    });
    xhttp.open("GET", url);
    
    xhttp.send();
}

document.querySelector('.btn_load').addEventListener('click', () => loadDoc('countries.txt'));

// const cb1 = () => console.log(1);
// document.querySelector('.btn_load').addEventListener('click', cb1);
// document.querySelector('.btn_load').addEventListener('click', () => console.log(2));
// document.querySelector('.btn_load').removeEventListener('click', cb1);
// document.querySelector('.btn_load').onclick = () => console.log(1);
// document.querySelector('.btn_load').onclick = () => console.log(2);