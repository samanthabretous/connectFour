import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";

import Game from './Game'
const radix = 16;

const App = React.createClass({
  getInitialState() {
    return {
      matrix:[[0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0]],
      player: "r", 
      amountOfClicks: 0,
    };
  },
  handleClick(event) {

    //find the column that the user clicks on 
    let node = event.target.attributes.value.nodeValue;
    if(node){

      //iterate backwards through the column tp find available position
      let newMatrix = this.state.matrix;
      let arr = this.state.matrix[node]
      let i = null
      for(i = arr.length -1; i >= 0; i--){
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
      
   

      //switch players
      let player = this.state.player === "r" ? "b" : "r"
      this.setState({matrix: newMatrix, player: player, amountOfClicks: ++this.state.amountOfClicks})

      //check to see if there is a winner when there can be the first possible win
      //if(amountofclicks < 7) {
        this.winners(newMatrix, node, i, this.state.player)
      //}
      
    }
  },
  horizontalWinner(newMatrix, node, clickedIndex, player){
    let counter = 1;
    let i = parseInt(node, radix);
    let k = parseInt(node, radix);
    while(k > -1 || i < 7 ){

      //checks to the left of the clickedIndex
      if(k > -1){
        if(k===0){
          k=-1;
        }else if(newMatrix[k][clickedIndex] === newMatrix[k-1][clickedIndex]){
          counter++;
          k--;
        } else {
          k = -1
        }
      }

      //checks to the right of the clickedIndex
      if(i < 7){ 
        if(i === 6){
          i=7;
        }else if(newMatrix[i][clickedIndex] === newMatrix[i+1][clickedIndex]){
          counter++;
          i++;
        } else {
          i = 7;
        } 
      }

      if(counter === 4){
        console.log("winner"); 
        i=7;
        k=-1;
      }
    }
  },
  verticalWinner(newMatrix, node, clickedIndex, player){
    if(clickedIndex < 3){
      let counter = 1;
      for(let i = clickedIndex; i < newMatrix[node].length; i++){
        if(!(newMatrix[node][i] === newMatrix[node][i +1])){
          break;
        }
        counter ++
        if(counter === 4){
          console.log("winner"); 
        }
      }
    }
  },
  bottomLeft_TopRight(newMatrix, node, clickedIndex, player){

    //checks for dias in the left to right direction
    //----------------------------------------------
    let counter = 1;
    let i = parseInt(node, radix);
    let k = parseInt(clickedIndex, radix);

    let ii = parseInt(node, radix)
    let kk = parseInt(clickedIndex, radix)

    while(k > -1 || i < 7 || ii > -1 || kk < 6){      
      console.log(newMatrix[i][k], newMatrix[ii][kk])

      if(k > -1 || i < 7 ){
        if(i === 6 || k === 0){
          break;
        }
        if(newMatrix[i+1][k-1] !== undefined){
          if(newMatrix[i][k] === newMatrix[i+1][k-1]){
            console.log("enter")
            counter++;
            i++
            k--;
          } else {
            k = -1
            i = 7
          }
        }
      }
      if(ii > -1 || kk < 6){
        if(ii === 0){
          break;
        }

        if(newMatrix[ii][kk] === newMatrix[ii-1][kk+1]){
          console.log("enter back")
          counter++;
          ii--;
          kk++;
        } else {
          ii = -1
          kk = 6
        }
        
      }

      if(counter === 4){
        console.log("winner"); 
        i=7;
        k=-1;
        ii= -1;
        kk = 6
      } 
    }
  },
  winners(newMatrix, node, clickedIndex, player){
    this.horizontalWinner(newMatrix, node, clickedIndex, player)
    this.verticalWinner(newMatrix, node, clickedIndex, player)
    this.bottomLeft_TopRight(newMatrix, node, clickedIndex, player)
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