import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './index.css';

import JavaScriptCalculator from './containers/javascript-calculator';

ReactDOM.render(
  <HashRouter>
    <Route exact path='/' component={JavaScriptCalculator} />
  </HashRouter>,
  document.getElementById('root'),
);
