
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
var searchbox = document.getElementById("searchField").value;
console.log(searchbox);


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
    var icon = response.weather[0].icon;
    
    var queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?appid=eee27dfad5db9dce473a5293caa3df71&lat=" + lat + "&lon=" + lon;
    // // Testing Response Data
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    console.log(date);
            
    console.log(queryURLUV);
    console.log(icon);
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
      console.log("5dayurl" + queryURL5Day );
      
      // Getting 5 day Forecast Data
            $.ajax({
            url: queryURL5Day,
            method: "GET"
          }).then(function(response) {
            var temp5 = response.list[0].main.temp;
            var humidty5 = response.list[0].main.humidity;
            var windSpeed5 = response.list[0].wind.speed;
            var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                       
            
            var iconImg = $("<img>").attr("src", iconURL);
        
        // Testing Response Data
            console.log("5 day temp " + temp5);
            console.log("5 day humidity " + humidty5);
            console.log("5 day Windspeed " + windSpeed5);
            console.log("Current temp " + temp);
            console.log("Current humidity " + humidty);
            console.log("Current Windspeed " + windSpeed);
            console.log(lat);
            console.log(lon);

            $("#cityName").append("Orlando");
            $("#cityName").append(" " + " (" + date + ")");
            $("#cityName").append(iconImg);
            console.log(iconURL);
            
                
              // Append the weather data the body
            $("#currentTemp").append(" " + temp);
            $("#humidity").append(" " + humidty + "%");
            $("#windSpeed").append(" " + windSpeed + " MPH");
            $("#uvIndex").append(" " + UV);
            $("#day1").append(date);
            $("#day1").append("Temp: " + temp5);
            $("#day1").append("Humidity: " + humidty5 + "%");
            $("#day2").append(date);
            $("#day2").append("Temp: " + temp5);
            $("#day2").append("Humidity: " + humidty5 + "%");
            $("#day3").append(date);
            $("#day3").append("Temp: " + temp5);
            $("#day3").append("Humidity: " + humidty5 + "%");
            $("#day4").append(date);
            $("#day4").append("Temp: " + temp5);
            $("#day4").append("Humidity: " + humidty5 + "%");
            $("#day5").append(date);
            $("#day5").append("Temp: " + temp5);
            $("#day5").append("Humidity: " + humidty5 + "%");
                
              });
  
  
  
  });
  
});


$(".button").on("click", function(event){
// code to capture text from input box and save as var city
  // preventing page from refreshing/button from submitting on form
    event.preventDefault();
    // This line will grab the text from the input boxvar city = $(".form-control").val();
    var city = $(".form-control").val();
    console.log(city);
    
    
    
    // var city = $("cityInput").val().trim();
    
});

