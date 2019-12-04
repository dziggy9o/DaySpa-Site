import React from 'react';
import ReactDOM from 'react-dom';

//Templejt
import './css/navigacija.css';
import './css/galerija.css';
import './index.css';
import DaySpa from './DaySpa';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<DaySpa />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
