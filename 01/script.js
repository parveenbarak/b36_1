let mainDiv = document.querySelector(".container");
let start = document.querySelector(".start-btn");
let stopbtn = document.querySelector(".stop-btn");
let reset = document.querySelector(".reset-btn");
let showTimer = document.querySelector(".timer");

let timer;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function runTimer() {
  let min = minutes < 10 ? "0" + minutes : minutes;
  let sec = seconds < 10 ? "0" + seconds : seconds;
  showTimer.textContent = `${min}:${sec}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      runTimer();
    }, 1000);
  }
}

function stopTimer() {
  isRunning = false;
  clearInterval(timer);
}

function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  runTimer();
}

start.addEventListener("click", startTimer);
stopbtn.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

runTimer();
