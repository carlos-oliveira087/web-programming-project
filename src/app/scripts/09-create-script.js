const windows = ['aba1', 'aba2', 'aba3', 'aba4'];
let currentWindow = 0;

function showWindow(i) {
    windows.forEach((windowId, indice) => {
        const window = document.getElementById(windowId);
        if (window) {
            window.classList.toggle('hidden', indice !== i);
        }
    });
}

showWindow(currentWindow);

function isCurrentWindowValid() {
    const currentForm = document.getElementById(windows[currentWindow]);
    if (currentForm) {
        const inputs = currentForm.querySelectorAll('input[required], textarea[required]');
        for (let input of inputs) {
            if (!input.checkValidity()) {
                input.reportValidity();
                return false;
            }
        }
    }
    return true;
}

function nextWindow() {
    if (isCurrentWindowValid() && currentWindow < windows.length - 1) {
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