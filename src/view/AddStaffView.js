import React from 'react';

var AddStaffView = React.createClass({
    render : function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="span12">
                        <table className="table table-bordered">
                        <tbody>
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


                            <tr align="center" style={{display:"table-row", color:'red'}}>
                            sss
                            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
});


module.exports = AddStaffView;
