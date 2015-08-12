/**
 * Created by antz on 15/8/12.
 */
import Reflux from 'reflux';

//[
// {"name":"赵立元","userId":11333,"userNo":"1","deptName":"未分配部门","overtime":{},
// "notSign":4,"absenteeismCount":2,"absenteeismMinute":1080,
// "absenteeismDay":2.4,"totalDay":2.4,"totalMinute":1080},
// ...]
var StaffModel = Reflux.createStore({
    init : function(){
        this.staff = [{"name":"赵立元","userId":11333,"userNo":"1","deptName":"未分配部门","title":"ceo","overtime":{},
                "notSign":4,"absenteeismCount":2,"absenteeismMinute":1080,
                "absenteeismDay":2.4,"totalDay":2.4,"totalMinute":1080},

                {"name":"张鹏","userId":11333,"userNo":"1","deptName":"未分配部门","overtime":{},"title":"员工",
                "notSign":4,"absenteeismCount":2,"absenteeismMinute":1080,
                "absenteeismDay":2.4,"totalDay":2.4,"totalMinute":1080}];

        this.trigger(this.staff);

    },

    getStaff : function(){
        return this.staff;
    },

    parse : function(data){
        this.staff = data;
    }
});



module.exports = StaffModel;