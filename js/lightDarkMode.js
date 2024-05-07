const toggleButton = document.getElementById('toggleButton');
let isDarkMode = true;

toggleButton.addEventListener('click', function() {
    const body = document.body;
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
    isDarkMode = !isDarkMode;
    this.classList.toggle("checked");
});