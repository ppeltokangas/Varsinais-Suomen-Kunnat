$(document).ready(function() {
    let bounds = kuntaParse("Aura");
    let lBounds = latLngSwapper(bounds);

    let centerPoint = new L.LatLng(60.45, 22.4);
    var mymap = new L.Map('mapid').setView(centerPoint, 8);
    let osmOptions = {
        subdomains: ['a', 'b', 'c'],
    };
    let osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ', osmOptions);
    osm.addTo(mymap);

    console.log(kuntaParse("Aura"));

    let polygon = new L.Polygon(lBounds, {color: 'red'}).addTo(mymap);

    testi("Turku");
});