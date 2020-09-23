import React, { Component } from 'react';
import './App.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Content from './components/content';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Content />
      </main>
    );
  }
}
export default App;
