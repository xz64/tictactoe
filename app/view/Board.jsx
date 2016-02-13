import BoardCell from './BoardCell.jsx';

export default React.createClass({
  getInitialState: function() {
    return this.props.initialState;
  },
  handleClick: function(row, col) {
    this.props.handleClick(this, row, col);
  },
  render: function() {
    return (
      <table>
      <tbody>
        {this.state.board.map(function(row, i) {
          return (
            <tr key={i}>
              {row.map(function(cell, j) {
                return (
                  <td key={3*i+j}>
                    <BoardCell key={3*i+j} value={this.state.board[i][j]}
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
