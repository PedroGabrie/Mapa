// This is a JavaScript file
$(document).on("click", "#btn", function(){
     var onSuccess = function(position){
        L.mapquest.key = 'xkw8mHAiA6S1W8ITnMi0fmDlxfJTiZpX';
        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });   

        map.addControl(L.mapquest.control());
        }

        navigator.geolocation.getCurrentPosition(onSuccess);
   });

