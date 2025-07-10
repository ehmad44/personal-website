// WORD-BY-WORD TYPEWRITER
const text      = "Blending code with crypto — Creating the future. Watch this space.";
const words     = text.split(" ");          // split into individual words
const output    = document.getElementById("typewriter");

let i = 0;

function typeWord() {
  if (i < words.length) {
    output.textContent += (i === 0 ? "" : " ") + words[i];
    i++;
    setTimeout(typeWord, 400);              // ← speed between words (ms)
  }
}

window.addEventListener("DOMContentLoaded", typeWord);
