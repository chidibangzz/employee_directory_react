import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import Card from "./Card";



class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    allResults: [],
    sort :true//if true this is ascending
  };

  toggleSort=(e) => {
    e.preventDefault();
    this.setState ({
      ...this.state,
      sort: !this.state.sort
    });
  }

  // !this.state.sort
  sortNames = (a, b) => {
    if(this.state.sort) { // if true then sort in descending

      if(a.name.first < b.name.first) return -1;
      else if(a.name.first > b.name.first) return 1;
      
    } else { // else sort ascending

      if(a.name.first < b.name.first) return 1;
      else if(a.name.first > b.name.first) return -1;

    }
    return 0;
  }
  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    console.log("testing");
    API.search().then(res => {
     this.setState({ results: res.data.results, allResults: res.data.results })
      console.log(res.data.results);
      }).catch(err => console.log(err));
  }

  

  handleInputChange = event => {
    let searchResult = event.target.value.toLowerCase();
    //console.log(searchResult);

    let newEmployees = this.state.allResults.filter(person => `${person.name.first.toLowerCase()}`.includes(searchResult))

    if (!searchResult) {
      this.setState({
        search: searchResult,
        results: this.state.allResults
      })
    } else {
      this.setState({
        search: searchResult,

        results: newEmployees
      })
    }
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGet(this.state.search);
  };

  render() {

    
    return ( 

      <div>
        <Card heading="Search">
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            sort={this.state.sort}
            toggleSort={this.toggleSort}
          />
        </Card>
        <Card>
          <ResultList
            handleSortNames={this.sortNames}
            results={this.state.results}
          />
        </Card>
      </div>
    );
  }
}


export default SearchResultContainer;