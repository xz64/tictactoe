import BoardCell from './BoardCell.jsx';

export default React.createClass({
  getInitialState: function() {
    return {cells: [['x', '', ''],[ '', '', ''], ['', '', 'x']]};
  },
  handleClick: function(i) {
    alert("You pressed " + i);
  },
  render: function() {
    return (
      <table>
      <tbody>
        {this.state.cells.map(function(row, i) {
          return (
            <tr>
              {row.map(function(cell, j) {
                return (
                  <td>
                    <BoardCell key={3*i+j} value={this.state.cells[i][j]}
                        onPress={this.handleClick.bind(this, 3*i+j)}/>
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
