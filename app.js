
var items = ['cough drops', 'cucumbers', 'chocolate', 'increase'];

function GroceryListItem(props) {
  return <li >{props.value}</li>;
}

function GroceryList(props) {

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

function App() {
  return (
    <div>
      <h2>Grocery List</h2>
      <GroceryList items={items} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
