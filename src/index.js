import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterNavigation from './main/routing/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouterNavigation />, document.getElementById('root'));

serviceWorker.unregister();

