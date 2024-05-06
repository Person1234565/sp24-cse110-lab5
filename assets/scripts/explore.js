// explore.js

let voices = null;

window.addEventListener("DOMContentLoaded", init);
window.speechSynthesis.onvoiceschanged = () => {
  voices = new Map(
    window.speechSynthesis.getVoices().map((voice) => [voice.name, voice]),
  );
  populateVoices();
};

function init() {
  const button = document.querySelector("#explore > button");
  button.addEventListener("click", () => {
    playAudio();
  });
}

function populateVoices() {
  const voiceSelect = document.querySelector("#voice-select");
  voices.forEach((voice) => {
    const element = document.createElement("option");
    element.setAttribute("data-lang", voice.lang);
    element.setAttribute("data-name", voice.name);
    element.textContent = voice.name;
    voiceSelect.appendChild(element);
  });
}

function playAudio() {
  const select = document.querySelector("#voice-select");
  if (voices == null || select.value == "select") return;

  const text = document.querySelector("#text-to-speak");
  const utterance = new SpeechSynthesisUtterance(text.value);

  utterance.voice = voices.get(select.value);

  utterance.addEventListener("start", () => {
    const image = document.querySelector("#explore > img");
    image.src = "assets/images/smiling-open.png";
  });

  utterance.addEventListener("end", () => {
    const image = document.querySelector("#explore > img");
    image.src = "assets/images/smiling.png";
  });

  window.speechSynthesis.speak(utterance);
}
