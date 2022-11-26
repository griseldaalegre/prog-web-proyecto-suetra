function enviar() {

    swal({
        title: "¡ENVIADO!",
        text: "El formulario de afiliación se envío correctamente",
        icon: "success",
        button: "ACEPTAR",
    });
}


/*
const $d = document;

const $SelectProvincia = $d.getElementById("SelectProvincia");
const $SelectMunicipio = $d.getElementById("SelectMunicipio");
const $SelectLocalidad = $d.getElementById("SelectLocalidad");

/*

function provincias() {
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(response => response.json())
        .then(json => {
            
            let $options = `<option value="Seleccione una Provincia">Seleccione una Provincia</option>`;
    
            json.$SelectProvincia.forEach(element => $options +=  `<option value="${element.nombre}>${element.nombre}</option>`);
    
    $SelectProvincia.innerHTML = $options;
        
    })
            
}



function municipios(provincias) {
    fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincias}')
        .then()
        .then()
}

$SelectProvincia.addEventListener("change", e => {
    municipios(e.target.value);
    
})*/

/*
fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then(response => response.json())
    .then(data => {
        let labelProvincias = document.getElementById('SelectProvincia')
        let provincias = data.provincias
        for (let index = 0; index < provincias.length; index++) {
            const nombreProvincia = provincias[index];
            labelProvincias.innerHTML += `<option value="Seleccione una Provincia">${nombreProvincia.nombre}</option>`

        }
    });




fetch('https://apis.datos.gob.ar/georef/api/municipios')
    .then(response => response.json())
    .then(data => {
        let labelMunicipios = document.getElementById('SelectMunicipio')
        let municipios = data.municipios
        for (let index = 0; index < municipios.length; index++) {
            const nombreMunicipio = municipios[index];
            labelMunicipios.innerHTML += `<option value="Seleccione un Municipio">${nombreMunicipio.nombre}</option>`

        }
    });
/*    
fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then(response => response.json())
    .then(data => {
        let labelProvincias = document.getElementById('SelectProvincia')
        let provincias = data.provincias
        for (let index = 0; index < provincias.length; index++) {
            const nombreProvincia = provincias[index];
            labelProvincias.innerHTML += `<option value="Seleccione una Provincia">${nombreProvincia.nombre}</option>`

        }
    });

*/