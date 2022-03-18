let d = new Date();

let dateAndTime = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

document.querySelector("#currentDate").value = dateAndTime;