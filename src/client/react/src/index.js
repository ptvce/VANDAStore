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
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFind} />
            </Switch>
        </Router>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
