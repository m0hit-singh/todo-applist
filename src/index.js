import React from 'react';
import ReactDOM from 'react-dom';
import '../src/app/styles/index.css';
import App from '../src/app/routes/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
