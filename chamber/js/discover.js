const data = [
    {
        "id": 1,
        "name": "comercial_1",
        "url_200": "images/comercial_1_chamberx200.png",
        "url_400": "images/comercial_1_chamberx400.png",
        "url_700": "images/comercial_1_chamberx700.png",
        "description": "Beautiful place to find fashion stores. With prices accessible to all budgets. Excellent view, wide and clean, perfect to approach and take good pictures. It has a great diversity of shops, restaurants, among others."
    },
    {
        "id": 2,
        "name": "comercial_2",
        "url_200": "images/comercial_2_chamberx200.png",
        "url_400": "images/comercial_2_chamberx400.png",
        "url_700": "images/comercial_2_chamberx700.png",
        "description": "An avenue full of banks and businesses willing to take care of your personal finances, offering an excellent service. In addition, they will encourage you to grow in the entrepreneurship you have been looking for a long time."
    },
    {
        "id": 3,
        "name": "comercial_3",
        "url_200": "images/comercial_3_chamberx200.png",
        "url_400": "images/comercial_3_chamberx400.png",
        "url_700": "images/comercial_3_chamberx700.png",
        "description": "Didn't you expect an underground parking lot? It is more incredible than you can imagine. In the central park you will find a complete space for your vehicle, 24x7 security and a cleaning service dedicated to the maintenance of your unit."
    },
    {
        "id": 4,
        "name": "comercial_4",
        "url_200": "images/comercial_4_chamberx200.png",
        "url_400": "images/comercial_4_chamberx400.png",
        "url_700": "images/comercial_4_chamberx700.png",
        "description": "An assured cycle lane, in an excellent location allowing the constant flow of those users who have a smaller vehicle unit. We offer bicycle parking and maintenance."
    },
    {
        "id": 5,
        "name": "comercial_5",
        "url_200": "images/comercial_5_chamberx200.png",
        "url_400": "images/comercial_5_chamberx400.png",
        "url_700": "images/comercial_5_chamberx700.png",
        "description": "Access to the main road, allows access to bus units, taxis, etc. This avenue is directly synchronized with the BU-T002 and BU-T006 units. Whose destiny covers 4 districts of the region."
    },
    {
        "id": 6,
        "name": "comercial_6",
        "url_200": "images/comercial_6_chamberx200.png",
        "url_400": "images/comercial_6_chamberx400.png",
        "url_700": "images/comercial_6_chamberx700.png",
        "description": "An excellent service from the taps by offering oil of all levels. You will find a location to recharge energy, both for your unit and for yourself. They offer a place to have lunch or buy some groceries."
    },
    {
        "id": 7,
        "name": "comercial_7",
        "url_200": "images/comercial_7_chamberx200.png",
        "url_400": "images/comercial_7_chamberx400.png",
        "url_700": "images/comercial_7_chamberx700.png",
        "description": "Need some stationery? Still looking for a place to buy groceries? Here you will find everything. These places are scattered throughout the city."
    },
    {
        "id": 8,
        "name": "comercial_8",
        "url_200": "images/comercial_8_chamberx200.png",
        "url_400": "images/comercial_8_chamberx400.png",
        "url_700": "images/comercial_8_chamberx700.png",
        "description": "The municipal savings banks support you with easy and simple access to enter the business market. In the same way, they have small to large loans for your business."
    },
    {
        "id": 9,
        "name": "comercial_9",
        "url_200": "images/comercial_9_chamberx200.png",
        "url_400": "images/comercial_9_chamberx400.png",
        "url_700": "images/comercial_9_chamberx700.png",
        "description": "In this city you will find dental clinics, pharmaceutical laboratories. Everything you need so you don't worry, is there any discomfort? everything can be fixed. Visit us.!"
    }
]

/*fetch('./files/discover.json')
.then(response => {
    return response.json();
})
.then(jsondata => console.log(jsondata));*/

const imagesRootContainer = document.querySelector("#images-container");

let count = 0;

data.forEach((item) => {
    //console.log(item);
    count+=1;

    let picture = document.createElement("picture");
    picture.classList.add('images-grid-item');
    picture.classList.add(`comercial_${item.id}`);

    let sourcex200 = document.createElement("source");
    sourcex200.setAttribute('media','(max-width: 425px)');
    sourcex200.setAttribute('srcset','images/img_placeholder.jpg');
    sourcex200.setAttribute('data-srcset',item.url_200);

    let sourcex400 = document.createElement("source");
    sourcex400.setAttribute('media','(max-width: 768px)');
    sourcex400.setAttribute('srcset','images/img_placeholder.jpg');
    sourcex400.setAttribute('data-srcset',item.url_400);

    let image = document.createElement("img");
    image.setAttribute('src','images/img_placeholder.jpg');
    image.setAttribute('data-src',item.url_700);
    image.setAttribute('alt',item.name);

    picture.append(sourcex200);
    picture.append(sourcex400);
    picture.append(image);

    imagesRootContainer.append(picture);

    let paragraph = document.createElement("p");
    paragraph.setAttribute('id',`comercial_${item.id}_description`);
    paragraph.classList.add('discover');
    paragraph.innerHTML = item.description;

    imagesRootContainer.append(paragraph);
});