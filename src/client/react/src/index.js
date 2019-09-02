import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from 'react-router-dom';

import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import NotFind from './components/NotFind';


const routes = (
    <BrowserRouter>
        <Router>

            <Route path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route component={NotFind} /> */}

        </Router>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
