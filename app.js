let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let launchTime = new Date(2024, 7, 15, 0, 0, 0);
let current = new Date();
let dif = Math.floor((launchTime - current)/1000);

let seconds = 0, minutes = 0, hours = 0, days = 0;
if(dif > 0){
    seconds = dif%60;
    minutes = Math.floor(dif/60)%60;
    hours = Math.floor(dif/3600)%60;
    days = Math.floor(dif/3600/24);
}

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
    if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
        clearInterval(interv);
        return;
    }

    current = new Date();
    dif = Math.floor((launchTime - current)/1000);
    seconds = dif%60;
    minutes = Math.floor(dif/60)%60;
    hours = Math.floor(dif/3600)%60;
    days = Math.floor(dif/3600/24);

    daysEl.textContent = format(days);
    hoursEl.textContent = format(hours);
    minutesEl.textContent = format(minutes);
    secondsEl.textContent = format(seconds);
}
interv = setInterval(()=> {
    timer();
}, 50);