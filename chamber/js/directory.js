const host = 'https://edup217.github.io/wdd230/chamber/';
const requestURL = `${host}files/data.json`;

let directory = [];

const clean = () => {
    document.querySelector('.cards').innerHTML = '';
    document.querySelector('.rows').innerHTML = '';
    document.querySelector('#view-option-grid').classList.remove('active');
    document.querySelector('#view-option-list').classList.remove('active');
    document.querySelector('.cards').classList.remove('active');
    document.querySelector('.rows').classList.remove('active');
}

const activeGridView = () => {
    clean();

    document.querySelector('#view-option-grid').classList.add('active');
    const rootcontainer = document.querySelector('.cards');
    directory.forEach(item => {
        let contenedor = document.createElement('div');
        contenedor.classList.add('card');
        let image = document.createElement('img');
        image.setAttribute('src',`${host}${item.logoURL}`);
        image.setAttribute('alt',item.name);
        image.classList.add('lazyload');
        let paragraph = document.createElement('p');
        paragraph.innerHTML = `${item.address} </br> ${item.phone}`;
        let link = document.createElement('a');
        link.innerHTML = item.siteURL;
        link.setAttribute('href', item.siteURL);

        contenedor.append(image);
        contenedor.append(paragraph);
        contenedor.append(link);
        rootcontainer.append(contenedor);
    });
    rootcontainer.classList.add('active');
}

const activeListView = () => {
    clean();

    document.querySelector('#view-option-list').classList.add('active');
    const rootcontainer = document.querySelector('.rows');
    directory.forEach((item, idx) => {
        let contenedor = document.createElement('div');
        contenedor.classList.add('row');
        let pfName = document.createElement('p');
        pfName.innerHTML = item.name;
        let pfAddress = document.createElement('p');
        pfAddress.innerHTML = item.address;
        let pfPhone = document.createElement('p');
        pfPhone.innerHTML = item.phone;
        let link = document.createElement('a');
        link.innerHTML = item.siteURL;
        link.setAttribute('href', item.siteURL);
        
        if(idx % 2 == 0){
            pfName.classList.add('colored');
            pfAddress.classList.add('colored');
            pfPhone.classList.add('colored');
            contenedor.classList.add('colored');
        }

        contenedor.append(pfName);
        contenedor.append(pfAddress);
        contenedor.append(pfPhone);
        contenedor.append(link);
        rootcontainer.append(contenedor);
    });
    rootcontainer.classList.add('active');
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        directory = jsonObject;
        activeGridView();
    });

document.querySelector('#view-option-grid').addEventListener('click', activeGridView);
document.querySelector('#view-option-list').addEventListener('click', activeListView);