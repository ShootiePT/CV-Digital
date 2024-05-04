/* Light / Dark Mode */
const paragraph = document.querySelector('.grey-text');
const toggleElement = document.querySelector('.change-color');
let whiteMode = false;

function toggleColors() {
    whiteMode = !whiteMode;

    if (whiteMode) {
        paragraph.classList.add('white-background', 'black-text');
        paragraph.classList.remove('grey-text');
    } else {
        paragraph.classList.remove('white-background', 'black-text');
        paragraph.classList.add('grey-text');
    }
}