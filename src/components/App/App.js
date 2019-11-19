import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allNews: [],
      currentNews: local,
      hasError: ''
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(resp => resp.json())
    .then(data => this.setState({ allNews : data }))
    .catch(error => this.setState({ hasError : error }))
  }

  render () {
    console.log(this.state.allNews);
    return (
      <div className="app">
        YOUR CODE GOES HERE!
      </div>
    );
  }
}

export default App;
