// Two sibling components with props passed between them
const SearchBar = (props) => {
// Destructure props
 const {onUpdateSearch} = props;
 
    return (
      <div>
        <h3>Sibling Search Bar</h3>
        <input type="search" onChange={onUpdateSearch} />
      </div>
    ) 
  }

export default SearchBar;