// vars
// URL should be in this format = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}"
// example "api.openweathermap.org/data/2.5/forecast?q= "City Var" "apiKey Var"{your api key}"
var queryURL = "api.openweathermap.org/data/2.5/forecast?q=";
var apiKey = "&appid=eee27dfad5db9dce473a5293caa3df71";
var city =






$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;




// ✓ User can search for weather reports by city using the openweathermap API.

// ✓ After searching for a city, the following information is displayed: current temperature, current humidity, windspeed, uv index, and 5 day forecast.

// ✓ Application uses icons to represent weather conditions.

// ✓ Application stores previously searched for cities in local storage and displays them to the user.

// ✓ Application loads last searched city forecast on page load.



// [orlando]

// [orlando, austin]