export default class ModelCards{
    URL_SHEET = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOqWva_m9I6H9Xr6wkscA-MHWPp2T-xkXZKsLIF-0haZYERPhbUnCjJP7LgQq4x1hZVY0NA6GY12bc/pub?output=tsv';

    getData(){
        return fetch(this.URL_SHEET)
                .then(r => r.text())
                .then(this.parseSheet);
    }

    parseSheet = tsv => {
        const d = tsv.split('\r\n').map(line => line.split('\t'));
        const keys = d.shift();
        const data = d.map(arr => arr.reduce((obj, prop, i) => {
            obj[keys[i]] = prop;
            return obj;
        }, {}));
        
        this.data = data;
        return data;
    }   

    getSortData(sortType){
        const sortVoc = { sort_up : 1, sort_dn : -1 };
        const sortMulti = sortVoc[sortType];

        this.data.sort((a, b) => (a.price - b.price) * sortMulti);

        return this.data;
    }
}