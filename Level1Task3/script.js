function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperatureInput)) {
        resultDiv.textContent = "Please enter a valid number";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    switch (unit) {
        case "Celsius":
            convertedTemperature = `${(temperature * 9/5) + 32} °F (Fahrenheit), ${(temperature + 273.15)} K (Kelvin)`;
            break;
        case "Fahrenheit":
            convertedTemperature = `${((temperature - 32) * 5/9)} °C (Celsius), ${(((temperature - 32) * 5/9) + 273.15)} K (Kelvin)`;
            break;
        case "Kelvin":
            convertedTemperature = `${(temperature - 273.15)} °C (Celsius), ${((temperature - 273.15) * 9/5 + 32)} °F (Fahrenheit)`;
            break;
        default:
            resultDiv.textContent = "Invalid unit";
            return;
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemperature}`;
}
