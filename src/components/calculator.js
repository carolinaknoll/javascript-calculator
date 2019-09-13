import React, {Component}  from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
    };
  }

  componentDidMount = () => {
    document.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    let numbers = this.state.numbers;

    if (!e.target.matches('.calculator button')) {
      return;
    }

    if (e.target.className.includes('equals')) {
      let result = eval(this.state.numbers.join(''));
      document.getElementById('display').textContent = result;

      numbers = [result];
      this.setState({numbers: [result]});
    }

    else if (e.target.className.includes('clear')) {
      document.getElementById('display').textContent = '0';

      this.setState({numbers: []});
    }

    else {
      let calculation = this.state.numbers.join('');

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
        this.setState({numbers: numbers});
      }

      numbers.push(e.target.textContent);

      this.setState({numbers: numbers});

      document.getElementById('display').textContent = this.state.numbers.join('');
    }
  }

	render() {
    return (
      <div className="calculator">
        <div className="top">
          <button id="clear" className="clear">C</button>
          <div id="display" className="display"></div>
        </div>

        <div className="row">
          <button id="seven" className="key">7</button>
          <button id="eight" className="key">8</button>
          <button id="nine" className="key">9</button>
          <button id="add" className="special key">+</button>
        </div>

        <div className="row">
          <button id="four" className="key">4</button>
          <button id="five" className="key">5</button>
          <button id="six" className="key">6</button>
          <button id="subtract" className="special key">-</button>
        </div>

        <div className="row">
          <button id="one" className="key">1</button>
          <button id="two" className="key">2</button>
          <button id="three" className="key">3</button>
          <button id="divide" className="special key">/</button>
        </div>

        <div className="row">
          <button id="zero" className="key">0</button>
          <button id="decimal" className="key">.</button>
          <button id="equals" className="special key equals">=</button>
          <button id="multiply" className="special key">*</button>
        </div>
      </div>
    );
	}
};
