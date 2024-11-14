// List of people using map with props passed from ancestor element
function People1({ persons }) {
    return (
      <div style={mapExStyle}>
        <h3>People example1</h3>
        <h5>Example using the Array.prototype.map()</h5>
        <ul style={listStyle}>
          {persons.map(({id, first_name, last_name, email, ip_address}) => {
            return <li key={id} style={personStyle}>
              <span><a href={`http://${ip_address}`}>{ip_address}</a></span>
              <span>{email}</span>
              <span>{first_name} {last_name}</span>
              </li>
          })}
        </ul>
      </div> 
    )
  }

const mapExStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid black",
  width: "80%",
  marginTop: "50px"
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
  export default People1;