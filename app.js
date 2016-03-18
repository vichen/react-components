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
      <li style={style} onmouseover={this.onListItemHover.bind(this)}>{this.props.items}</li>
    );
  }


}

var GroceryList = (props) => {
  return (
  <ul>
    {props.items.map(items =>
      <GroceryListItem items={items} /> 
      )}
  </ul>
  )
};

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['apples', 'kale']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));