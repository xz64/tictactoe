import React from 'react';
import BoardCell from './BoardCell.jsx';

export default React.createClass({
  handleClick: function(row, col) {
    this.props.handleClick(row, col);
  },
  render: function() {
    return (
      <table>
      <tbody>
        {this.props.board.map(function(row, i) {
          return (
            <tr key={i}>
              {row.map(function(cell, j) {
                return (
                  <td key={3*i+j}>
                    <BoardCell key={3*i+j} cell={this.props.board[i][j]}
                      handleClick={this.handleClick.bind(this, i, j)}/>
                  </td>
                );
              }, this)}
            </tr>
          );
        }, this)}
      </tbody>
      </table>
    );
  }
});
