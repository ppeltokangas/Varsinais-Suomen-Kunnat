$(document).ready(function() {
    let centerPoint = new L.LatLng(60.45, 22.4);
    let mymap = new L.Map('mapid').setView(centerPoint, 8);
    let osmOptions = {
        subdomains: ['a', 'b', 'c'],

    };

    let osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ', osmOptions);
    osm.addTo(mymap);
});