import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import data from "../src/data/Data";

ReactDOM.render(
  <React.StrictMode>
    <App data= {data} />
  </React.StrictMode>,
  document.getElementById('root')
);
