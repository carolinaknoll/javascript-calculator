import React, {Component} from 'react';
import Calculator from '../components/calculator/calculator';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

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
