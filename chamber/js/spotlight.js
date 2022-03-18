const host = 'https://edup217.github.io/wdd230/chamber/';
const requestURL = `${host}files/data.json`;

const displaySpotlight = (directory) => {
    const spotlightRoot = document.querySelector('#item-spotlight');
    spotlightRoot.innerHTML = "";

    let directoryFiltered = directory.filter(i => i.membership == 'gold' || i.membership == 'silver');
    console.log(directoryFiltered);
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        displaySpotlight(jsonObject);
    });