let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function removeLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function changeSign() {
  if (displayValue !== '' && !isNaN(displayValue)) {
    displayValue = parseFloat(displayValue) * -1;
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  try {
    let result = eval(displayValue);
    if (isFinite(result)) {
      displayValue = result.toString();
      document.getElementById('display').value = displayValue;
    } else {
      document.getElementById('display').value = 'Error';
      displayValue = '';
    }
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}
