const btn = document.querySelector("button");
const score = document.querySelector('#score');
const mole  = document.querySelectorAll('.mole');
const cancigaz = document.querySelector('.cancigaz')
console.log(cancigaz);

let count = 0;
let can=250;
let vaxt = 1000
var birinci;


function start() {
    let randomIndex = Math.floor(Math.random() * mole.length);

    for (let index = 0; index < mole.length; index++) {
        mole[index].classList.remove("goster")
    }
  
      mole[randomIndex].classList.add("goster")
      can-=5;
        cancigaz.style.height=can +'px'

        if (can===0) {
            score.innerHTML=`Teessuf oyun bitdi`;
            clearInterval(birinci)
        }
}


mole.forEach(x => {
    x.addEventListener('click', function () {
        score.innerHTML=++count;
        x.classList.remove('goster')
        can+=5;
        cancigaz.style.height=can+'px';
        if (count === 5) {
            score.innerHTML= `Tebrikler 1 Level bitdi <br>
            2-ci Levele keçdiniz..`;
            vaxt-=500
        }else if(count===10){
            score.innerHTML= 'Tebrikler oyunu bitirdiniz';
            clearInterval(birinci);
        }
    })
});


btn.addEventListener('click', function () {
    this.style.display = 'none'

  birinci = setInterval(() => {
        start();
    }, vaxt);



})

