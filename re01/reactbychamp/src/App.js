import React, { Component } from 'react';
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
      <Header />
      <Main/>
      <Footer/>
      
    </div>
    );
  }
}

export default App;
