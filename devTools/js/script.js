function process(){
    let name = document.querySelector("#inputName").value;
    console.debug(`Hello : ${name}. You are in console log.`);
    document.querySelector("#userName").innerHTML = name;
}

console.log(`Welcome to this site`);
let lastupdateDateTime = document.lastModified;
console.info(`Last Updated was ${lastupdateDateTime}`);
document.querySelector("#lastUpdate").innerHTML = `Last Updated: ${lastupdateDateTime}`;
document.querySelector("#buttonProcess").addEventListener('click', process);
console.warn('this is a warning message.');
console.error('this is an error message.');