// vars
// URL should be in this format = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}"
// example "api.openweathermap.org/data/2.5/forecast?q= "City Var" "apiKey Var"{your api key}"
// var queryURL = "api.openweathermap.org/data/2.5/forecast?q=";
// test var for orlando full url
// queryURLCurrent = "api.openweathermap.org/data/2.5/weather?q= {city name} &appid= {your api key} ";
queryURLCurrent = "https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=eee27dfad5db9dce473a5293caa3df71";
queryURL5Day = "https://api.openweathermap.org/data/2.5/forecast?q=Orlando&appid=" + apiKey;
// queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?appid= **api key** &lat=  **{lat}**  &lon=  **{lon}**";
// queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?appid= **api key** &lat=  **  &lon=  **Lon**";
queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?appid="+apiKey+ "&lat=" + lat "&lon=" + lon";
var apiKey = "eee27dfad5db9dce473a5293caa3df71";
var city ="";
var lat = "";
var lon = "";


// ?? document.ready(function)


// Getting Data from API Current Weather
$.ajax({
    url: queryURLCurrent,
    method: "GET"
  }).then(function(response) {
    var temp = response.main.temp;
    var humidty = response.main.humidity;
    var windSpeed = response.wind.speed;
//     // var uvIndex = response.main.temp; have to fix this
// // Testing Response Data
    console.log("Current temp " + temp);
    console.log("Current humidity " + humidty);
    console.log("Current Windspeed " + windSpeed);
    

  });

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
    console.log("temp " + temp);
    console.log("humidity " + humidty);
    console.log("Windspeed " + windSpeed);
    

    
    
  });

$(".button").on("click", function(){
// code to capture text from input box and save as var city

});

// ✓ User can search for weather reports by city using the openweathermap API.

// ✓ After searching for a city, the following information is displayed: current temperature, current humidity, windspeed, uv index, and 5 day forecast.

// ✓ Application uses icons to represent weather conditions.

// ✓ Application stores previously searched for cities in local storage and displays them to the user.

// ✓ Application loads last searched city forecast on page load.



// [orlando]

// [orlando, austin]