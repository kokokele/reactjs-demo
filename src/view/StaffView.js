/**
 * Created by antz on 15/8/11.
 */
import React from 'react';
var Router = require('react-router');
var {
    Route,
    DefaultRoute,
    NotFoundRoute,
    RouteHandler,
    Link
    } = Router;

var StaffM = require("../model/StaffModel")




var Staff = React.createClass({

    render:function() {
        return (
            <div>
                <div class="btn-group">
				    <button class="btn" type="button"><em class="icon-align-left"></em><Link to="stafflist">员工列表</Link></button>
                    <button class="btn" type="button"><em class="icon-align-center"></em><Link to="addstaff">添加新员工</Link></button>
                     <button class="btn" type="button"><em class="icon-align-right"></em>职位管理</button>
                    <button class="btn" type="button"><em class="icon-align-justify"></em>其他</button>
			    </div>
                <RouteHandler/>
            </div>
        )
    }
})

module.exports = Staff;
