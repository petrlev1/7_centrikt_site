var map;
function initMap() {
    
    var myLatLng = {lat: 55.722592, lng: 37.702928};

  var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 55.719478, lng: 37.713901 },
      zoom: 15,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.CENTER
      },
      scaleControl: false,
      streetViewControl: false,
      scrollwheel: false
      
      

  });
    
    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

}