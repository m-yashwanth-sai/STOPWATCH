let sec=0;
let min = 0;
let hour = 0;
let milSec=0;
let interval = null;
let isClicked = false;
let addElem = document.getElementById("timer");

function start(){
    if(isClicked == true){
        return;
    }

    isClicked = true;


    interval =setInterval(timer,100);
    function timer(){
        if(milSec == 1000){
            sec++;
            milSec = 0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min == 60){
            hour++;
            min = 0;
        }
        
        let hourZero = hour<=9? "0":"";
        let minZero = min<=9? "0":"";
        let secZero = sec<=9? "0":"";

        milSec+=100;
        let temp = `${hourZero}${hour} : ${minZero}${min} : ${secZero}${sec} : ${milSec}`
        addElem.innerText=temp;
    }
}

function stop(){
    clearInterval(interval);
    isClicked=false;
}

function reset(){
   clearInterval(interval);
    sec=0;
    min=0;
    hour = 0;
    milSec = 0;
    addElem.innerText = '00 : 00 : 00 : 000';
    isClicked=false;
}