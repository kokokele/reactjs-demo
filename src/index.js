import React from 'react';
import Nav from './Nav';
import Checking from  './Checking';
import Content from './Content';
import Apply from './Apply';

var Router = require('react-router');
var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

// var Index = React.createClass({
// 	render:function(){
// 		return (<div>Index
// 			<p>
// 			<Link to='my'>MyRect</Link>
// 			</p>
// 			<RouteHandler/>

// 			</div>)
		
// 	}
// })


var routes = (
	    <route handler={Nav}>
		    <Route name="checking" handler={Checking}/>
		    <Route name="apply" handler={Apply}/>
		    <DefaultRoute handler={Checking}/>
		</route>
);

Router.run(routes, function (Handler) 
{
  React.render(<Handler/>, document.getElementById('root'));
});


  // React.render(<Nav/>, document.getElementById('left'));
