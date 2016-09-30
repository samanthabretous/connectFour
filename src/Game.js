import React from 'react'
import Column from './Column'


var Game = React.createClass({

  //return columns
  render() {
    var matrix = this.props.matrix

    //not best practice change it
    var that= this;
    var columns = matrix.map(function(arr, i){
      return <Column arr={arr} key={i} index={i}  onClick={that.props.handleClick}/>
    })
    return(
      <div 
        className="game"
      >
      {columns}
      </div>
    )
  }

})

export default Game

