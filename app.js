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

// let matrials = [];
matrial.matrials = [];


function saveToLocalStorage() {
    let data = JSON.stringify(matrial.matrials);
    localStorage.setItem('mate', data);
}
function readFromLocalStorage() {
    let stringObj = localStorage.getItem('mate');
    console.log(stringObj);
    let normalObj = JSON.parse(stringObj);
    // console.log(normalObj);
    if (normalObj ) {
        matrial.matrials = normalObj;
        // reanderrandomimg();
    }
    // console.log(Coffee.drinks);
}
// readFromLocalStorage();



let matrialimag = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'breakfast.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']

function matrial(slecedtmatrial) {
    this.matname = slecedtmatrial.split('.')[0];
    this.matimage = 'pi/' + slecedtmatrial;
    this.vot = 0;
    this.vew = 0;


    matrial.matrials.push(this)
    // matrials.push(this);
    matrialname.push(this.matname);



}






for (let i = 0; i < matrialimag.length; i++) {
    new matrial(matrialimag[i]);

}






// console.log(matrial.matrials,"mate");


// console.log(matrials);
function randomindex() {
    return Math.floor(Math.random() * matrial.matrials.length);
}
let firindex;
let secindex;
let thiindex;
function reanderrandomimg() {


    firindex = randomindex();
    secindex = randomindex();
    thiindex = randomindex();

    while (firindex === secindex || secindex === thiindex || firindex === thiindex || past.includes(firindex) || past.includes(thiindex) || past.includes(secindex)) {
        firindex = randomindex();
        secindex = randomindex();
        thiindex = randomindex();

    }
    // past.push(firindex);
    past = [firindex, secindex, thiindex];



    firel.setAttribute('src', matrial.matrials[firindex].matimage);
    secel.setAttribute('src', matrial.matrials[secindex].matimage);
    thiel.setAttribute('src', matrial.matrials[thiindex].matimage);
    firel.setAttribute('title', matrial.matrials[firindex].matname);
    secel.setAttribute('title', matrial.matrials[secindex].matname);
    thiel.setAttribute('title', matrial.matrials[thiindex].matname);
    firel.setAttribute('alt', matrial.matrials[firindex].matname);
    secel.setAttribute('alt', matrial.matrials[secindex].matname);
    thiel.setAttribute('alt', matrial.matrials[thiindex].matname);






    matrial.matrials[firindex].vew++;
    matrial.matrials[secindex].vew++;
    matrial.matrials[thiindex].vew++;
    // saveToLocalStorage();


}


let buttonel = document.getElementById('button');
firel.addEventListener('click', handclicks);
secel.addEventListener('click', handclicks);
thiel.addEventListener('click', handclicks);


reanderrandomimg();
// readFromLocalStorage();
function handclicks(event) {
    if (attempts <= maxattempts) {
        let checkedimag = event.target.id;
        if (checkedimag = 'fir') {
            matrial.matrials[firindex].vot++
        } else if (checkedimag = 'sec') {
            matrial.matrials[secindex].vot++
        } else if (checkedimag = 'thi') {
            matrial.matrials[thiindex].vot++
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
        for (let i = 0; i < matrial.matrials.length; i++) {

            let liel = document.createElement('li');
            liel.textContent = matrial.matrials[i].matname + ' has ' + matrial.matrials[i].vot + ' vots and' + matrial.matrials[i].vew + 'vews'
            ulel.appendChild(liel);
            votes.push(matrial.matrials[i].vot);
            views.push(matrial.matrials[i].vew);

        }



        saveToLocalStorage();
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
};
readFromLocalStorage();