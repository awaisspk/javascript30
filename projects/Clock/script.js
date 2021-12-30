let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const MAXHOURS = 12;
let currentHour = 0;
let currentMint = 0;
let currentSecond = 0;

setInterval(() => {
  seconds.style.transform = `rotateZ(${currentSecond * 6}deg)`;
  currentSecond++;
  console.log(currentSecond);
  console.log(currentMint);
  if (currentSecond === 59) {
    currentMint++;
    minutes.style.transform = `rotateZ(${currentMint * 6}deg)`;
    currentSecond = 0;
  }
  if (currentMint === 59) {
    currentHour++;
    hours.style.transform = `rotateZ(${currentHour * 30}deg)`;
    currentMint = 0;
  }
  if (currentHour === MAXHOURS) {
    currentHour = 0;
  }
}, 1000);
