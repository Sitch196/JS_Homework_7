let stopwatchInterval = 0;
let stopwatchSeconds = 0;
let timerInterval = 0;
let timerSeconds = 0;

const stopwatchDisplay = document.getElementById("stopwatch-display");
const startStopwatchBtn = document.getElementById("start-stopwatch");
const stopStopwatchBtn = document.getElementById("stop-stopwatch");
const resetStopwatchBtn = document.getElementById("reset-stopwatch");

const timerDisplay = document.getElementById("timer-display");
const timerInput = document.getElementById("timer-input");
const startTimerBtn = document.getElementById("start-timer");
const stopTimerBtn = document.getElementById("stop-timer");
const resetTimerBtn = document.getElementById("reset-timer");
const add1mBtn = document.getElementById("add-1m");

function formatTime(seconds) {
  let hour = Math.floor(seconds / 3600);
  let minute = Math.floor((seconds % 3600) / 60);
  let second = seconds % 60;

  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
}

function updateStopwatch() {
  stopwatchSeconds++;
  stopwatchDisplay.textContent = formatTime(stopwatchSeconds);
}

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchSeconds = 0;
  stopwatchDisplay.textContent = "00:00:00";
}

function updateTimer() {
  if (timerSeconds > 0) {
    timerSeconds--;
    timerDisplay.textContent = formatTime(timerSeconds);
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
    alert("Time's Up ⏲️");
  }
}

function isValidTimeInput(input) {
  return !isNaN(input) && input > 0;
}

function startTimer() {
  const inputSeconds = parseInt(timerInput.value);

  if (!isValidTimeInput(inputSeconds) && timerSeconds === 0) {
    alert("Please enter a valid time.");
    timerInput.value = "";

    return;
  }

  if (!timerInterval && (inputSeconds > 0 || timerSeconds > 0)) {
    if (inputSeconds > 0) {
      timerSeconds = inputSeconds;
    }

    timerDisplay.textContent = formatTime(timerSeconds);
    timerInterval = setInterval(updateTimer, 1000);
  }

  timerInput.value = "";
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  timerSeconds = 0;
  timerDisplay.textContent = "00:00:00";
}

function add1MinuteToTimer() {
  timerSeconds += 60;
  timerDisplay.textContent = formatTime(timerSeconds);
}

function handleTimerInputKeydown(event) {
  if (event.key === "Enter") {
    startTimer();
  }
}

startStopwatchBtn.addEventListener("click", startStopwatch);
stopStopwatchBtn.addEventListener("click", stopStopwatch);
resetStopwatchBtn.addEventListener("click", resetStopwatch);

startTimerBtn.addEventListener("click", startTimer);
stopTimerBtn.addEventListener("click", stopTimer);
resetTimerBtn.addEventListener("click", resetTimer);
add1mBtn.addEventListener("click", add1MinuteToTimer);
timerInput.addEventListener("keydown", handleTimerInputKeydown);
