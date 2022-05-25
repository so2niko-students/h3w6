const loadDoc = (url, func, errFunc = () => console.error('Error in fetching data')) => {
    console.time('load');
    const xhttp = new XMLHttpRequest();
    
    xhttp.addEventListener('load', () => func(xhttp.responseText));
    xhttp.addEventListener('error', () => errFunc(xhttp));

    xhttp.open("GET", url);
    
    xhttp.send();
}

const myF = url => {
    return new Promise((resolve, reject) => {
        loadDoc(url, resolve, reject);
    });
};

const showText = text => {
    document.querySelector('#demo').innerText = text;
}

const FILE_PATH = 'countries.txt';

const onClickLoadCountries = () => { 
    myF(FILE_PATH).then(showText).catch(d => console.error(d));
}

const onClickLoadCountriesAsync = async () => { 
    const data = await myF(FILE_PATH);
    showText(data);
}

const onClickLoadCountriesFetch = () => { 
    fetch(FILE_PATH).then(r => r.text()).then(showText);
}

const onClickLoadCountriesFetchAsync = async () => { 
    const resp = await fetch(FILE_PATH);
    const data = await resp.text();
    showText(data);
}

document.querySelector('.btn_load').addEventListener('click', onClickLoadCountriesFetchAsync);

