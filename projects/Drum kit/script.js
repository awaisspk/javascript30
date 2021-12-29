window.addEventListener("keydown", (e) => {
  e.preventDefault();
  setKeyPressed(e.keyCode);
});

const setKeyPressed = (key = 65) => {
  let keyPressed = document.querySelector(`[data-key="${key}"]`);
  let audio = document.querySelector("audio");
  if (keyPressed && audio) {
    audio.play();
    keyPressed.classList.add("pressed");
  }
};

window.addEventListener("keyup", (e) => {
  e.preventDefault();
  removedPressed(e.keyCode);
});

const removedPressed = (key = 65) => {
  let keyPressed = document.querySelector(`[data-key="${key}"]`);
  if (keyPressed) {
    keyPressed.classList.remove("pressed");
  }
};
