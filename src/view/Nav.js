import React from 'react';
var Router = require('react-router');
var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

var Nav  = React.createClass({
	render:function(){
		return (
			<div className="row">
				<div className="col-md-2">
					<ul>
						<li><Link to='checking'>考勤统计</Link></li>
						<li><Link to='apply'>考勤申请</Link></li>
						<li><Link to='staff'>人事管理</Link></li>
						<li>系统设置</li>
					</ul>
				</div>
				<div className="col-md-8"><RouteHandler/></div>
			</div>)
	}
});



module.exports = Nav


