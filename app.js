let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let days = 8;
let hours = 23;
let minutes = 55;
let seconds = 41;

function format(num){
    let str = num.toString();
    return str.length == 2 ? str : ("0" + str);
}

daysEl.textContent = format(days);
hoursEl.textContent = format(hours);
minutesEl.textContent = format(minutes);
secondsEl.textContent = format(seconds);

let interv = null;
function timer(){
    seconds--;
    if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
        clearInterval(interv);
    }
    if(seconds < 0){
        seconds = 59;
        minutes--;
        if(minutes < 0){
            minutes = 59;
            hours--;
            if(hours < 0){
                hours = 23;
                days--;
            }
        }
    }

    daysEl.textContent = format(days);
    hoursEl.textContent = format(hours);
    minutesEl.textContent = format(minutes);
    secondsEl.textContent = format(seconds);
}
interv = setInterval(()=> {
    timer();
}, 1000);