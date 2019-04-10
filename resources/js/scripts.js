const gradosLat = document.getElementById('grados-lat');
const minutosLat = document.getElementById('minutos-lat');
const segundosLat = document.getElementById('segundos-lat');

const labelOI = document.getElementById('label-origen-i');
const labelOD = document.getElementById('label-origen-d')
const labelDI = document.getElementById('label-destino-i');
const labelDD = document.getElementById('label-destino-d');

const labelGradOI = document.getElementById('label-grad-oi');
const labelGradOD = document.getElementById('label-grad-od');
const labelGradDI = document.getElementById('label-grad-di');
const labelGradDD = document.getElementById('label-grad-dd');


// Componentes coordenadas origen
//
const radioEcuaO = document.getElementById('ecua-o');
const radioEcuahO = document.getElementById('ecuah-o');
const radioHoriO = document.getElementById('hor-o');
const radioEcliO = document.getElementById('ecli-o');
const radioGalacO = document.getElementById('galac-o');
//
const radioHoraO = document.getElementById('hora-o');
const radioSexaO = document.getElementById('sexa-o');
//
const gradoOI = document.getElementById('grado-hora-oi');
const minutoOI = document.getElementById('minuto-oi');
const segundoOI = document.getElementById('segundo-oi');
//
const gradoOD = document.getElementById('grado-hora-od');
const minutoOD = document.getElementById('minuto-od');
const segundoOD = document.getElementById('segundo-od');

// Componentes coordenadas destino
//
const radioEcuaD = document.getElementById('ecua-d');
const radioEcuahD = document.getElementById('ecuah-d');
const radioHoriD = document.getElementById('hor-d');
const radioEcliD = document.getElementById('ecli-d');
const radioGalacD = document.getElementById('galac-d');
//
const radioHoraD = document.getElementById('hora-d');
const radioSexaD = document.getElementById('sexa-d');
//
const gradoDI = document.getElementById('grado-hora-di');
const minutoDI = document.getElementById('minuto-di');
const segundoDI = document.getElementById('segundo-di');
//
const gradoDD = document.getElementById('grado-hora-dd');
const minutoDD = document.getElementById('minuto-dd');
const segundoDD = document.getElementById('segundo-dd');

// Botón calcular
//
const botonCalc = document.getElementById('btn-cal');


//
function clickHorEcliGalac (radioHori, radioEcli, radioHora, radioSexa, gradoI, minutoI, segundoI, gradoD, minutoD, segundoD, labelGradI, labelGradD, labelI, labelD) {
    radioHora.checked = false;
    radioSexa.checked = false;
    radioHora.setAttribute("disabled", "");
    radioSexa.setAttribute("disabled", "");

    gradoI.removeAttribute("disabled")
    minutoI.removeAttribute("disabled")
    segundoI.removeAttribute("disabled")
    
    gradoD.removeAttribute("disabled")
    minutoD.removeAttribute("disabled")
    segundoD.removeAttribute("disabled")

    labelGradI.innerText = "Grados";
    labelGradD.innerText = "Grados";
    gradoI.setAttribute("max", "360");
    gradoD.setAttribute("max", "360");

    // Horizontales
    // Acimut(A), Altura (h)

    // Eclípticas
    // Longitud eclíptica (λ), Latitud eclíptica (β)

    // Galácticas
    // Longitud galáctica(l), Latitud galáctica (b)

    if (radioHori.checked) {
        labelI.innerText = "Acimut (A)";
        labelD.innerText = "Altura (h)";
    } else if (radioEcli.checked) {
        labelI.innerText = "Longitud eclíptica (λ)";
        labelD.innerText = "Latitud eclíptica (β)";
    } else {
        labelI.innerText = "Longitud galáctica(l)";
        labelD.innerText = "Latitud galáctica (b)";
    }
}

//
function clickEcuaOrEcuah (radioEcua, radioHora, radioSexa, gradoI, minutoI, segundoI, gradoD, minutoD, segundoD, labelI, labelD) {
    if (!radioHora.checked && !radioSexa.checked) {
        radioHora.checked = false;
        radioSexa.checked = false;
        
        radioHora.removeAttribute("disabled");
        radioSexa.removeAttribute("disabled");

        gradoI.setAttribute("disabled", "")
        minutoI.setAttribute("disabled", "")
        segundoI.setAttribute("disabled", "")
        
        gradoD.setAttribute("disabled", "")
        minutoD.setAttribute("disabled", "")
        segundoD.setAttribute("disabled", "")
    }

    // Ecuatoriales 
    // Ascensión recta (a), Declinación (d)

    // Ecuatoriales horarias 
    // Ángulo horario (H), Declinación (d)

    if (radioEcua.checked) {
        labelI.innerText = "Ascensión recta (a)";
        labelD.innerText = "Declinación (d)";
    } else {
        labelI.innerText = "Ángulo horario (H)";
        labelD.innerText = "Declinación (d)";
    }
}


function clickGradHorOrSexa (radioHora, gradoI, minutoI, segundoI, gradoD, minutoD, segundoD, labelGradI, labelGradD) {
    gradoI.removeAttribute("disabled")
    minutoI.removeAttribute("disabled")
    segundoI.removeAttribute("disabled")
    
    gradoD.removeAttribute("disabled")
    minutoD.removeAttribute("disabled")
    segundoD.removeAttribute("disabled")

    if (radioHora.checked) {
        labelGradI.innerText = "Horas";
        labelGradD.innerText = "Horas";
        gradoI.setAttribute("max", "60");
        gradoD.setAttribute("max", "60");
    } else {
        labelGradI.innerText = "Grados";
        labelGradD.innerText = "Grados";
        gradoI.setAttribute("max", "360");
        gradoD.setAttribute("max", "360");
    }
}

//
radioEcuaO.addEventListener('click', 
    () => clickEcuaOrEcuah(
        radioEcuaO, radioHoraO, radioSexaO, gradoOI, minutoOI, segundoOI, gradoOD, minutoOD, segundoOD, labelOI, labelOD
    )
);
radioEcuahO.addEventListener('click', 
    () => clickEcuaOrEcuah(
        radioEcuaO, radioHoraO, radioSexaO, gradoOI, minutoOI, segundoOI, gradoOD, minutoOD, segundoOD, labelOI, labelOD
    )
);
radioHoriO.addEventListener('click', 
    () => clickHorEcliGalac(
        radioHoriO, radioEcliO, radioHoraO, radioSexaO, gradoOI, minutoOI, segundoOI, gradoOD, minutoOD, segundoOD, labelGradOI, labelGradOD, labelOI, labelOD
    )
);
radioEcliO.addEventListener('click', 
    () => clickHorEcliGalac(
        radioHoriO, radioEcliO, radioHoraO, radioSexaO, gradoOI, minutoOI, segundoOI, gradoOD, minutoOD, segundoOD, labelGradOI, labelGradOD, labelOI, labelOD
    )
);
radioGalacO.addEventListener('click', 
    () => clickHorEcliGalac(
        radioHoriO, radioEcliO, radioHoraO, radioSexaO, gradoOI, minutoOI, segundoOI, gradoOD, minutoOD, segundoOD, labelGradOI, labelGradOD, labelOI, labelOD
    )
);
//
radioHoraO.addEventListener('click', 
    () => clickGradHorOrSexa(
        radioHoraO, gradoOI, minutoOI, segundoOI, gradoOD, minutoOD, segundoOD, labelGradOI, labelGradOD
    )
);
radioSexaO.addEventListener('click', 
    () => clickGradHorOrSexa(
        radioHoraO, gradoOI, minutoOI, segundoOI, gradoOD, minutoOD, segundoOD, labelGradOI, labelGradOD
    )
);

//
radioEcuaD.addEventListener('click', 
    () => clickEcuaOrEcuah(
        radioEcuaD, radioHoraD, radioSexaD, gradoDI, minutoDI, segundoDI, gradoDD, minutoDD, segundoDD, labelDI, labelDD
    )
);
radioEcuahD.addEventListener('click', 
    () => clickEcuaOrEcuah(
        radioEcuaD, radioHoraD, radioSexaD, gradoDI, minutoDI, segundoDI, gradoDD, minutoDD, segundoDD, labelDI, labelDD
    )
);
radioHoriD.addEventListener('click', 
    () => clickHorEcliGalac(
        radioHoriD, radioEcliD, radioHoraD, radioSexaD, gradoDI, minutoDI, segundoDI, gradoDD, minutoDD, segundoDD, labelGradDI, labelGradDD, labelDI, labelDD
    )
);
radioEcliD.addEventListener('click', 
    () => clickHorEcliGalac(
        radioHoriD, radioEcliD, radioHoraD, radioSexaD, gradoDI, minutoDI, segundoDI, gradoDD, minutoDD, segundoDD, labelGradDI, labelGradDD, labelDI, labelDD
    )
);
radioGalacD.addEventListener('click', 
    () => clickHorEcliGalac(
        radioHoriD, radioEcliD, radioHoraD, radioSexaD, gradoDI, minutoDI, segundoDI, gradoDD, minutoDD, segundoDD, labelGradDI, labelGradDD, labelDI, labelDD
    )
);
//
radioHoraD.addEventListener('click', 
    () => clickGradHorOrSexa(
        radioHoraD, gradoDI, minutoDI, segundoDI, gradoDD, minutoDD, segundoDD, labelGradDI, labelGradDD
    )
);
radioSexaD.addEventListener('click', 
    () => clickGradHorOrSexa(
        radioHoraD, gradoDI, minutoDI, segundoDI, gradoDD, minutoDD, segundoDD, labelGradDI, labelGradDD
    )
);


// ****************************************************************************************************
// ****************************************************************************************************
// ****************************************************************************************************
// ****************************************************************************************************
// ****************************************************************************************************

