import React from 'react';
import Nav from './view/Nav';
import Checking from  './view/Checking';
import Apply from './view/Apply';
import Staff from './view/Staff';

var Router = require('react-router');
var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

var routes = (
  <route handler={Nav}>
      <Route name="checking" handler={Checking}/>
      <Route name="apply" handler={Apply}/>
      <Route name="staff" handler={Staff}/>
      <DefaultRoute handler={Checking}/>
  </route>
);

Router.run(routes, function (Handler) 
{
  React.render(<Handler/>, document.getElementById('root'));
});