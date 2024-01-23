//fetched data

async function cryptoData() {
  try {
    const result = await fetch(
      "https://quabdtechhodlinfopro-backend.vercel.app/crypto"
    );
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
  const priceNum = document.getElementById("price-main-head");
  const lastTrade = document.getElementById("last-trade-price");
  const sellTrade = document.getElementById("sell-trade-price");
  const buyTrade = document.getElementById("buy-trade-price");
  const diffTrade = document.getElementById("trade-low-high");
  const diffPrice = document.getElementById("trade-difference-price");

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

  button.addEventListener("change", function () {
    const selectedCrypto = button.value;
    updatePriceNum(selectedCrypto);
  });

  function updatePriceNum(selectedCrypto) {
    const selectedCryptoData = crypto.find(
      (item) => item.base_unit === selectedCrypto
    );

    if (selectedCryptoData) {
      priceNum.textContent = `₹ ${selectedCryptoData.high}`;
      lastTrade.textContent = `₹ ${selectedCryptoData.last}`;
      buyTrade.textContent = `₹ ${selectedCryptoData.sell}`;
      sellTrade.textContent = `₹ ${selectedCryptoData.buy}`;

      const lastPrice = parseFloat(selectedCryptoData.last);
      const highPrice = parseFloat(selectedCryptoData.high);

      const percentageDifference = ((highPrice - lastPrice) / highPrice) * 100;
      const pricedifference = highPrice - lastPrice;
      diffTrade.textContent = `${percentageDifference.toFixed(2)}%`;
      diffPrice.textContent =`▼ ₹ ${pricedifference.toFixed(2)}`

    } else {
      console.error(`Crypto data for ${selectedCrypto} not found.`);
    }
  }
  const initialCrypto = button.value;
  updatePriceNum(initialCrypto);
});
