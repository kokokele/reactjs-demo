import React from 'react';
import Nav from './view/NavView';
import Checking from  './view/CheckingView';
import Apply from './view/ApplyView';
import Staff from './view/StaffView';
import StaffList from './view/StaffListView';
import AddStaff from './view/AddStaffView';

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
      <Route name="staff" handler={Staff}>
        <Route name="stafflist" handler={StaffList}/>
        <Route name="addstaff" handler={AddStaff}/>
        <DefaultRoute handler={StaffList} />
      </Route>
      <DefaultRoute handler={Checking}/>
  </route>
);

Router.run(routes, function (Handler)
{
  React.render(<Handler/>, document.getElementById('root'));
});
