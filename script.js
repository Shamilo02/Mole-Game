const btn = document.querySelector("button");
const score = document.querySelector('#score');
const mole  = document.querySelectorAll('.mole');
const cancigaz = document.querySelector('.cancigaz')
console.log(cancigaz);

let count = 0;
let can=250;



function start() {
    let randomIndex = Math.floor(Math.random() * mole.length);

    for (let index = 0; index < mole.length; index++) {
        mole[index].classList.remove("goster")
    }
  
      mole[randomIndex].classList.add("goster")
      can-=5;
        cancigaz.style.height=can +'px'

        if (can==0) {
            score.innerHTML=`Təəssüf, oyun bitdi..`
        }
}


mole.forEach(x => {
    x.addEventListener('click', function () {
        score.innerHTML=++count;
        can+=5;
        cancigaz.style.height=can+"px";
        if (count === 5) {
            score.innerHTML= `Tebrikler 1 Level bitdi <br>
            2-ci Levele keçdiniz..`;
            count=0;
            secondLevel();
        }
    })
});

function secondLevel() {
    
setInterval(() => {

    if (count === 3) {
        score.innerHTML= 'Tebrikler oyunu bitirdiniz';
        clearInterval(secondLevel)
    }
    start();

}, 500);

}

btn.addEventListener('click', function () {

    setInterval(() => {
        start();
    }, 1000);



})

