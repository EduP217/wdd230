const convertToF = (celsius) => {
    return celsius * 9/5 + 32;
}

const convertToMPH = (kilometers) => {
    return kilometers * 0.621371;
}

const calculateWindchill = (temperatureInCelsius, distanceInKmPH) => {
    let temperatureInFahrenheit = convertToF(temperatureInCelsius);
    let distanceInMPH = convertToMPH(distanceInKmPH);

    let chill = "N/A";
    if (temperatureInFahrenheit<=50 && distanceInMPH>3){
        let calculateChill = 35.74 + (0.6215*temperatureInFahrenheit) - (35.75*Math.pow(distanceInMPH,0.16)) + (0.4275*temperatureInFahrenheit*Math.pow(distanceInMPH,0.16));
        chill = calculateChill.toFixed(2).toString();
    }

    return chill;
}