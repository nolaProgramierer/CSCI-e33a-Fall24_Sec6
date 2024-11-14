// Importing 'persons' object from App.js
const List = ({persons}) => {
    return (
      <div style={listContainerStyle}>
        <h3>List example using map method</h3>
        <h5>Using another component inside the map method</h5>
        {/* Iterating through every element of 'persons' object */}
         <ul style={listStyle}>
          {persons.map((item) => (
            // Passing iterable element into 'Item' component
            <Item key={item.id} item={item} />
          ))}
      </ul>
      </div>
     
    )
  }

  // Component could be declared elsewhere
  const Item = ({ item }) => {
    return (
      <li style={personStyle}>
        <span><a href={`http://${item.ip_address}`}>{item.ip_address}</a></span>
        <span>{item.first_name} {item.last_name}</span>
        <span>{item.email}</span>
      </li>
    )
  }

  const listContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    width: "80%",
    margin: "50px 0px",
  }
  const listStyle = {
    listStyleType: "none",
    padding: 0,
    width: "100%"
  };
  const personStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "5px 0",
    borderBottom: "1px solid #ccc"
  };

export default List;