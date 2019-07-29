
function GroceryListItem(props) {
  return <li >{props.value}</li>;
}

function GroceryList(props) {
  var items = props.listItem;
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


var anything = ['cough drops', 'cucumbers', 'chocolate', 'increase'];
ReactDOM.render(
  <GroceryList listItem={anything} />,
  document.getElementById('app')
);
