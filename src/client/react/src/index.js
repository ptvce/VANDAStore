import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Router , Route  , browserRouter } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from 'react-router-dom';
>>>>>>> 9479e6868d288284cc4311f1e7f5512cf85a2ad8

import App from './App';
import About from './components/About';
import Contact from './components/Contact';
<<<<<<< HEAD
=======
import NotFind from './components/NotFind';
>>>>>>> 9479e6868d288284cc4311f1e7f5512cf85a2ad8

const routes = (
    <Router history={browserRouter}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );

<<<<<<< HEAD
=======
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

>>>>>>> 9479e6868d288284cc4311f1e7f5512cf85a2ad8
ReactDOM.render(routes, document.getElementById('root'));
