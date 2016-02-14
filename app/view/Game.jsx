import React from 'react';
import UserChooser from './UserChooser.jsx';
import Board from './Board.jsx';

export default React.createClass({
  getInitialState: function() {
    return {
      userMarker: 'o',
      board: this.props.initialBoard,
      canChangeUser: this.props.canChangeUser,
      message: this.props.initialMessage,
      winner: null
    };
  },
  handleUserChange: function(user) {
    this.setState({userMarker: user});
  },
  handleClick: function(row, col) {
    this.props.handleClick(this, row, col);
  },
  render: function() {
    return (
      <div>
        <h1>TicTacToe</h1>
        <UserChooser onChange={this.handleUserChange}
          defaultOption={this.state.userMarker}
          enabled={this.state.canChangeUser}/>
        <Board handleClick={this.handleClick} board={this.state.board}/>
        <span className="message">{this.state.message}</span><br/>
      </div>
    );
  }
});
