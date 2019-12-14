import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './conponents/MenuConponent'
import {TOPICS} from './shared/topicsDetails'

class App extends Component {
  constructor(props){
  super(props);
    this.state = {
      topics : TOPICS
    }
  }
  render() {    
    return (
      <div>
      <div className="App">
        <Navbar dark color="secondary">
          <div className="container">
            <NavbarBrand href="/">ReactJs</NavbarBrand>
          </div>
        </Navbar>
         <Menu topics={this.state.topics}/>
      </div></div>
    );
  }
}

export default App;
