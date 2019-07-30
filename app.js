
var items = ['cough drops', 'cucumbers', 'chocolate', 'increase'];

var GroceryListItem = (props) => (
  <li >{props.value}</li>
);

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
