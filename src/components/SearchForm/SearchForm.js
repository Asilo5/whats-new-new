import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    constructor() {
      super();
      this.state = {
        newsSearch: ''
      }
    }

    handleChange = (e) => {
      this.setState({ newsSearch : e.target.value })
    }

    updateState = (e) => {
      e.preventDefault();
      this.props.searchNews(this.state.newsSearch);
      this.clearInputs();
    }

    clearInputs = () => {
      this.setState({ newsSearch : '' })
    }

  render() {
    return (
      <form>
          <input placeholder='Search Article For Here' 
                 name='newsSearch'
                 value={this.state.newsSearch}
                 onChange={this.handleChange}/>
          <button onClick={this.updateState}>Search</button>
      </form>
    )
  }
}

export default SearchForm;