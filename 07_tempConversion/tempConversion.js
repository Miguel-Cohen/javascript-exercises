const convertToCelsius = function(initFahrenheit) {
    return Math.round(10*(initFahrenheit-32)/1.8)/10;

};

const convertToFahrenheit = function(initCelsius) {
    return Math.round(10*(32 + 1.8*initCelsius))/10;
};

// console.log(convertToFahrenheit(73.2) +  ", " + convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
