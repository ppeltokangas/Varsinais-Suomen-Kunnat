function kuntaParse(kunta) {
    for (let feature of kuntaInfo.features) {
        if (feature.properties.name === kunta) {
            return feature.geometry.coordinates[0];
        }
    }
}

function testi(a) {
    for (let geo of kuntaInfo.features) {
        if (geo.properties.name === a) {
            console.log(geo.geometry);
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

