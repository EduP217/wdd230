const lastvisit = localStorage.getItem('lastVisit');
const FACTOR = 1000 * 60 * 60 * 24;
let numberOfDays = 0;

if(lastvisit){
    let daysbetween = Date.now() - lastvisit;
    console.log(daysbetween);
    numberOfDays = (daysbetween / FACTOR).toFixed(0);
}

console.log(`numberOfDays : ${numberOfDays}`);

if(numberOfDays > 0){
    document.querySelector('#diff-days').innerHTML = `Last time user visits: ${numberOfDays} days.`;
} else {
    document.querySelector('#diff-days').innerHTML = 'This is the first day you visit us.';
}

localStorage.setItem('lastVisit', Date.now());