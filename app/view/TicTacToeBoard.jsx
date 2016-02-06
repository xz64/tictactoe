import BoardCell from './BoardCell.jsx';

export default React.createClass({
  getInitialState: function() {
    return {cells: ['', '', '', '', '', '', '', '', '']};
  },
  render: function() {
    return (
      <div>
        {this.state.cells.map(function(item) {
          return (<BoardCell value={item}/>);
        })}
      </div>
    );
  }
});
