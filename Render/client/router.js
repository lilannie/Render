import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Home from './Home';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        {/* add the routes here */}
    </Router>,
  document.getElementById('root')
);
