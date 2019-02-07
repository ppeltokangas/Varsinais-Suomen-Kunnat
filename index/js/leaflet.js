$(document).ready(function() {
    let bounds = coordinateParse(kuntaLista);
    console.log(bounds);
    let lBounds = latLngSwapper(bounds);

    let centerPoint = new L.LatLng(60.45, 22.4);
    var mymap = new L.Map('mapid').setView(centerPoint, 8);
    let osmOptions = {
        subdomains: ['a', 'b', 'c'],
    };
    let osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ', osmOptions);
    osm.addTo(mymap);
    //console.log(lBounds);

    function drawPoly(bounds, colour, map) {
        let polygon = new L.Polygon(bounds, {color: colour}).addTo(map);
    }

    drawPoly(lBounds, "blue", mymap);
});