import React from 'react';
import { render } from 'react-snapshot';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Changed to static snapshot for build
// ReactDOM.render(<App />, document.getElementById('root'));
render(
    <App/>,
    document.getElementById('root')
);


registerServiceWorker();
