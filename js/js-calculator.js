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
    let calculation = numbers.join('');

    if (e.target.textContent === '0') {

      // check if there is already a zero at the start or after the operations [*/+-]
      let hasZero = /^[0]|[*\/+-][0]$/;

      if (hasZero.test(calculation)) {
        return;
      };
    }

    if (e.target.textContent === '.') {
      // check if there is already a decimal point at the start or after the operations [*/+-]
      let hasDecimal = /^(\d+)[.]$|[*\/+-](\d+)[.]$/;

      if (hasDecimal.test(calculation)) {
        return;
      }
    }

    numbers.push(e.target.textContent);
    $('#display').text(numbers.join(''));
  }
});
