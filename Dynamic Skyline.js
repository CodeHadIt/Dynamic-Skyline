let switchBtn = document.querySelector(".switch");
let inputChecker = document.querySelector("#checkbox");
let sliderBtn = document.querySelector(".slider");
let bG = document.querySelector(".sky");

let daySong = document.querySelector("#day-audio");
let nightSong = document.querySelector("#night-audio");
let musicBtn = document.querySelector("#music-icon");

let firstPress = true;
let nightTheme = false;

//songs controls and switch
function playPause() {
if(!nightTheme) {
    if(firstPress){
        daySong.play();
        firstPress = false;
        musicBtn.style.animationName = "rotator"
    }
    else {
        daySong.pause();
        firstPress = true;
    }
}

else {
    if(firstPress){
        nightSong.play();
        firstPress = false;
        musicBtn.style.animationName = "rotator"
    }
    else {
        nightSong.pause();
        firstPress = true;
    }
}
}

musicBtn.addEventListener("click", ()=> {
    playPause();
})

// Switches the building colors 
function toggleColors() {   

    const root = document.documentElement;

    if(!nightTheme) {
        root.style.setProperty('--building-color1', '#000');
        root.style.setProperty('--building-color2', '#000');
        root.style.setProperty('--building-color3', '#000');
        root.style.setProperty('--building-color4', '#000');
        nightTheme = true;
    
} 

else {
    root.style.setProperty('--building-color1', '#aa80ff');
    root.style.setProperty('--building-color2', '#66cc99');
    root.style.setProperty('--building-color3', '#cc6699');
    root.style.setProperty('--building-color4', '#538cc6');
    root.style.setProperty('--window-color1', '#bb99ff');
    root.style.setProperty('--window-color2', '#8cd9b3');
    root.style.setProperty('----window-color3', '#d98cb3');
    root.style.setProperty('----window-color4', '#8cb3d9');
    nightTheme = false; 
}
}


inputChecker.addEventListener("change", ()=> {
    sliderBtn.classList.toggle("sliderCheck");
    bG.classList.toggle("skyChanger");
    toggleColors();
    switchBtn.classList.toggle("switch2");
})