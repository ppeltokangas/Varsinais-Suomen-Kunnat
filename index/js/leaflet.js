$(document).ready(function() {
    let centerPoint = new L.LatLng(60.45, 22.26);
    let mymap = new L.Map('mapid').setView(centerPoint, 13);
    let osmOptions = {
        subdomains: ['a', 'b', 'c'],

    };

    let marker = new L.Marker([60.46, 22.27]).addTo(mymap);
    marker.bindPopup("Moro, oon popuppi").openPopup();

    let osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ', osmOptions);
    osm.addTo(mymap);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latLng);
    }

    mymap.on('click', onMapClick);
});