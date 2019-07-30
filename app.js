
var items = ['cough drops', 'cucumbers', 'chocolate', 'increase'];

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    console.log("CLICKEEEED!!!!");
    this.setState({
      done: !this.state.done
    });
  };
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.value}</li>
    );
  }
};

var GroceryList = (props) => {

  var items = props.items;
  var listItems = items.map((item) =>
    <GroceryListItem key={item}
                     value={item} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={items} />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
