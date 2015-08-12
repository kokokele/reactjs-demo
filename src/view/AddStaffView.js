import React from 'react';

var AddStaffView = React.createClass({
    render : function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="span12">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>
                                    工号
                                </th>
                                <th>
                                    姓名
                                </th>
                                <th>
                                    部门
                                </th>
                                <th>
                                    职位
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
});


module.exports = AddStaffView;
