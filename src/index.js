import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterNavigation from './main/routing/router';
import Book from "./main/form";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouterNavigation />, document.getElementById('root'));
ReactDOM.render(<Book />, document.getElementById('root'));


serviceWorker.unregister();

