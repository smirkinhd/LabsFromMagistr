const textInput = document.getElementById('textInput');
const sendBtn = document.getElementById('sendBtn');
const previewBtn = document.getElementById('previewBtn');
const previewArea = document.getElementById('previewArea');

let textLines = [];

sendBtn.addEventListener('click', () => {
    const inputText = textInput.value.trim();
    if (inputText) {
        textLines.push(inputText);
        textInput.value = '';
        previewArea.innerHTML = '<h3>Предпросмотр текста:</h3>';
    }
});

previewBtn.addEventListener('click', () => {
    const inputText = textInput.value.trim();
    previewArea.innerHTML = '<h3>Предпросмотр текста:</h3>';

    if (inputText) {
        const lines = inputText.split('\n');
        lines.forEach(line => {
            const lineElement = document.createElement('div');
            lineElement.textContent = line;
            previewArea.appendChild(lineElement);
        });
    }
});