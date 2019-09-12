import React, {Component} from 'react';
import Calculator from '../components/calculator';
import Header from '../components/header';
import Footer from '../components/footer';

export default class JavaScriptCalculator extends Component {
  render() {
    return (
      <div>
        <div className="content-container">
          <Header />

          <Calculator />
        </div>

        <Footer />
      </div>
    );
  }
}
