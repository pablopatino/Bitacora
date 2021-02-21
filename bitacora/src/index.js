import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Bitacora } from './Bitacora';

import './styles/styles.scss'
import { store } from './store/store';

ReactDOM.render(
    <Bitacora />
  ,
  document.getElementById('root')
);

