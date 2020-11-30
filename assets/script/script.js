var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function weather(pos) {
    var crd = pos.coords;

    var lat = $(crd.latitude);
    var lon = $(crd.longitude);

    console.log(lat[0]);
    console.log(lon[0]);

    var queryURLCurrent = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat[0] + "&lon=" + lon[0] + "&appid=166a433c57516f51dfab1f7edaed8413";

        $.ajax({
          url: queryURLCurrent,
          method: "GET"
        })      
        .then(function(response2) {

          console.log(response2);
       
        var CurIconNum = (response2.current.weather[0]["icon"]);
        var currentWeather = $("<img class='weatherIcon'>");
        currentWeather.attr("src","http://openweathermap.org/img/wn/"+ CurIconNum +"@2x.png");

          // Get/Display Current Weather Detail
        var tempF = (response2.current.temp - 273.15) * 1.80 + 32;
        var pTemp = $("<div class='currentTemp'>").text("Current Weather : "+ tempF.toFixed(1) + " °F");

        $("#weather").append(pTemp);
        $(".currentTemp").append(currentWeather);

  
})
};

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function TopArticles(){
  var queryURLLocation = "https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key="
    +"aAwUrMpNSxxAcgqEhsuHLfWoXruPCkfX";
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURLLocation,
      method: "GET"
    })      
    .then(function(response) {

      console.log(response);
    
      for ( i = 0; i<15; i++) {

        var newsTitle = response.results[i].title;
        var newsAbstract = response.results[i].abstract;
        var newsURL = response.results[i].url;
        var newsImgSrc = response.results[i].media[0]["media-metadata"][2].url;

        var newsCard = $("<div class='w3-quarter newsCard w3-card-4'>")
        $(".topNews").append(newsCard);

        var newsImg = $("<img style='width:80%'>");
          newsImg.attr("src",newsImgSrc);
        var newsTit = $("<div class='newsTitle'>").text(newsTitle);
        var newsAbs = $("<div class='newsAbstract'>").text(newsAbstract);

        var newsCardDiv = document.querySelectorAll(".newsCard");

        $(newsCardDiv[i]).append(newsImg, newsTit, newsAbs)

      }
     
    });


  }
 


  
  navigator.geolocation.getCurrentPosition(weather, error, options);
  TopArticles();


// 2000@47.6918452,-122.2226413
    // clear out all items on window
        
    
       