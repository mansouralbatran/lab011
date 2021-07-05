'use strict'
let countinerel = document.getElementById('countiner');
let firel = document.getElementById('fir');
let secel = document.getElementById('sec');
let thiel = document.getElementById('thi');
let attemptsEl = document.getElementById('attempts');

let resel = document.getElementById('res');

let maxattempts = 25;

let attempts = 1;


let past = [];




let matrialname = [];
let views = [];
let votes = [];


let matrials = [];
let matrialimag = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'breakfast.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']

function matrial(slecedtmatrial) {
    this.matname = slecedtmatrial.split('.')[0];
    this.matimage = 'pi/' + slecedtmatrial;
    this.vot = 0;
    this.vew = 0;



    matrials.push(this);
    matrialname.push(this.matname);

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
   
    while (firindex === secindex || secindex === thiindex || firindex === thiindex||past.includes(firindex)||past.includes(thiindex)||past.includes(secindex)) {
        firindex = randomindex();
        secindex = randomindex();
        thiindex = randomindex();

    }
    // past.push(firindex);
    past=[firindex,secindex,thiindex];
    
 

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
function rplecaterender(arrayIn) {
    return arrayIn.every(function (element, index) {
        return !index || element !== arrayIn[index - 1];
    });
}


reanderrandomimg();

let buttonel = document.getElementById('button');
firel.addEventListener('click', handclicks);
secel.addEventListener('click', handclicks);
thiel.addEventListener('click', handclicks);


reanderrandomimg();

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
        firel.removeEventListener('click', handclicks);
        secel.removeEventListener('click', handclicks);
        thiel.removeEventListener('click', handclicks);
        // for (let i = 0; i < matrials.length; i++) {
        //     let ulel = document.getElementById('res');
        //     let liel = document.createElement('li');
        //     liel.textContent = matrials[i].matname + ' has ' + matrials[i].vot + ' vots and' + matrials[i].vew + 'vews'
        //     ulel.appendChild(liel);
        //     votes.push(matrials[i].vot );
        //     views.push( matrials[i].vew);
    }


    buttonel.addEventListener("click", haclicks);
    function haclicks(event) {
        let ulel = document.getElementById('res');
        ulel.innerHTML = '';
        for (let i = 0; i < matrials.length; i++) {

            let liel = document.createElement('li');
            liel.textContent = matrials[i].matname + ' has ' + matrials[i].vot + ' vots and' + matrials[i].vew + 'vews'
            ulel.appendChild(liel);
            votes.push(matrials[i].vot);
            views.push(matrials[i].vew);

        }


        renderchart();
    } attempts++;





}

function renderchart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: matrialname,
            datasets: [{
                label: '# of Votes',
                data: votes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 5
            },
            {
                label: '# of views',
                data: views,
                backgroundColor: [
                    'rgba(220, 300 ,150, 0.9)',
                ],
                borderColor: [
                    'rgba(220, 300, 150, 0.9)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
