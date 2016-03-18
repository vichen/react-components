class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'bold' : 'none'
    };

    return (
      <li style={style} onmouseover={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }


}

var GroceryListItem = (props) => (
  <ul>
    {props.items.map(item) =>
      <GroceryListItem item={item} /> 
      )}
  </ul>
);



ReactDOM.render(<App />, document.getElementById("div #app"));