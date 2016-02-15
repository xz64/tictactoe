import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {selectedOption: this.props.defaultOption};
  },
  handleChange: function(e) {
    var destUser = e.currentTarget.value;
    this.setState({selectedOption: destUser});
    this.props.onChange(destUser);
  },
  render: function() {
    return (
      <div>
        Play as:{'  '}
        <label className="radio-inline">
        <input type="radio" name="user" value="o" defaultChecked="true"
          onChange={this.handleChange}
          checked={this.state.selectedOption === 'o'}
          disabled={!this.props.enabled}>
        </input>
        O
        </label>
        <label className="radio-inline">
        <input type="radio" name="user" value="x" onChange={this.handleChange}
          checked={this.state.selectedOption === 'x'}
          disabled={!this.props.enabled}>
        </input>
        X
        </label>
      </div>
    );
  }
});
