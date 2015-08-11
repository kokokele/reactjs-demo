import React from 'react';
import RouteHandler from 'react-router'


var Content  = React.createClass({
	render:function(){
		return (
			<div>
				content
			</div>
			<div>
			<p><RouteHandler/></p>
			</div>
		)
	}
});


module.exports = Content


