// get elements 

let date = document.getElementById('date');
let month = document.getElementById('month');
let year = document.getElementById('year');
let hour = document.getElementById('hour');
let minute = document.getElementById('minutes');
let second = document.getElementById('second');

// get date & time 

var d = new Date();
var todayDate = d.getDate();
todayDate = todayDate < 10 ? "0"+todayDate : todayDate;
var Hour = d.getHours();
var Min = d.getMinutes();
var currentMonth = d.getMonth()+1;
currentMonth = currentMonth < 10 ? "0"+currentMonth : currentMonth;
let currentYear = d.getFullYear();
date.innerText = todayDate;
month.innerText = currentMonth;
year.innerText = currentYear;

setInterval(()=> {
    let dd = new Date();
    currentHour = dd.getHours();
    currentHour= currentHour > 12 ? currentHour-12 : currentHour;
    currentHour = currentHour < 10 ? "0"+currentHour : currentHour;
    currentMinutes = dd.getMinutes();
    currentSecond = dd.getSeconds();
    currentMinutes = currentMinutes < 10 ? "0"+currentMinutes : currentMinutes;
    currentSecond = currentSecond < 10 ? "0"+currentSecond : currentSecond;
    hour.innerText = currentHour;
    minute.innerText = currentMinutes;
    second.innerText = currentSecond;
},1000);


//getting radio buttons

let sun = document.getElementById('sun');
let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');
let sat = document.getElementById('sat');



let day = d.getDay();
switch(day){
    case 0:
    sun.setAttribute('checked','checked');
    sun.removeAttribute('disabled');
    break;

    case 1:
    mon.setAttribute('checked','checked');
    mon.removeAttribute('disabled');
    break;

    case 2:
    tue.setAttribute('checked','checked');
    tue.removeAttribute('disabled');
    break;

    case 3:
    wed.setAttribute('checked','cheked');
    wed.removeAttribute('disabled');
    break;

    case 4:
    thu.setAttribute('checked','checked');
    thu.removeAttribute('disabled');
    break;

    case 5:
    fri.setAttribute('checked','checked');
    fri.removeAttribute('disabled');
    break;

    case 6:
    sat.setAttribute('checked','checked');
    sat.removeAttribute('disabled');
    break;

}

let currentHour = d.getHours();
let am = document.getElementById('am');
let pm = document.getElementById('pm');

if(currentHour < 12 ){
    am.setAttribute('checked','checked');
    am.removeAttribute('disabled');
}
else{
    pm.setAttribute('checked','checked');
    pm.removeAttribute('disabled');
}


