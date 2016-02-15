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
            <tr key={i} className="cellrow">
              {row.map(function(cell, j) {
                return (
                  <BoardCell key={3*i+j}
                    classes={classNames('cell',
                      {'clickable' : this.props.board[i][j].value === null},
                      {'highlight' : this.props.board[i][j].highlight}
                    )}
                    cell={this.props.board[i][j]}
                    handleClick={this.handleClick.bind(this, i, j)}/>
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
