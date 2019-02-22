$(document).ready(function() {

    class Kunnat {
        constructor() {
            this.map = undefined;
            this.osm = undefined;
            this.layers = [];
            this.layerGroups = {};
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
                    let kuntaNimi = geo.properties.name;
                    let lGroup = new L.LayerGroup();
                    if (geo.geometry.type === 'GeometryCollection') {
                        for (let polygon of geo.geometry.geometries) {
                            let kuntaPoly = [];
                            for (let coord of polygon.coordinates[0]) {
                                kuntaPoly.push(latLngSwapper(coord));
                            }
                            lGroup.addLayer(new L.Polygon(kuntaPoly));
                        }
                        this.layerGroups[kuntaNimi] = lGroup;
                        lGroup.addTo(this.map);
                    }
                    else if (geo.geometry.type === 'Polygon') {
                        let kuntaPoly = [];
                        for (let coord of geo.geometry.coordinates[0]) {
                            kuntaPoly.push(latLngSwapper(coord));
                        }
                        lGroup.addLayer(new L.Polygon(kuntaPoly));
                        this.layerGroups[kuntaNimi] = lGroup;
                        lGroup.addTo(this.map);
                    }
                }
            }
            catch(error) {
                console.error(error);
            }
        }
    }

    function latLngSwapper(lonLat) {
        let alkio = new L.LatLng(lonLat[1], lonLat[0]);
        return alkio;
    }    

    let kunnat = new Kunnat();
    kunnat.addMap('mapid', new L.LatLng(60.45, 22.4));
    kunnat.addOsm();
    kunnat.addLayers();
    console.log(kunnat.layerGroups);
});