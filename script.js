let displayValue = '';

function appendValue(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    displayValue = '';
    document.getElementById('display').value = 'Error';
  }
}
alert('this is cool k dont leave');
alert("please bro actually fr dont leave");
alert('not trying to be annoying but i spend a lot of time on these projects :) so please help me by paying me to make a website for u');
