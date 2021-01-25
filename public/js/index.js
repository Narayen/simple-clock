var deg = 6;
var hr = document.querySelector('#hr');
var min = document.querySelector('#min');
var sec = document.querySelector('#sec');

setInterval(() => {
    let today = new Date();
    let hh = today.getHours() * 30;
    let mm = today.getMinutes() * deg;
    let ss = today.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
})

var count = 0;

function mode_change()
{
    const body = document.querySelector('body');
    body.classList.toggle('mode_color');    
}