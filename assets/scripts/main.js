// main.js
// Global variables declared here
// Input field
let input = document.getElementById("volume-number");
input.addEventListener("change", changeSlider);

// Slider
let slider = document.getElementById("volume-slider");
slider.addEventListener("change", changeInput);

// Volume image
let volImg = document.getElementById("volume-image");

// Horn image
let hornImg = document.getElementById("sound-image");

// Audio sound
let sound = document.getElementById("horn-sound");

// Radio buttons
let air = document.getElementById("radio-air-horn");
let car = document.getElementById("radio-car-horn");
let party = document.getElementById("radio-party-horn");
air.addEventListener("click", changeRadio);
car.addEventListener("click", changeRadio);
party.addEventListener("click", changeRadio);

// Honk button
let honk = document.getElementById("honk-btn");
honk.addEventListener("click", function(event) {
  event.preventDefault();
  sound.currentTime = 0;
  sound.play();
  });

// move slider bar to value of input field, 
function changeSlider() {
  slider.value = input.value;
  changeImg();
  changeLevel();
}
// input field update when slider bar changes
function changeInput() {
  input.value = slider.value;
  changeImg();
  changeSlider();
  changeLevel();
}

// volume icon changes
function changeImg() {
  
  // Changes volume image depending on ranges below
  if(input.value == 0) {
    volImg.src="./assets/media/icons/volume-level-0.svg";
    honk.disabled = true;
  } else if (input.value > 0 && input.value <= 33) {
    volImg.src="./assets/media/icons/volume-level-1.svg";
    honk.disabled = false;
  } else if (input.value > 33 && input.value <= 66) {
    volImg.src="./assets/media/icons/volume-level-2.svg";
    honk.disabled = false;
  } else {
    volImg.src="./assets/media/icons/volume-level-3.svg";
    honk.disabled = false;
  }
}


// Change audio
// when slider moves, sound level of audio element changes
// When input value changes, sound level of audio element changes
function changeLevel() {
  const PERCENT = 100;
  sound.volume = input.value / PERCENT;
}


// radio switches between horn sounds
function changeRadio() {
  
  // Changes horn image and sounds
  if(air.checked) {
    car.checked = false;
    party.checked = false;
    sound.src = "./assets/media/audio/air-horn.mp3";
    hornImg.src = "./assets/media/images/air-horn.svg";
  } else if (car.checked) {
    air.checked = false;
    party.checked = false;
    sound.src = "./assets/media/audio/car-horn.mp3";
    hornImg.src = "./assets/media/images/car.svg"
  } else {
    car.checked = false;
    air.checked = false;
    sound.src = "./assets/media/audio/party-horn.mp3";
    hornImg.src = "./assets/media/images/party-horn.svg";
    
  }
}