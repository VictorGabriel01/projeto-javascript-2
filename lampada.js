const turnOnOff = document.getElementById('turnOnOff');

const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}
// ! significa não
function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff () {
    if (turnOnOff.textContent == 'ligar') {
        lampOn();
        turnOnOff.textContent = 'desligar';
    }else {
        lampOff();
        turnOnOff.textContent = 'ligar';
    }
}


turnOnOff.addEventListener('click', lampOnOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);