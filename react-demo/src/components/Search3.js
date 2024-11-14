// Importing state from another ancestor component

import { useState } from 'react';
const Search3 = (props) => {
    // Destructuring props
    const { onSearch } = props;

    // Setting state variables
    const [searchTerm, setSearchTerm] = useState("");
    
    // Defining an event handler
    const handleChange = ({target: {value}}) => {
      setSearchTerm(value)
      // Function passed via props from App component
      onSearch(value)
    }
    return (
      <div style={searchStyle}>
        <h3>Basic Search Form 3</h3>
      <label htmlFor="search3">Search3: </label>
      <input 
        id="search3"
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={handleChange}
        aria-label="Search input"
        style={inputStyle} 
        />
       <div>
        <p>Searching for:</p>
        <strong>{searchTerm}</strong>
      </div>
    </div>
    )
  }
  const searchStyle = {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    borderBottom: '1px solid black', 
    paddingBottom: "30px",
    border: "1px solid black",
    padding: "20px",
    marginTop: "50px",
    height: "300px"
  }
  const inputStyle = {
    padding: "8px",
    marginTop: "10px",
    fontSize: "16px",
    width: "80%",
    maxWidth: "300px",
  };
  

  export default Search3;
