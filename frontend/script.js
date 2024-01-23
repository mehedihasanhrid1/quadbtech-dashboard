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
