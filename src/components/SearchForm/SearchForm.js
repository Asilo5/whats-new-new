import React, { Component } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

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

SearchForm.propTypes = {
  searchNews: PropTypes.func
}

export default SearchForm;