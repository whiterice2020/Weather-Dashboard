// vars
// URL should be in this format = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}"
// example "api.openweathermap.org/data/2.5/forecast?q= "City Var" "apiKey Var"{your api key}"
// var queryURL = "api.openweathermap.org/data/2.5/forecast?q=";
// test var for orlando full url
queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Orlando&appid=eee27dfad5db9dce473a5293caa3df71";
queryURL5Day = "https://api.openweathermap.org/data/2.5/forecast?q=Orlando&appid=eee27dfad5db9dce473a5293caa3df71";
var apiKey = "&appid=eee27dfad5db9dce473a5293caa3df71";
var city =





// Getting Data from API Current Weather
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
//     var temp = response.list[0].main.temp;
//     var humidty = response.list[0].main.humidity;
//     var windSpeed = response.list[0].wind.speed;
//     // var uvIndex = response.main.temp; have to fix this
// // Testing Response Data
//     console.log("temp" + temp);
//     console.log("humidity" + humidty);
//     console.log("Windspeed" + windSpeed);
    



// Getting Data from API for 5 day forcast
$.ajax({
    url: queryURL5Day,
    method: "GET"
  }).then(function(response) {
    var temp = response.list[0].main.temp;
    var humidty = response.list[0].main.humidity;
    var windSpeed = response.list[0].wind.speed;
    // var uvIndex = response.main.temp; have to fix this
// Testing Response Data
    console.log("temp" + temp);
    console.log("humidity" + humidty);
    console.log("Windspeed" + windSpeed);
    

    
    
  });


// ✓ User can search for weather reports by city using the openweathermap API.

// ✓ After searching for a city, the following information is displayed: current temperature, current humidity, windspeed, uv index, and 5 day forecast.

// ✓ Application uses icons to represent weather conditions.

// ✓ Application stores previously searched for cities in local storage and displays them to the user.

// ✓ Application loads last searched city forecast on page load.



// [orlando]

// [orlando, austin]