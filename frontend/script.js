//fetched data

async function cryptoData() {
  try {
    const result = await fetch("https://quabdtechhodlinfopro-backend.vercel.app/crypto");
    const data = await result.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

// //dark mode funtionality

document.addEventListener("DOMContentLoaded", function () {
  const darkModeCheckbox = document.getElementById("darkModeCheckbox");
  const body = document.body;

  function toggleDarkMode() {
    body.classList.toggle("dark-theme", darkModeCheckbox.checked);
    const darkModeStatus = darkModeCheckbox.checked ? "enabled" : "disabled";
    localStorage.setItem("darkMode", darkModeStatus);
  }

  darkModeCheckbox.addEventListener("change", toggleDarkMode);

  const darkModeSetting = localStorage.getItem("darkMode");
  if (darkModeSetting === "enabled") {
    darkModeCheckbox.checked = true;
    toggleDarkMode();
  }
});

document.addEventListener("DOMContentLoaded", async function () {
  const crypto = await cryptoData();
  const timerCounter = document.getElementById("timer-counter");

  function startTimer() {
    let count = 60;

    function updateCounter() {
      timerCounter.textContent = count;
      count--;

      if (count < 1) {
        count = 60;
      }
    }

    updateCounter();
    setInterval(updateCounter, 1000);
  }

  startTimer();

  const button = document.getElementById("dropdown-button");
  crypto.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.base_unit;
    option.text = item.base_unit;
    option.className = "option-dropdown";
    button.appendChild(option);
  });
});
