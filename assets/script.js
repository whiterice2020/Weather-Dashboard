// vars
// URL should be in this format = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}"
// example "api.openweathermap.org/data/2.5/forecast?q= "City Var" "apiKey Var"{your api key}"
// var queryURL = "api.openweathermap.org/data/2.5/forecast?q=";
// test var for orlando full url
// queryURLCurrent = "api.openweathermap.org/data/2.5/weather?q= {city name} &appid= {your api key} ";
var queryURLCurrent = "https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=" + "eee27dfad5db9dce473a5293caa3df71";

// queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?appid= **api key** &lat=  **{lat}**  &lon=  **{lon}**";
// queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?appid= **api key** &lat=  **  &lon=  **Lon**";
// queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
var apiKey = "eee27dfad5db9dce473a5293caa3df71";
// var city ="$("#inputBox")";
var city = "Orlando";
// var lat = "";
// var lon = "";


// ?? document.ready(function)


// Getting Data from API Current Weather
$.ajax({
    url: queryURLCurrent,
    method: "GET"
  }).then(function(response) {
    var temp = response.main.temp;
    var humidty = response.main.humidity;
    var windSpeed = response.wind.speed;
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?appid=eee27dfad5db9dce473a5293caa3df71&lat=" + lat + "&lon=" + lon;
    // // Testing Response Data
    console.log(queryURLUV);
    console.log("Current temp " + temp);
    console.log("Current humidity " + humidty);
    console.log("Current Windspeed " + windSpeed);
    console.log(lat);
    console.log(lon);
    
    // Getting UV Data
    $.ajax({
      url: queryURLUV,
      method: "GET"
    }).then(function(response) {
      var UV = response.value;
      console.log(UV);
      var queryURL5Day = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=eee27dfad5db9dce473a5293caa3df71";
      
      // Getting 5 day Forecast Data
            $.ajax({
            url: queryURL5Day,
            method: "GET"
          }).then(function(response) {
            var temp5 = response.list[0].main.temp;
            var humidty5 = response.list[0].main.humidity;
            var windSpeed5 = response.list[0].wind.speed;
        // var uvIndex = response.main.temp; have to fix this
        // Testing Response Data
            console.log("5 day temp " + temp5);
            console.log("5 day humidity " + humidty5);
            console.log("5 day Windspeed " + windSpeed5);
            console.log("Current temp " + temp);
            console.log("Current humidity " + humidty);
            console.log("Current Windspeed " + windSpeed);
            console.log(lat);
            console.log(lon);

            $("#cityName").append(city);
              // Append the table row to the table body
            $("#currentTemp").append(" " + temp);
            $("#humidity").append(" " + humidty);
            $("#windSpeed").append(" " + windSpeed + " MPH");
            $("#uvIndex").append(" " + UV);
              

          });
  
  
  
  });
  
});

// Getting Data from API for 5 day forcast

// Getting Data from API for UV Index
// $.ajax({
//     url: queryURLUV,
//     method: "GET"
//   }).then(function(response) {
//     var temp = response.list[0].main.temp;
//     var humidty = response.list[0].main.humidity;
//     var windSpeed = response.list[0].wind.speed;
//     // var uvIndex = response.main.temp; have to fix this
// // Testing Response Data
//     console.log("temp " + temp);
//     console.log("humidity " + humidty);
//     console.log("Windspeed " + windSpeed);
    

    
    
//   });



$(".button").on("click", function(){
// code to capture text from input box and save as var city
  // preventing page from refreshing/button from submitting on form
    event.preventDefault();
    // This line will grab the text from the input box
    var city = $("cityInput").val().trim();
});

// ✓ User can search for weather reports by city using the openweathermap API.

// ✓ After searching for a city, the following information is displayed: current temperature, current humidity, windspeed, uv index, and 5 day forecast.

// ✓ Application uses icons to represent weather conditions.

// ✓ Application stores previously searched for cities in local storage and displays them to the user.

// ✓ Application loads last searched city forecast on page load.



// [orlando]

// [orlando, austin]