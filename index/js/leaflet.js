$(document).ready(function() {

    class Kunnat {
        constructor() {
            this.map = undefined;
            this.osm = undefined;
            this.layer = undefined;
            this.layerGroup = undefined;
        }

        addMap(mapId, centerPoint) {
            this.map = new L.Map(mapId).setView(centerPoint, 8);
            return this.map;
        }

        addOsm() {
            let osmOptions = {
                subdomains: ['a', 'b', 'c']
            }
            this.osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ', osmOptions);
            this.osm.addTo(this.map);
        }

        addLayers() {
            try {    
                for (let geo of geoJsonCollection.features) {
                    if (geo.geometry.type === 'GeometryCollection') {
                        let muuttuja = new L.LayerGroup();
                        for (let polygon of geo.geometry.geometries) {
                            let taulukko = [];
                            for (let coord of polygon.coordinates[0]) {
                                taulukko.push(latLngSwapper(coord));
                            }
                            muuttuja.addLayer(new L.Polygon(taulukko));
                        }
                        //lconsole.log(muuttuja.getLayers());
                        muuttuja.addTo(this.map);
                        break;
                    }
                    else if (geo.geometry.type === 'Polygon') {
                        //let notGeoColl = new L.LayerGroup();
                        let taulukko = [];
                        for (let coord of geo.geometry.coordinates[0]) {
                            taulukko.push(latLngSwapper(coord));
                        }
                        console.log(taulukko[0]);
                        console.log(taulukko[taulukko.length-1]);
                        taulukko.pop();
                    
                        //console.log(taulukko);
                        new L.Polygon(taulukko).addTo(this.map);
                        //notGeoColl.addLayer(new L.Polygon(taulukko)).addTo(this.map);
                        //notGeoColl.addTo(this.map);
                        break;
                        //console.log(notGeoColl);
                    }
                }
            }
            catch(error) {
                console.log(error);
            }
        }
    }



    let kartta = new Kunnat();
    kartta.addMap('mapid', new L.LatLng(60.45, 22.4));
    kartta.addOsm();
    kartta.addLayers();
    //kartta.drawPoly(kartta.layer, "blue", kartta.map);
    //kartta.drawPoly(kartta.layerGroup, "blue", kartta.map);
    console.log(kartta.map);
});