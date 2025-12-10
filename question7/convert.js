function convertCelsius(celsius){
    // formular °f= (°C * 9/5) +32
    const fahrenheit = (celsius * 9/5) + 32;
    const roundedFahrenheit = Math.round(fahrenheit);
    
    let temperature;
    if (celsius >= 30){
        temperature = "Hot";
    } else if (celsius >= 15 && celsius < 30){
        temperature = "Warm";
    } else {
        temperature = "Cold";
    }
    
    return `${celsius}°C = ${roundedFahrenheit}°F (${temperature})`;
}

