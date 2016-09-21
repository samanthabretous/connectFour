var React = require('react');
var ReactDOM = require('react-dom');
require("./App.css");

import Game from './Game'


var App = React.createClass({
  getInitialState() {
    return {
      matrix:[[0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0]],
      player: "r"
    };
  },
  handleClick(event) {

    //find the column that the user clicks on 
    var node = event.target.attributes.value.nodeValue
    console.log(node)
    if(node){

      //iterate backwards through the column tp find available position
      var newMatrix = this.state.matrix;
      var arr = this.state.matrix[node]
      for(var i = arr.length -1; i > 0; i--){
        if(arr[i] === 0){
          arr[i] = this.state.player;
          break;
        } 
      }
      console.log(arr)
      newMatrix[node] = arr
      console.log(newMatrix)
      //switch players
      var player = this.state.player === "r" ? "b" : "r"
      this.setState({maxtrix: newMatrix, player: player})
    }
  },
  render() {
    console.log(this.state)
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
