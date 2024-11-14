import { useState } from 'react';
export const Search2 = () => {

    // Setting state variables
    const [searchTerm, setSearchTerm] = useState("");

    // Defining event handler
    const handleChange = (e) => {
      setSearchTerm(e.target.value)
    }
    
    return (
      <div style={searchStyle}>
        <h3>Basic Search Form2</h3>
      <label htmlFor="search2">Search2: </label>
      <input 
        id="search2" 
        type="text"
        placeholder="Type your search term" 
        onChange={handleChange}
        aria-label="Search input"
        style={inputStyle} />
      
      {searchTerm && (
        <div>
          <p>Searching for:</p>
          <p>{searchTerm}</p>
        </div>
      )}
      
    </div>
    )
  }
  // Defining style in a JS object
  const searchStyle = {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    borderBottom: '1px solid black', 
    paddingBottom: "30px",
    border: "1px solid black",
    padding: "20px",
    marginTop: "50px",
    height: "400px"
  }
  const inputStyle = {
    padding: "8px",
    marginTop: "10px",
    fontSize: "16px",
    width: "80%",
    maxWidth: "300px",
  };
  

  export default Search2;