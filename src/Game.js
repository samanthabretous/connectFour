var React = require('react')

import Column from './Column'


var Game = React.createClass({

  //return columns
  render() {
    var columns = []
    for(var i = 0; i < 7; i++){
      columns.push(<Column />)
    }
    return(
      <div className="game">
      {columns}
      </div>
    )
  }

})

export default Game

