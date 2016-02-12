export default React.createClass({
  render: function() {
    return (
      <div onClick={this.props.onPress}>
        {this.props.value}
      </div>
    );
  }
});
