let numbers = [];

document.addEventListener('click', (e) => {

  if (!e.target.matches('.calculator button')) {
    return;
  }

  if (e.target.className.includes('equals')) {
    let result = eval(numbers.join(''));
    document.getElementById('display').textContent = result;
    numbers = [result];
  }

  else if (e.target.className.includes('clear')) {
    document.getElementById('display').textContent = '0';
    numbers = [];
  }

  else {
    let calculation = numbers.join('');

    if (e.target.textContent === '0') {

      // if zero is clicked, check if there is already a zero at the start or after the operations [*/+-]
      let checkForForbiddenZeroes = /^[0]$|[*\/+-][0]$/;

      if (checkForForbiddenZeroes.test(calculation)) {
        return;
      };
    }

    if (e.target.textContent === '.') {
      // if decimal is clicked, check if there is already a decimal point at the start or after the operations [*/+-]

      // /^(\d+)[.]$/ for start of string, followed by 1+ digits and a decimal at end of string
      // /[*\/+-](\d+)[.]$/ for an operator, followed by 1+ digits and a decimal at end of string
      // /[.](\d+)$/ for a decimal, followed by 1+ digits at end of string
      let checkForForbiddenDecimals = /^(\d+)[.]$|[*\/+-](\d+)[.]$|[.](\d+)$/;

      if (checkForForbiddenDecimals.test(calculation)) {
        return;
      }
    }

    // if an operator is clicked, check for already existing operators
    let checkForOperators = /[*\/+-]/;

    // check for cases like 5++5, which will give us an eval error
    // and remove duplicated operators in order to complete the calculus successfully
    if (checkForOperators.test(e.target.textContent)) {
      let checkForRepeatedOperators = new RegExp('\\' + e.target.textContent);

      if (checkForRepeatedOperators.test(calculation)) {
        calculation = calculation.replace(checkForRepeatedOperators, '');
      }

      // check for cases like 5+/-2, which should consider only last operator entered
      // remove existing operators before the last operator entered
      let checkForExistingOperators = /[*\/+-]{2,}/;

      if (checkForExistingOperators.test(calculation)) {
        calculation = calculation.replace(checkForExistingOperators, '');
      }

      // ensure eval is calculated based on new cleaned values
      numbers = calculation.split('');
    }

    numbers.push(e.target.textContent);

    document.getElementById('display').textContent = numbers.join('');
  }
})
