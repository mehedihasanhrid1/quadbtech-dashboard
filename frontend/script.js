//fetched data

async function cryptoData() {
    try {
      const result = await fetch("http://localhost:5000/crypto");
        const data = await result.json();
        return data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  }



// //dark mode funtionality

document.addEventListener('DOMContentLoaded', function () {
    const darkModeCheckbox = document.getElementById('darkModeCheckbox');
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle('dark-theme', darkModeCheckbox.checked);
        const darkModeStatus = darkModeCheckbox.checked ? 'enabled' : 'disabled';
        localStorage.setItem('darkMode', darkModeStatus);
    }

    darkModeCheckbox.addEventListener('change', toggleDarkMode);

    const darkModeSetting = localStorage.getItem('darkMode');
    if (darkModeSetting === 'enabled') {
        darkModeCheckbox.checked = true;
        toggleDarkMode();
    }
});

document.addEventListener('DOMContentLoaded', async function () {
    const timerCounter = document.getElementById('timer-counter');

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

    const data = await cryptoData();
    const button = document.getElementById('dropdown-button');
  data.forEach(item => {
    const option = document.createElement("option");
    option.value = item.base_unit;
    option.text = item.base_unit;
    button.appendChild(option);
  });

});


async function showDropdown() {
    
  }