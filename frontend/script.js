// //dark mode funtionality

// document.addEventListener('DOMContentLoaded', function () {
//     const darkModeSetting = localStorage.getItem('darkMode');
//     const darkModeToggle = document.getElementById('darkModeToggle');
//     const body = document.body;

//     if (darkModeSetting === 'enabled') {
//         body.classList.add('dark-theme');
//         darkModeToggle.textContent = 'Toggle Light Mode';
//     }

//     if (darkModeSetting === 'disabled') {
//         body.classList.add('light-theme');
//         darkModeToggle.textContent = 'Toggle Dark Mode';
//     }

//     darkModeToggle.addEventListener('click', function () {
//         body.classList.toggle('dark-theme');

//         if (body.classList.contains('dark-theme')) {
//             localStorage.setItem('darkMode', 'enabled');
//             darkModeToggle.textContent = 'Toggle Light Mode';
//         } else {
//             localStorage.setItem('darkMode', 'disabled');
//             darkModeToggle.textContent = 'Toggle Dark Mode';
//         }
//     });
// });


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
