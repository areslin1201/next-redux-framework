import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyled} from './style.js';

ReactDOM.render(
  <Fragment>
  	<GlobalStyled />
    <App />
  </Fragment>,
  document.getElementById('root')
);