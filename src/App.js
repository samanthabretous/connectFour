var React = require('react');
var ReactDOM = require('react-dom');
require("./App.css");

import Game from './Game'


var App = React.createClass({
  getInitialState() {
    return {
      matrix:[["a",0,0,0,0,0],
              ["b",0,0,0,0,0],
              ["c",0,0,0,0,0],
              ["d",0,0,0,0,0],
              ["e",0,0,0,0,0],
              ["f",0,0,0,0,0],
              ["g",0,0,0,0,0]]};
  },
  render() {
    console.log(<Game/>)
    return (
      <div>
        <Game/>
      </div>
    )
  }
})


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
