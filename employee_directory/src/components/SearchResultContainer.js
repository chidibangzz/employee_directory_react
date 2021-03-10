import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import Card from "./Card";



class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("");
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => {

        this.setState({ results: res.data.results })
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <div>
        <Card heading="Search">
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            breeds={this.state.results}
          />
        </Card>
        <Card>
          <ResultList
    
            results={this.state.results}
            
          
          />
        </Card>
      </div>
    );
  }
}


export default SearchResultContainer;