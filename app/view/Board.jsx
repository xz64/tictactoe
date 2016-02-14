import React from 'react';
import classNames from 'classnames';
import BoardCell from './BoardCell.jsx';

export default React.createClass({
  handleClick: function(row, col) {
    this.props.handleClick(row, col);
  },
  isClickable(row, col) {
    return this.props.board[row][col] !== null;
  },
  render: function() {
    return (
      <table className="board">
      <tbody>
        {this.props.board.map(function(row, i) {
          return (
            <tr key={i}>
              {row.map(function(cell, j) {
                return (
                  <td key={3*i+j} className={classNames('cell',
                    {'clickable' : this.props.board[i][j].value ===
                      null})}>
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
