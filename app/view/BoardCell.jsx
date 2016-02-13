export default React.createClass({
  render: function() {
    return (
      <div onClick={this.props.handleClick}>
        {this.props.value ? this.props.value : '\u00a0'}
      </div>
    );
  }
});
