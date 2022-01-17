let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let lastupdateDateTime = document.lastModified;

document.getElementById('idCurrentYear').innerHTML = currentYear;
document.getElementById('idLastupdate').innerHTML = `Last Updated: ${lastupdateDateTime}`;