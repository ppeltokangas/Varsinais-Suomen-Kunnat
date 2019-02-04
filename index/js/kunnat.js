//function kuntaParse(kunnat) {
//    for (let feature of kuntaInfo.features) {
//        if (feature.properties.name === kunnat) {
//            return feature.geometry.coordinates[0];
//        }
//    }
//}
//
let kuntaLista = [];
for (let kunta of kuntaInfo.features) {
    kuntaLista.push(kunta.properties.name);
}
console.log(JSON.stringify(kuntaLista));

function haeKunta(lista) {
    let kunta = "";
    for (let i = 0; i < lista.length; i++) {
        kunta = lista[i];
        console.log(kunta);
        break;
        }    
    return kunta;
};

function coordinateParse(kunnat) {
    //let a = haeKunta(kunnat);
    let coordinates = [];
    for (let geo of kuntaInfo.features) {
        console.log("Hop");
        if (geo.properties.name === haeKunta(kunnat) && geo.geometry.type !== "GeometryCollection") {
            console.log("Hep");
            //console.log(geo.geometry.coordinates[0]);
            return geo.geometry.coordinates[0];
            }
        else if (geo.properties.name === haeKunta(kunnat)) {
            //console.log(geo.geometry.geometries);
            for (let i = 0; i < geo.geometry.geometries.length; i++) {
                coordinates[i] = geo.geometry.geometries[i].coordinates[0];
            }
            //console.log(coordinates);
            console.log("Hip");
            return coordinates[0];
            //console.log(geo.geometry.geometries.length);
            //console.log(coordinates[0]);
            //return coordinates;
        }
    }
    
}

function latLngSwapper(lonLat) {
    let latLngs = [];
    for (let i = 0; i < lonLat.length; i++) {
        let alkio = new L.LatLng(lonLat[i][1], lonLat[i][0]);
        latLngs.push(alkio);
    }
    return latLngs;
}

