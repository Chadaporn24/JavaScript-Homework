function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading 0 if needed (e.g., 9 → 09)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("digitalClock").textContent = timeString;
}

// Update every 1 second
setInterval(updateClock, 1000);

// Initial call so it doesn't wait 1 second to show
updateClock();
