'use strict'
let countinerel = document.getElementById('countiner');
let firel = document.getElementById('fir');
let secel = document.getElementById('sec');
let thiel = document.getElementById('thi');
let attemptsEl = document.getElementById('attempts');

let resel = document.getElementById('res');

let maxattempts = 25;

let attempts = 1;

let matrials = [];
let matrialimag = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'breakfast.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']

function matrial(slecedtmatrial) {
    this.matname = slecedtmatrial.split('.')[0];
    this.matimage = 'pi/' + slecedtmatrial;
    this.vot = 0;
    this.vew = 0;



    matrials.push(this);


}

for (let i = 0; i < matrialimag.length; i++) {
    new matrial(matrialimag[i]);

} console.log(matrials);
function randomindex() {
    return Math.floor(Math.random() * matrials.length);
}
let firindex;
let secindex;
let thiindex;
function reanderrandomimg() {


    firindex = randomindex();
    secindex = randomindex();
    thiindex = randomindex();

    while (firindex===secindex||secindex===thiindex||firindex===thiindex) {
        firindex = randomindex();
        secindex = randomindex();
        thiindex = randomindex();
        
    }

    firel.setAttribute('src', matrials[firindex].matimage);
    secel.setAttribute('src', matrials[secindex].matimage);
    thiel.setAttribute('src', matrials[thiindex].matimage);
    firel.setAttribute('title', matrials[firindex].matname);
    secel.setAttribute('title', matrials[secindex].matname);
    thiel.setAttribute('title', matrials[thiindex].matname);
    firel.setAttribute('alt', matrials[firindex].matname);
    secel.setAttribute('alt', matrials[secindex].matname);
    thiel.setAttribute('alt', matrials[thiindex].matname);
    matrials[firindex].vew++;
    matrials[secindex].vew++;
    matrials[thiindex].vew++;
}
reanderrandomimg();

firel.addEventListener('click', handclicks);
secel.addEventListener('click', handclicks);
thiel.addEventListener('click', handclicks);




function handclicks(event) {
    if (attempts <= maxattempts) {
        let checkedimag = event.target.id;
        if (checkedimag = 'fir') {
            matrials[firindex].vot++
        } else if (checkedimag = 'sec') {
            matrials[secindex].vot++
        } else if (checkedimag = 'thi') {
            matrials[thiindex].vot++
        }
        reanderrandomimg();

    } else {
        for (let i = 0; i < matrials.length; i++) {
            let ulel = document.getElementById('res');
            let liel = document.createElement('li');
            liel.textContent = matrials[i].matname + ' has ' + matrials[i].vot + ' vots and' + matrials[i].vew + 'vews'
             
            ulel.appendChild(liel);
        }  firel.removeEventListener('click', handclicks);
           secel.removeEventListener('click', handclicks);
           thiel.removeEventListener('click', handclicks);


    }   attempts++ ;





}