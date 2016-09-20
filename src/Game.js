var React = require('react')

import Column from './Column'


var Game = React.createClass({

  //return columns
  render() {
    var matrix = this.props.matrix

    var columns = matrix.map(function(arr, i){
      return <Column arr={arr} key={i} index={i} />
    })
    return(
      <div 
        className="game"
        onClick={this.props.handleClick}
      >
      {columns}
      </div>
    )
  }

})

export default Game

