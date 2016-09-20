var React = require('react')
import Box from './Box';


var Column = React.createClass({

  render () {
    console.log(Box)
    var boxes = []
    for(var i = 0; i < 6; i++){
      boxes.push(<Box />)
    }
    return(
      <section className="column">
        {boxes}
      </section>
    )
  }
})

export default Column