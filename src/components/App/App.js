import React, { Component } from 'react';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

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

  render () {
    console.log(this.state.currentNews)
    return (
      <section className="app">
        <h1>What's New?</h1>
        <Menu allNews={this.state.allNews} filterNews={this.filterNews} />
        <NewsContainer currentNews={this.state.currentNews} />
      </section>
    );
  }
}

export default App;
