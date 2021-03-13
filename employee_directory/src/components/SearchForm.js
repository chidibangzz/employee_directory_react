import React from "react";

function SearchForm(props) {
  return (
    
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
        
          type="text"
          className="form-control"
          placeholder="Search for Employee"
          id="search"
        />
        <button onClick={(e)=>props.sortDescending(e)} className="btn btn-primary mt-3">
          Sort by Name descending order
        </button>
      </div>
   
  );
}

export default SearchForm;
