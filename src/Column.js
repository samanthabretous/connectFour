var React = require('react')
import Box from './Box';


var Column = React.createClass({

  render () {
    var arr = this.props.arr;
    //arr goes here
    var boxes = arr.map(function(elem, i){
      return <Box value={elem} key={i}/>
    });
    return(
      <section value={this.props.index} className="column">
        {boxes}
      </section>
    )
  }
})

export default Column