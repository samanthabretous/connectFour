var React = require('react')
import Box from './Box';


var Column = React.createClass({

  render () {
    var arr = this.props.arr;
    var index= this.props.index
    //arr goes here
    var boxes = arr.map(function(elem, i){
      return <Box value={elem} alt={index} key={i} />
    });
    return(
      <section value={index} className="column">
        {boxes}
      </section>
    )
  }
})

export default Column