// load

const load = document.querySelector('.load');

window.addEventListener('load', () =>{
    load.classList.toggle('loadDisplayNone');
});


// feu rouge

const rouge = document.querySelector('.rouge');
const vert = document.querySelector('.vert');
const orange = document.querySelector('.orange');

setInterval(()=>{
    setTimeout(()=>{
        rouge.classList.add('rougeOk');
        vert.classList.remove('vertOk');
    }, 0);
    
    setTimeout(()=>{
        rouge.classList.remove('rougeOk');
        orange.classList.add('orangeOk');
    }, 5000);
    
    setTimeout(()=>{
        orange.classList.remove('orangeOk');
        vert.classList.add('vertOk');
    }, 7000);
}, 12000);

// clignotement

const paragrapheDisplayClignotement = document.querySelector('.paragrapheDisplayClignotement');

setInterval(()=>{
    setTimeout(()=>{
        paragrapheDisplayClignotement.classList.add('displayNone');
    }, 0);
    setTimeout(()=>{
        paragrapheDisplayClignotement.classList.remove('displayNone');
    }, 500);
}, 1000);

// div temp

const divDisplayTempActif = document.querySelector('.divDisplayTempActif');

setTimeout(()=>{
    divDisplayTempActif.classList.add('displayNone')
}, 3500);

// barre de chargement

// rien

// arc en ciel

const arcEnCiel = document.querySelector('.arcEnCiel');

colorTableau = [
    '#FF2E2E',
    '#FF8A2E',
    '#ECFF2E',
    '#97FF2E',
    '#2EFF5E',
    '#2EFFD9',
    '#2E97FF',
    '#542EFF',
    '#DC2EFF',
    '#FF2EC0'
];

setInterval(()=>{
    setInterval(()=>{
        for (let i = 0; i < colorTableau.length; i++) {
            let colorPick = arcEnCiel.style.background = colorTableau[i];  
        }
    }, 500)
}, 5000);