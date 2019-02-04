let numbers = [];

$('.calculator button').on('click', (e) => {
  if (e.target.className.includes('equal')) {
    let result = eval(numbers.join(''));
    $('.screen').text(result);
    numbers = [result];
  }

  else if (e.target.className.includes('clear')) {
    $('.screen').text('');
    numbers = [];
  }

  else {
    numbers.push(e.target.textContent);
    $('.screen').text(numbers.join(''));
  }
});
