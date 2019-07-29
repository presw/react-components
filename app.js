// TODO
var groceryItems = [{food: 'cough drops'}, {food: 'cucumbers'}, {food: 'chocolate'}];

var GroceryListItem = (props) =>
  return <li >{props.food}</li>
);

var GroceryList = (props) => {
  var items = props.food;
  var listItems = items.map((item) =>
    <GroceryListItem key={food} value={food.item} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
};

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
