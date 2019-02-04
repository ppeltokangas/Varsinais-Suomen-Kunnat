$(document).ready(function() {
    let bounds = coordinateParse(kuntaLista);//kuntaParse("Aura");
    let lBounds = latLngSwapper(bounds);
    //console.log(bounds);

    let centerPoint = new L.LatLng(60.45, 22.4);
    var mymap = new L.Map('mapid').setView(centerPoint, 8);
    let osmOptions = {
        subdomains: ['a', 'b', 'c'],
    };
    let osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ', osmOptions);
    osm.addTo(mymap);
    //console.log(lBounds);

    //console.log(kuntaParse("Aura"));
    function drawPoly(bounds, color, map) {
            let polygon = new L.Polygon(bounds, {color: color}).addTo(map);
    }
        //console.log(kuntaNimi);
        //for (let i = 0; i < )
    

    drawPoly(lBounds, "blue", mymap);
    //testi("Turku");
});