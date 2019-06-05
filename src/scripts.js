'use strict'

let sunIsShining = true,
    someButton = document.getElementById('butt');

    document.body.style.background = 'blue'

 
// sunIsShining = true


function getWeather() {
if (sunIsShining === true) {
    document.body.style.background = 'black'
    someButton.innerHTML = 'on'
    sunIsShining = false
    document.getElementById('sun').id = 'moon'
    
    console.log('moony')
} else if (sunIsShining === false) {
    document.body.style.background = 'blue'
    sunIsShining = true    
    someButton.innerHTML = 'off'
    document.getElementById('moon').id = 'sun'
    console.log('sunny')
}

}

 someButton.addEventListener('click', getWeather)