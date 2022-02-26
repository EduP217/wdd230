const currentDate = new Date();

let today = currentDate.getDate() + "." + (currentDate.getMonth()+1).toString().padStart(2, '0') + "." + currentDate.getFullYear();
let compileMessage = `Compiled ${today} by Eduardo Prieto`;

document.querySelector("#compiledBanner").innerHTML = compileMessage;