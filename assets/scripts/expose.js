// expose.js

window.addEventListener("DOMContentLoaded", init);

const jsConfetti = new JSConfetti();

function init() {
  const hornSelector = document.querySelector("#horn-select");
  hornSelector.addEventListener("change", (event) => {
    setAudioAndImage(event.target.value);
  });

  const playButton = document.querySelector("#expose > button");
  playButton.addEventListener("click", () => {
    playAudio();
  });

  const volumenSlider = document.querySelector("#volume");
  volumenSlider.addEventListener("change", (event) => {
    changeVolume(event.target.value);
  });
}

function setAudioAndImage(selection) {
  const image = document.querySelector("#expose > img");
  const audio = document.querySelector("#expose > audio");
  image.src = `assets/images/${selection}.svg`;
  image.alt = selection;
  audio.src = `assets/audio/${selection}.mp3`;
}

function playAudio() {
  const audio = document.querySelector("#expose > audio");
  const hornSelector = document.querySelector("#horn-select");
  audio.load();
  audio.play();
  if (hornSelector.value == "party-horn") jsConfetti.addConfetti();
}

function changeVolume(volume) {
  const audio = document.querySelector("#expose > audio");
  audio.volume = volume / 100;
  const icon = document.querySelector("#volume-controls > img");

  const path = "assets/icons/volume-level-";
  const alt = "Volume Level ";

  if (volume == 0) {
    icon.src = `${path}${0}.svg`;
    icon.alt = alt + "0";
  } else if (volume < 33) {
    icon.src = `${path}${1}.svg`;
    icon.alt = alt + "1";
  } else if (volume < 67) {
    icon.src = `${path}${2}.svg`;
    icon.alt = alt + "2";
  } else {
    icon.src = `${path}${3}.svg`;
    icon.alt = alt + "3";
  }
}

