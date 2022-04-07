let temples = [];

function output(listOfTemples){
    let root = document.querySelector('#temple-grid');
    listOfTemples.forEach(t => {
        let card = document.createElement('article');
        card.classList.add("card");

        let cardImage = document.createElement('div');
        cardImage.classList.add("card-image");

        let cardBody = document.createElement('div');
        cardBody.classList.add("card-body");

        let templeImage = document.createElement('img');
        /*templeImage.setAttribute('src', "assets/images/img_placeholder.jpg");
        templeImage.setAttribute('alt', "placeholder");
        templeImage.setAttribute('data-src', t['imageUrl']);
        templeImage.setAttribute('data-alt', t['name']);
        templeImage.classList.add("lazy");*/
        templeImage.setAttribute('src', t['imageUrl']);
        templeImage.setAttribute('alt', t['name']);

        let templeName = document.createElement('h2');
        templeName.innerHTML = t['templeName'];

        let templeLocation = document.createElement('h3');
        templeLocation.innerHTML = t['location'];

        let templeDedicated = document.createElement('h3');
        templeDedicated.innerHTML = t['dedicated'];

        let divisor = document.createElement('div');
        divisor.classList.add("divisor");

        let btnLike = document.createElement('btn');
        btnLike.setAttribute("type","button");
        btnLike.classList.add("btn");
        btnLike.classList.add("btn-like");
        btnLike.innerHTML = "Like"

        cardImage.appendChild(templeImage);
        cardBody.appendChild(templeName);
        cardBody.appendChild(templeLocation);
        cardBody.appendChild(templeDedicated);
        cardBody.appendChild(divisor);
        cardBody.appendChild(btnLike);

        card.appendChild(cardImage);
        card.appendChild(cardBody);
        root.appendChild(card);
    });    
}

let fetchTemples = 
    fetch("https://github.com/EduP217/wdd230/templeinn/assets/data/temples.json")
    .then((res) => {
        return res.json() 
    })
    .then((list) => {
        temples = list;
    })
    .finally(()=>{
        output(temples);
    });
