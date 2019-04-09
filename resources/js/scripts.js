

// Componentes coordenadas origen
//
const inputEcuaO = document.getElementById('ecua-o');
const inputEcuahO = document.getElementById('ecuah-o');
const inputHorO = document.getElementById('hor-o');
const inputEcliO = document.getElementById('ecli-o');
const inputGalacO = document.getElementById('galac-o');
//
const inputGradHoraO = document.getElementById('hora-o');
const inputGradSexaO = document.getElementById('sexa-o');
//
const inputGradoHoraOI = document.getElementById('grado-hora-oi');
const inputMinutoOI = document.getElementById('minuto-oi');
const inputSegundoOI = document.getElementById('segundos-oi');
//
const inputGradoHoraOD = document.getElementById('grado-hora-od');
const inputMinutoOD = document.getElementById('minuto-od');
const inputSegundoOD = document.getElementById('segundo-od');

// Componentes coordenadas destino
//
const inputEcuaD = document.getElementById('ecua-d');
const inputEcuahD = document.getElementById('ecuah-d');
const inputHorD = document.getElementById('hor-d');
const inputEcliD = document.getElementById('ecli-d');
//
const inputGradHoraD = document.getElementById('hora-d');
const inputGradSexaD = document.getElementById('sexa-d');
//
const inputGradoHoraDI = document.getElementById('grado-hora-di');
const inputMinutoDI = document.getElementById('minuto-di');
const inputSegundoDI = document.getElementById('segundo-di');
//
const inputGradoHoraDD = document.getElementById('grado-hora-dd');
const inputMinutoDD = document.getElementById('minuto-dd');
const inputSegundoDD = document.getElementById('segundo-dd');

function clickEcuaOrEcuahOrigen () {
    //
    inputGradHorO.removeAttribute("disabled");
    inputGradSexaO.removeAttribute("disabled");

    //
    if (inputGradHor.checked) {
        clickGradHorInput();
    } else if (inputGradSexa.checked) {
        clickGradSexaInput();
    } else {
        clickEcuaOrEcuahDefaultInput();
    }
}

function clickEcuaOrEcuahDefaultInput () {
    //
    inputGrados.setAttribute("disabled", "");
    inputMinutos.setAttribute("disabled", "");
    inputSegundos.setAttribute("disabled", "");
    //
    inputHoras.setAttribute("disabled", "");
    inputMinutosR.setAttribute("disabled", "");
    inputSegundosR.setAttribute("disabled", "");
}

function clickHorOrEcliInput () {
    // 
    inputGradHor.checked = false;
    inputGradSexa.checked = false;
    inputGradHor.setAttribute("disabled", "");
    inputGradSexa.setAttribute("disabled", "");
    //
    inputHoras.setAttribute("disabled", "");
    inputMinutosR.setAttribute("disabled", "");
    inputSegundosR.setAttribute("disabled", "");
    //
    inputGrados.removeAttribute("disabled");
    inputMinutos.removeAttribute("disabled");
    inputSegundos.removeAttribute("disabled");
}

function clickGradHorInput () {
    //
    inputHoras.removeAttribute("disabled");
    inputMinutosR.removeAttribute("disabled");
    inputSegundosR.removeAttribute("disabled");
    //
    inputGrados.setAttribute("disabled", "");
    inputMinutos.setAttribute("disabled", "");
    inputSegundos.setAttribute("disabled", "");
}

function clickGradSexaInput () {
    //
    inputGrados.removeAttribute("disabled");
    inputMinutos.removeAttribute("disabled");
    inputSegundos.removeAttribute("disabled");
    //
    inputHoras.setAttribute("disabled", "");
    inputMinutosR.setAttribute("disabled", "");
    inputSegundosR.setAttribute("disabled", "");
}

inputEcua.addEventListener('click', () => clickEcuaOrEcuahInput());
inputEcuah.addEventListener('click', () => clickEcuaOrEcuahInput());
inputHor.addEventListener('click', () => clickHorOrEcliInput());
inputEcli.addEventListener('click', () => clickHorOrEcliInput());
inputGradHor.addEventListener('click', () => clickGradHorInput());
inputGradSexa.addEventListener('click', () => clickGradSexaInput());