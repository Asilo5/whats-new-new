import React, { Component } from 'react';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';

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

  render () {
    console.log(this.state.currentNews)
    return (
      <section className="app">
        <NewsContainer currentNews={this.state.currentNews} />
      </section>
    );
  }
}

export default App;
