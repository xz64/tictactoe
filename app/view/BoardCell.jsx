export default React.createClass({
  render: function() {
    return (
      <div onClick={this.props.handleClick}
        className={this.props.cell.highlight ? "highlight": ""}>
        {this.props.cell.value ? this.props.cell.value.toUpperCase() : '\u00a0'}
      </div>
    );
  }
});
