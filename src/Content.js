import React from 'react';
var Router = require('react-router');
var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

var Content  = React.createClass({
	render:function(){
		return (
			<div>
				content
				<p><RouteHandler/></p>
			</div>
		)
	}
});


module.exports = Content


