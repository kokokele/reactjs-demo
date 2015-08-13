import React, { Component } from 'react';

import Reflux from 'reflux';

// export default class App extends Component {
//   render() {
//     return (
//     <h1>
//       <h1>Hello, worldssh1><p>2</p>
//       </h1>
//     );
//   }
// }


var StatusAction = Reflux.createActions([
   'getStatus',
  'updateStatus'
]);

var StatusStore = Reflux.createStore({
    init: function() {
      this.listenTo(StatusAction.getStatus, this._getStatus);
      this.listenTo(StatusAction.updateStatus, this._updateStatus);
      this.Status;
    },
    _updateStatus: function(isOnline) {
      console.log("statusStore:updateStatus")
      this.Status = isOnline ? 'ONLINE' : 'OFFLINE';
      this.trigger(this.Status);
    }
});

StatusAction.updateStatus(false);
StatusAction.updateStatus.preEmit= function(val){
    // console.log($)
    // $.ajax({
    //   url: "http://www.163.com",
    //   dataType: 'jsonp',
    //   type: 'GET',
    //   success: function(data) {
    //     alert(data)
    //   }.bind(this)
    // })
    // console.log(val)
}

var MyMix = {
  show : function(){
    alert(this.props.mm)
  }
}

StatusAction.updateStatus.shouldEmit = function(val){return true}

var MyRect = React.createClass({
        mixins: [
          Reflux.ListenerMixin,
          Reflux.connect(StatusStore, "Status"),
          MyMix
        ],
        getInitialState:function()
        {
          return {s : 2};
        },

        tick : function () {
           this.setState({s: this.state.s + 1})
        },

        componentDidMount: function() {
          this.listenTo(StatusStore, this._status);

          this.interval = setInterval(this.tick, 100);
          this.show()
        },

       _getStatus: function() {
          console.log("getStatus:" + StatusStore.Status);
        },
        _setOnline: function() {
           StatusAction.updateStatus(true);
        },
        _setOffline: function() {
            StatusAction.updateStatus(false);
        },

        render: function(){
            return (
               <div className="container">
                <h2>Hello, World</h2>
                <div className="btn-group">
                <p><a className="btn btn-primary" href="#" onClick={this._getStatus}>Get Status/...</a> </p>
                <p><a className="btn btn-primary" href="#" onClick={this._setOnline}>Set Online</a> </p>
                <p><a className="btn btn-primary" href="#" onClick={this._setOffline}>Set Offline</a> </p>
                </div>
                <p>Current Status: {this.state.Status}</p>
                <p>{this.state.s}</p>
                JSBench
                </div>
            )
        },

        _status : function(status){
            alert(status)
            console.log("the statuss:" + status);
        }
})




module.exports = MyRect
