var React = require('react');
var ReactDOM = require('react-dom');
require("./App.css");

import Game from './Game'


var App = React.createClass({
  getInitialState() {
    return {
      matrix:[["a",1,2,3,4,5],
              ["b",0,0,0,0,0],
              ["c",0,0,0,0,0],
              ["d",0,0,0,0,0],
              ["e",0,0,0,0,0],
              ["f",0,0,0,0,0],
              ["g",0,0,0,0,0]],
      player: "red"
    };
  },
  handleClick(event) {
    console.log(event.target)
    var player = this.state.player === "red" ? "blue" : "red"
    this.setState({player: player})
  },
  render() {
    return (
      <div>
        <Game 
          matrix={this.state.matrix} 
          handleClick={this.handleClick}
        />
      </div>
    )
  }
})


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
