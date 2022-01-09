let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let lastupdateDateTime = `${(currentDate.getMonth()+1)}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

document.getElementById('idCurrentYear').innerHTML = currentYear;
document.getElementById('idLastupdate').innerHTML = lastupdateDateTime;