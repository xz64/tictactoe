export default React.createClass({
  getInitialState: function() {
    return {userMarker: 'o', AIMarker: 'x'};
  },
  getOpponentMarker: function(marker) {
    return marker === 'o' ? 'x' : 'o';
  },
  handleChange: function(e) {
    this.setState({
      userMarker: e.currentTarget.value,
      AIMarker: this.getOpponentMarker(e.currentTarget.value)
    });
  },
  render: function() {
    return (
      <div>
        <input type="radio" name="user" value="o" defaultChecked="true"
          onChange={this.handleChange} checked={this.state.userMarker === 'o'}>
        </input>
        O
        <input type="radio" name="user" value="x" onChange={this.handleChange}
          checked={this.state.userMarker === 'x'}>
        </input>
        X
      </div>
    );
  }
});
