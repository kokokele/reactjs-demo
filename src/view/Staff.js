/**
 * Created by antz on 15/8/11.
 */
import React from 'react';

var StaffM = require("../model/StaffModel")

var Staff = React.createClass({

    render:function(){

        var items = StaffM.getStaff().map(function(data){
            console.log(data.name);
            return <tr>
                <td>
                    {data.name}
                </td>
                <td>
                    {data.userNo}
                </td>
                <td>
                    男
                </td>
                <td>无</td>
                <td>
                    {data.title}
                </td>

            </tr>;
        });

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="span12">
                        <h3>
                            #人员管理
                        </h3>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>姓名</th>
                                <th>工号</th>
                                <th>性别</th>
                                <th>部门</th>
                                <th>职位</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Staff;