var initialise = function(){
 var center = {lat: 55.8569, lng: -4.2440};
 var container = document.getElementById('main-map');
 var mainMap = new MapWrapper(container, center, 10);
 var hampden = '<p><b>Hampden Park</b> is the home of Scottish Football. Owned by Queens Park' +
 'Football club, but leased to the SFA thorugh a contract.</p>';
 var infowindow = new google.maps.InfoWindow({
   content: hampden
 });

 // mainMap.addMarker(center);

 var marker = mainMap.addMarker({lat: 55.8258, lng: -4.2520});
 marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);
  });
 mainMap.addClickEvent();

 var bounceButton = document.getElementById('button-bounce-markers');
 bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))

 var clickChicago = function(){
   var center = {lat: 41.8781, lng: -87.6297};
   mainMap.googleMap.setCenter(center);
}

 var chicago = document.getElementById('chicago');
 chicago.addEventListener('click', clickChicago)

 // navigator.geolocation.getCurrentPosition(success, error, options);

 var geo = function(){
   navigator.geolocation.getCurrentPosition(whereami);
 }

 function whereami(pos){
   var loc = pos.coords;
   var where = document.getElementById('where');
   where.innerText = "You are here - Latitude: " + loc.latitude + " longitude: " + loc.longitude;
   mainMap.addMarker({lat: loc.latitude, lng: loc.longitude});
 }

 var whereButton = document.getElementById('here');
 whereButton.addEventListener('click', geo);

}




window.addEventListener('load', initialise);
