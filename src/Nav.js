import React from 'react';

var Nav  = React.createClass({
	render:function(){
		return (
			<div>
				<ul>
					<li>考勤统计</li>
					<li>考勤申请</li>
					<li>人事管理</li>
					<li>系统设置</li>
				</ul>
			</div>)
	}
});


module.exports = Nav


