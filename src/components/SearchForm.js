import React from "react";

function SearchForm(props) {
  return (
    
      <div className="form-group">
       
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for Employee"
          id="search"
        />
        <button onClick={(e)=>props.toggleSort(e)} className="btn btn-primary mt-3">
          Sort by first name {props.sort ? "descending" : "ascending"} order
        </button>
      </div>
   
  );
}

export default SearchForm;
