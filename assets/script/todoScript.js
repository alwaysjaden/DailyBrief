

// using moment.js display current date / day / year in Jumbotron
var contSec = document.getElementsByClassName("container");
var rowSec = document.getElementsByClassName("timeSec");
var divSec = document.querySelector("div");
var divSec = $(".container")
var timeSecValue = document.getElementsByClassName("time-block");
var descriptionBox = document.getElementsByClassName("description");
var currentHour= moment().format('HH');

console.log(currentHour);

 // current timeValue = currentHour 
function CurrentDate() {
    var d = new Date();
    var fmt1 = 'dddd MMMM Do ';
    var now = moment(d).format(fmt1); 
    // var currentHour= moment().format('HH');
    $("#currentDay").text(now);
    console.log(now);

    SavedSchedule ()

}

// need to convert theses to jQuey
    for ( var i=0; i<15; i++) {
        
        var rowDiv = $("<div class = 'w3-row' id = 'timeRow'>");
        divSec.append(rowDiv);
        // ser variable to select nth divs
        var timeblock = $(divSec).children('div').eq(i);
       
        //  Create Schedule input Section  
        var inputSec = $("<input class ='w3-twothird description textArea' type ='text' placeholder = 'Nothing TODO'>")
        inputSec.attr("id","schedule"+[i])
        
        // Change calss attribute of input box based on Current Time [ past ] [ present ] [ future ]
            // if ID < timeValue = past if ID = timeValue = current if ID > timeValue = future 
      
        //Create Save Button
        var inputEl = document.querySelectorAll("input");
        var saveBtn = $("<button class ='saveBtn' onclick='saveToLocal()'>").text("save");
        saveBtn.attr("style", "id = Btn"+[i]);
        // Append button to each row divs
        timeblock.append(inputSec,saveBtn);   

    };


    // Save input Value to local storage funtion
    function saveToLocal(){
        // forloop here !! lets Try
        // var timeblock = $(divSec).children('div').eq(i);
        var TodoList = {
            todo1: $("#schedule0").val(),
            todo2: $("#schedule1").val(),
            todo3: $("#schedule2").val(),
            todo4: $("#schedule3").val(),
            todo5: $("#schedule4").val(),
            todo6: $("#schedule5").val(),
            todo7: $("#schedule6").val(),
            todo8: $("#schedule7").val(),
            todo9: $("#schedule8").val(),
            todo10: $("#schedule9").val(),
            todo11: $("#schedule10").val(),
            todo12: $("#schedule11").val(),
            todo13: $("#schedule12").val(),
            todo14: $("#schedule13").val(),
            todo15: $("#schedule14").val(),
        }
       
    localStorage.setItem("schedule", JSON.stringify(TodoList));

    };

    // display local storage value function
    function SavedSchedule () {
        var allSchedules = localStorage.getItem("schedule"); 

        // for (var i = 0 ; i<allSchedules.length; i++){
        // var allSchedules = localStorage.getItem("schedule"); 
       // get schedule from Local Storeage to display saved schedule
       allSchedules = JSON.parse(allSchedules);
       $("#schedule0").attr("value", allSchedules.todo1);
       $("#schedule1").attr("value", allSchedules.todo2);
       $("#schedule2").attr("value", allSchedules.todo3);
       $("#schedule3").attr("value", allSchedules.todo4);
       $("#schedule4").attr("value", allSchedules.todo5);
       $("#schedule5").attr("value", allSchedules.todo6);
       $("#schedule6").attr("value", allSchedules.todo7);
       $("#schedule7").attr("value", allSchedules.todo8);
       $("#schedule8").attr("value", allSchedules.todo9);
       $("#schedule9").attr("value", allSchedules.todo10);
       $("#schedule10").attr("value", allSchedules.todo11);
       $("#schedule11").attr("value", allSchedules.todo12);
       $("#schedule12").attr("value", allSchedules.todo13);
       $("#schedule13").attr("value", allSchedules.todo14);
       $("#schedule14").attr("value", allSchedules.todo15);
       $("#schedule115").attr("value", allSchedules.todo16);


    // }
};
    CurrentDate()
    // SavedSchedule ()


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


      navigator.geolocation.getCurrentPosition(weather, error, options);

      
    
       



   
   
    
  

  


    




