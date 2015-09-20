// cобытия на форме

var form = document.querySelector("form");
var date_in = document.querySelector("#date_in");            
var date_out = document.querySelector("#date_out");            
var cnt_adult = document.querySelector("#people-adult");
var cnt_children = document.querySelector("#people-children");

form.addEventListener("submit", function(event){                
    event.preventDefault();
  /*  
    console.log("Входные данные для поиска жилья в Седоне");
    console.log("Дата заезда:"+date_in.value);
    console.log("Дата выезда:"+date_out.value);
    console.log("Количество взрослых:"+cnt_adult.value);
    console.log("Количество детей:"+cnt_children.value);                               
   */    
}); 

// Отрисовка карты

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 34.87054656, lng: -111.76295484} 
  });
}   