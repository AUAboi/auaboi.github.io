const mic = document.getElementById('mic');
const video = document.getElementById('vid');
const trans = document.getElementById('trans');
const time = 5000;
var timer;


function toggle(){
    window.clearTimeout(timer);
    mic.classList.toggle('active');
    video.play();
    video.style.opacity = '1';
    if(mic.className == 'fas fa-microphone'){
        video.style.opacity = '0';
    }
    if(trans.className == ''){
        trans.classList.toggle('trans');
    }
    
    timer = window.setTimeout(displayTranslation, time);   
}

function displayTranslation() {
    video.style.opacity = '0';
    mic.classList.toggle('active');
    trans.classList.toggle('trans');
}

