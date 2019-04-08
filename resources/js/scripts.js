//
const inputEcua = document.getElementById('ecua-o');
const inputEcuah = document.getElementById('ecuah-o');
const inputHor = document.getElementById('hor-o');
const inputEcli = document.getElementById('ecli-o');
//
const inputGradHor = document.getElementById('grad-hor-o');
const inputGradSexa = document.getElementById('grad-sex-o');
//
const inputGrados = document.getElementById('grados');
const inputMinutos = document.getElementById('minutos');
const inputSegundos = document.getElementById('segundos');
//
const inputHoras = document.getElementById('horas');
const inputMinutosR = document.getElementById('minutos-r');
const inputSegundosR = document.getElementById('segundos-r');

function clickEcuaOrEcuahInput () {
    //
    inputGradHor.removeAttribute("disabled");
    inputGradSexa.removeAttribute("disabled");

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