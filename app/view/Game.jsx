import UserChooser from './UserChooser.jsx';
import Board from './Board.jsx';

export default React.createClass({
  getInitialState: function() {
    return {
      userMarker: 'o',
      board: this.props.initialBoard,
      canChangeUser: this.props.canChangeUser
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
        <UserChooser onChange={this.handleUserChange}
          defaultOption={this.state.userMarker}
          enabled={this.state.canChangeUser}/>
        <Board handleClick={this.handleClick} board={this.state.board}/>
      </div>
    );
  }
});
