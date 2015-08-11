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
			<div>
				<ul>
					<li><Link to='checking'>考勤统计</Link></li>
					<li><Link to='apply'>考勤申请</Link></li>
					<li>人事管理</li>
					<li>系统设置</li>
				</ul>
				<RouteHandler/>
			</div>)
	}
});


module.exports = Nav


