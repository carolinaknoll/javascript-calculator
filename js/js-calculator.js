let numbers = [];

$('.calculator button').on('click', (e) => {
  if (e.target.className.includes('equals')) {
    let result = eval(numbers.join(''));
    $('#display').text(result);
    numbers = [result];
  }

  else if (e.target.className.includes('clear')) {
    $('#display').text('0');
    numbers = [];
  }

  else {
    numbers.push(e.target.textContent);
    $('#display').text(numbers.join(''));
  }
});
