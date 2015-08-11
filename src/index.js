import React from 'react';
import Nav from './Nav'
import Checking form './Checking'
import Content form './Content'

var Router = require('react-router');
var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

import MyRect from './App';
import Other from './Other'

var Index = React.createClass({
	render:function(){
		return (<div>Index
			<p>
			<Link to='my'>MyRect</Link>
			</p>
			<RouteHandler/>

			</div>)
		
	}
})


var routes = (
	<route handler={Content}>
    <Route name="other" path="other" handler={Other}/>
    <Route name="checking" path="checking" handler={Checking}/>
    <DefaultRoute name="Checking"/>
    </route>
);

Router.run(routes, function (Handler) 
{
  React.render(<Handler/>, document.getElementById('root'));
});


 React.render(<Nav/>, document.getElementById('left'));
