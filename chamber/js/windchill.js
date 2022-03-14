const convertToF = (celsius) => {
    return celsius * 9/5 + 32;
}

const convertToMPH = (kilometers) => {
    return kilometers * 0.621371;
}

const calculateWindchill = (temperatureInCelsius, distanceInKmPH) => {
    let temperatureInFahrenheit = convertToF(temperatureInCelsius);
    let distanceInMPH = convertToMPH(distanceInKmPH);
    console.log(temperatureInFahrenheit);
    console.log(distanceInMPH);

    let chill = "N/A";
    if (temperatureInFahrenheit<=50 && distanceInMPH>3){
        let calculateChill = 35.74 + (0.6215*temperatureInFahrenheit) - (35.75*Math.pow(distanceInMPH,0.16)) + (0.4275*temperatureInFahrenheit*Math.pow(distanceInMPH,0.16));
        chill = calculateChill.toFixed(2).toString();
    }

    return chill;
}

const weatherApiKey = "1cd229614ef62dcee00a4d050b36ab98";
const weatherCityId = 3936456;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${weatherCityId}&appid=${weatherApiKey}&units=metric`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let currentTemp = Math.round(jsObject.main.temp);
        let currentWindSpeed = (jsObject.wind.speed * 3.6).toFixed(1);
        
        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;

        document.querySelector('#weatherGrade').innerHTML = `${currentTemp}ºC`;
        document.querySelector('#windSpeed').innerHTML = currentWindSpeed;
        document.querySelector('#weatherType').innerHTML = desc;

        document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
        document.querySelector('#weatherIcon').setAttribute('alt', desc);

        let windchill = calculateWindchill(currentTemp, currentWindSpeed);
        console.log(windchill);

        document.querySelector("#windchillInfo").innerHTML = windchill;
    });
