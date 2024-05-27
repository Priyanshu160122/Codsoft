function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    let current = document.getElementById('result').value;
    document.getElementById('result').value = current.substring(0, current.length - 1);
}

function appendCharacter(char) {
    document.getElementById('result').value += char;
}

function calculateResult() {
    let expression = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(expression);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
