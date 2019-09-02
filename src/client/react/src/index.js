import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, BrowserRouter } from 'react-router-dom';
//import { browserHistory } from 'react-router-dom';

import App from './App';
import About from './components/About';
import Contact from './components/Contact';


const routes = (

    <BrowserRouter>
        <App />
    </BrowserRouter>

);

ReactDOM.render(<App />, document.getElementById('root'));
