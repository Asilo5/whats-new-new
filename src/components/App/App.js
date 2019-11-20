import React, { Component } from 'react';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allNews: {},
      currentNews: [],
      hasError: ''
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(resp => resp.json())
    .then(data => this.setState({ allNews : data, currentNews : data.local }))
    .catch(error => this.setState({ hasError : error }))
  }

  filterNews = (chosenNews) => {
    this.setState({ currentNews: chosenNews })
  }

  searchNews = (searchedNews) => {
    let foundNews = this.state.currentNews.filter((news) => {
      let lowerCaseNews = news.headline.toLowerCase();
      return lowerCaseNews.includes(searchedNews.toLowerCase())
    });
    this.setState({ currentNews: foundNews })
  }

  render () {
    return (
      <section className="app">
        <h1>What's New Times?</h1>
        <Menu allNews={this.state.allNews} filterNews={this.filterNews} />
        <SearchForm searchNews={this.searchNews} />
        <NewsContainer currentNews={this.state.currentNews} />
      </section>
    );
  }
}

export default App;
