import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route  , browserRouter } from 'react-router-dom';

import App from './App';
import About from './components/About';
import Contact from './components/Contact';

const routes = (
    <Router history={browserRouter}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );

ReactDOM.render(routes, document.getElementById('root'));
