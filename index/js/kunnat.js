//let kuntaLista = [];
//for (let kunta of kuntaInfo.features) {
//    kuntaLista.push(kunta.properties.name);
//}
//console.log(JSON.stringify(kuntaLista));

//function haeKunta(lista) {
    //let a = 0;
    //let kunta = "Turku";
    //console.log(lista.length);
    //for (let i = 0; i < lista.length; i++) {
    //    kunta = lista[i];
    //    //console.log(lista[i]);
    //    console.log("haeKunta() = " + kunta);
    //    //a++;
    //    break;  
    //}
    //console.log(a);
    //console.log("@haeKunta exit@");
    //return kunta;
//};


//function coordinateParse(kunnat) {
//    console.log("@coordinateParse@");
//    for (let geo of kuntaInfo.features) {
//        if (geo.properties.name === haeKunta(kunnat) && geo.geometry.type !== "GeometryCollection") {
//            console.log("@Single polygon@");
//            return geo.geometry.coordinates[0];
//            }
//        else if (geo.properties.name === haeKunta(kunnat) && geo.geometry.type === "GeometryCollection") {
//            console.log("@Multi Polygon@");
//            for (let i = 0; i < geo.geometry.geometries[i].coordinates.length; i++) {
//                return geo.geometry.geometries[i].coordinates[0];
//            }
//        }
//    }  
//}

function latLngSwapper(lonLat) {
    let alkio = new L.LatLng(lonLat[1], lonLat[0]);
    return alkio;
}


