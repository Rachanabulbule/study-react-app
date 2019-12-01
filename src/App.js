import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './conponents/MenuConponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="secondary">
          <div className="container">
            <NavbarBrand href="/">ReactJs</NavbarBrand>
          </div>
        </Navbar>
         <Menu/>
      </div>
    );
  }
}

export default App;
