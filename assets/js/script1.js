document.getElementById("start-timer").addEventListener("click", function () {
  const inputMinutes = parseInt(document.getElementById("discussion-minutes").value, 10) || 0;
  let totalSeconds = inputMinutes * 60;

  const timerDisplay = document.getElementById("timer-display");
  const timerInterval = setInterval(() => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      // Update the display
      timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

      if (totalSeconds <= 0) {
          clearInterval(timerInterval);
          alert("Time is up!");
      }
      totalSeconds--;
  }, 1000);
});

