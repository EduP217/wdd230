let months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
let weekDay = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let today = `${weekDay[currentDate.getDay()]}, ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentYear}`;
let lastupdateDateTime = document.lastModified;

let isMobile = false;
let isTablet = false;
let isDesktop = false;

const recaulculateResponsive = () => {
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

    document.getElementById('currentYear').innerHTML = currentYear;
    document.getElementById('studentName').innerHTML = "Eduardo Prieto";
    document.getElementById('lastModified').innerHTML = `Last Modification: ${lastupdateDateTime}`;
}

recaulculateResponsive();
window.onresize = () => {
    console.log("windows on resize");
    recaulculateResponsive();
};

const toggleMenu = () => {
    document.querySelector('#menu-ham').classList.toggle('active');
    document.querySelector('#siteMenu').classList.toggle('open');
    document.querySelector('#social-buttons').classList.toggle('open');
}

document.querySelector('#menu-ham').addEventListener('click', toggleMenu);
document.querySelector('.dropdown').addEventListener('click', event => {
    document.querySelector('.dropdown').classList.toggle('active');
    document.querySelector('#siteSubmenu').classList.toggle('show');
});