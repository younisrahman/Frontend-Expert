let timerID;
let lastTimerStartTime = 0;
let millisElapsedBeforeLastStart = 0;
const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  lastTimerStartTime = Date.now();
  timerID = requestAnimationFrame(updateTimer);
}
function stopTimer() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;

  millisElapsedBeforeLastStart += Date.now() - lastTimerStartTime;

  cancelAnimationFrame(timerID);
}
function resetTimer() {
  resetButton.disabled = true;
  timer.textContent = "00:00:000";
  millisElapsedBeforeLastStart = 0;
}

function updateTimer() {
  const millisElapsed =
    Date.now() - lastTimerStartTime + millisElapsedBeforeLastStart;
  const secondsElapsed = millisElapsed / 1000;
  const minutesElapsed = secondsElapsed / 60;

  const millisText = formatNumber(millisElapsed % 1000, 3);
  const secoundsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
  const minutesText = formatNumber(Math.floor(minutesElapsed), 2);

  timer.textContent = `${minutesText}:${secoundsText}:${millisText}`;
  timerID = requestAnimationFrame(updateTimer);
}

function formatNumber(number, disiredLength) {
  const stringNumber = String(number);
  return stringNumber.padStart(disiredLength, "0");
}
