var React = require('react');
var ReactDOM = require('react-dom');
require("./App.css");

import Game from './Game'


var App = React.createClass({
  getInitialState() {
    return {
      matrix:[["a",0,0,0,0,0],
              [0,0,0,0,0,0],
              ["c",0,0,0,0,0],
              ["d",0,0,0,0,0],
              ["e",0,0,0,0,0],
              ["f",0,0,0,0,0],
              ["g",0,0,0,0,0]],
      player: "r", 
      amountOfClicks: 0,
    };
  },
  handleClick(event) {
    console.log(event.target.attributes.value.nodeValue)
    //find the column that the user clicks on 
    var node = event.target.attributes.value.nodeValue;
    if(node){

      //iterate backwards through the column tp find available position
      var newMatrix = this.state.matrix;
      var arr = this.state.matrix[node]
      for(var i = arr.length -1; i >= 0; i--){
        if(arr[i] === 0){
          arr[i] = this.state.player;
          newMatrix[node] = arr
          break;
        } 

        // when at the end of the column do not change the state
        if(i === 0){
          return
        }
      }
      
      //check to see if there is a winner when there can be the first possible win
      //if(amountofclicks < 7) {
        this.winners(newMatrix, node, i, this.state.player)
      //}

      //switch players
      var player = this.state.player === "r" ? "b" : "r"
      this.setState({matrix: newMatrix, player: player, amountOfClicks: ++this.state.amountOfClicks})

      
    }
  },
  winners(newMatrix, node, clickedIndex, player){
    
    // //check column wins-----------------------
    // //check column wins-----------------------
    if(clickedIndex < 3){
      var counter = 1;
      for(var i = clickedIndex; i < newMatrix[node].length; i++){
        if(!(newMatrix[node][i] === newMatrix[node][i +1])){
          break;
        }
        counter ++
        if(counter === 4){
          console.log("winner"); 
        }
      }
    }

    //check row wins-----------------------------
    //check row wins-----------------------------
    counter = 1;
    i = parseInt(node);
    // i=7; 
    var k = parseInt(node);
    while(k > -1 || i < 7 ){

      //checks for k
      if(k > -1){
        if(k===0){
          k=-1;
        }else if(newMatrix[k][clickedIndex] === newMatrix[k-1][clickedIndex]){
          counter++;
          k--;
        } else {
          k = -1
        }

        if(counter === 4){
          console.log("winner"); 
          i=7;
          k=-1;
        } 
      }

      //checks for i
      if(i < 7){ 
        if(i === 6){
          i=7;
        }else if(newMatrix[i][clickedIndex] === newMatrix[i+1][clickedIndex]){
          counter++;
          i++;
        } else {
          i = 7;
        }

        if(counter === 4){
          console.log("winner"); 
          i=7;
          k=-1;
        } 
      }
    }

    // // //checks for dias from left to right
    // counter = 1;
    // i = parseInt(node);
    // // i=7; 
    // k = parseInt(node);
    // while(k > -1 || i < 7 ){
    //   console.log("counter", counter, "i", i, "k", k);

    //   if(newMatrix[i][k] === newMatrix[i+1][k-1]){
    //     counter++;
    //     i++
    //     k--;
    //   } else {
    //     k = -1
    //     i==7
    //   }

    //     if(counter === 4){
    //       console.log("winner"); 
    //       i=7;
    //       k=-1;
    //     } 
    //   }

    //   i++

    //   if(i === 100 || k === -100){
    //     break;
    //   }
    // }

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