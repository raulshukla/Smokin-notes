// Initialize and add the map
function initMap() {
  // The location of Uluru
  var coords1 = { lat: -25.344, lng: 131.036 };
  var coords2 = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: coords1,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: coords1, map: map });
  var marker2 = new google.maps.Marker({ position: coords2, map: map });
}