const windows = ['aba1', 'aba2', 'aba3', 'aba4'];
let currentWindow = 0;

function showWindow(i) {
    windows.forEach((windowId, indice) => {
        const window = document.getElementById(windowId);
        if(window) {
            window.classList.toggle('hidden', indice !== i);
        }
    });
}

showWindow(currentWindow);

function nextWindow() {
    if (currentWindow < windows.length - 1) {
        currentWindow++;
        showWindow(currentWindow);
    }
}

function previousWindow() {
    if (currentWindow > 0) {
        currentWindow--;
        showWindow(currentWindow);
    }
}

document.querySelectorAll('#button0, #button2').forEach(button => {
    button.addEventListener('click', nextWindow);
});
document.querySelectorAll('#button1').forEach(button => {
    button.addEventListener('click', previousWindow);
});
