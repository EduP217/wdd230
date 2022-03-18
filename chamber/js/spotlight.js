const host = 'https://edup217.github.io/wdd230/chamber/';
const requestURL = `${host}files/data.json`;

const displaySpotlight = (directory) => {
    const spotlightRoot = document.querySelector('#item-spotlight');
    spotlightRoot.innerHTML = "";

    let directoryFiltered = directory.filter(i => i.membership == 'gold' || i.membership == 'silver').sort(function() {return Math.random() - 0.5});
    console.table(directoryFiltered);

    for(var i=0;i<=2;i++){
        const item = directory[i];
        let container = document.createElement('div');
        container.classList.add('spotlight');
        container.classList.add(`spotlight${i+1}`);
        let sectionParagraph = document.createElement('p');
        sectionParagraph.classList.add('section-paragraph');
        let sectionTitle = document.createElement('span');
        sectionTitle.innerHTML = item.name;
        sectionTitle.classList.add('section-title');
        let spacebreak = document.createElement('br');
        let sectionImage = document.createElement('img');
        sectionImage.setAttribute('src',item.logoURL);
        sectionImage.setAttribute('alt',item.name);
        sectionImage.classList.add('spotlight-icon');
        sectionParagraph.append(sectionTitle);
        sectionParagraph.append(spacebreak);
        sectionParagraph.append(sectionImage);
        let headerSlogan = document.createElement('h3');
        headerSlogan.innerHTML = item.spotlight;
        let divisor = document.createElement('div');
        divisor.classList.add('divisor');
        divisor.classList.add('margin-less');
        let infoParagraph = document.createElement('p');
        infoParagraph.classList.add('section-paragraph');
        infoParagraph.innerHTML = `${item.name} <br> ${item.phone} | `;
        let websiteLink = document.createElement('a');
        websiteLink.setAttribute('href',item.siteURL);
        websiteLink.innerHTML = 'website';
        infoParagraph.append(websiteLink);
        container.append(sectionParagraph);
        container.append(headerSlogan);
        container.append(divisor);
        container.append(infoParagraph);
        spotlightRoot.append(container);
    }
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        displaySpotlight(jsonObject);
    });

/*
<div class="spotlight spotlight1">
                    <p class="section-paragraph">
                        <span class="section-title">Thankful Transport</span> <br>
                        <img src="images/truck.png" alt="thankful transport" class="spotlight-icon">
                    </p>
                    <h3>"We get it there for you!"</h3>
                    <div class="divisor margin-less"></div>
                    <p class="section-paragraph">
                        hello@thankfultransport.com <br>
                        +999-999-999 | Website
                    </p>
                </div>
                */