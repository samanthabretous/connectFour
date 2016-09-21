var React = require('react')

var Box = React.createClass({
  render() {
    return(
      <article className="box">
        <div className={this.props.value + " circle"} value={this.props.alt}>{this.props.value}</div>
      </article>
    )
  }
})

export default Box