import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Content from './components/content';

class App extends Component {
  state = {
    count: 0,
  };
  buy = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  render() {
    return (
      <main className="app">
        <Header count={this.state.count} />
        <Content buy={this.buy} />
      </main>
    );
  }
}
export default App;
