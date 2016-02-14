import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <td onClick={this.props.handleClick} className={this.props.classes}>
        {this.props.cell.value ? this.props.cell.value.toUpperCase() : '\u00a0'}
      </td>
    );
  }
});
