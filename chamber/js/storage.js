const lastvisit = localStorage.getItem('lastVisit');
const FACTOR = 1000 * 60 * 60 * 24;
let numberOfDays = 0;

if(lastvisit){
    let daysbetween = Date.now() - lastvisit;
    console.log(daysbetween);
    numberOfDays = (daysbetween / FACTOR).toFixed(0);
}

document.querySelector('#diff-days').innerHTML = `Last time user visit: ${numberOfDays} days.`;
localStorage.setItem('lastVisit', Date.now());