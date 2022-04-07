let temples = [];

function get_localstorage(id){
    let storage = localStorage.getItem(`temple_${id}`);
    if(storage == 'like'){
        return true;
    }
    return false;
}

function set_localstorage(id){
    if(get_localstorage(id)){
        localStorage.setItem(`temple_${id}`,'unlike');
    } else {
        localStorage.setItem(`temple_${id}`,'like');
    }
}

function output(listOfTemples){
    let root = document.querySelector('#temple-grid');
    listOfTemples.forEach(t => {
        let id = t['id'];

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
        btnLike.innerHTML = "Like";
        btnLike.addEventListener("click", function () {
            if(get_localstorage(id)){
                btnLike.classList.toggle("active");
                localStorage.setItem(`temple_${id}`,'unlike');
            } else {
                btnLike.classList.toggle("active");
                localStorage.setItem(`temple_${id}`,'like');
            }
        });

        if(get_localstorage(id)){
            btnLike.classList.add("active");
        }

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
    fetch("https://mocki.io/v1/199bbdbf-8c81-4ec9-ac44-c2465eff4284")
    .then((res) => {
        return res.json() 
    })
    .then((list) => {
        temples = list;
        console.table(temples);
    })
    .finally(()=>{
        output(temples);
    });

