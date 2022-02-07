let months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
let weekDay = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let today = `${weekDay[currentDate.getDay()]}, ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentYear}`;
let lastupdateDateTime = document.lastModified;

document.getElementById('titleCurrentDate').innerHTML = today;
//document.getElementById('footerCurrentYear').innerHTML = currentYear;
//document.getElementById('footerLastModified').innerHTML = `Last Modification: ${lastupdateDateTime}`;

switch (currentDate.getDay()) {
    case 1:
        document.querySelector('#messageBanner').classList.toggle('active');
        break;
    case 2:
        document.querySelector('#messageBanner').classList.toggle('active');
        break;
    default:
        break;
}

const recaulculateResponsive = () => {

    let isMobile = false;
    let isTablet = false;
    let isDesktop = false;

    let windowsWidth = window.screen.width;
    if(windowsWidth >= 1024){
        isMobile = false;
        isTablet = false;
        isDesktop = true;
    } else if(windowsWidth >= 768){
        isMobile = false;
        isTablet = true;
        isDesktop = false;
    } else {
        isMobile = true;
        isTablet = false;
        isDesktop = false;
    }
    
    let userInfo = ["@%s Leoncio Prado Chamber", "<b>Eduardo Prieto</b>", "WDD 230 Project", "Last Modification: %s"];
    let userInfoMessage = "";
    for(let i=0; i<userInfo.length; i++){
        if(i==0){
            let textreplaced = userInfo[i].replace('%s',currentYear);
            userInfoMessage += textreplaced;
        } else if(i == (userInfo.length-1)){
            let textreplaced = userInfo[i].replace('%s',lastupdateDateTime);
            userInfoMessage += textreplaced;
        } else {
            userInfoMessage += userInfo[i];
        }

        if(isMobile){
            userInfoMessage += " <br> ";
        } else {
            userInfoMessage += " | ";
        }
    }
    document.getElementById('userInfo').innerHTML = userInfoMessage;
}

recaulculateResponsive();
window.onresize = () => {
    console.log("windows on resize");
    recaulculateResponsive();
};

const toggleMenu = () => {
    document.querySelector('#menu-ham').classList.toggle('active');
    document.querySelector('#siteMenu').classList.toggle('open');
    document.querySelector('.header-grid-container').classList.toggle('row-gap-1');
}

document.querySelector('#menu-ham').addEventListener('click', toggleMenu);

