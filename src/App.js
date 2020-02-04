import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import {robots} from './Robot.js'
import Scroll from './Scroll.js';

class App extends Component {
    constructor() {
        super();
        this.state= {
            robots : robots,
            SearchField : ''
        }
    }
    onsearchchange =(event) => {
      //  console.log(event.target.value);
        this.setState({SearchField : event.target.value})
    }
    render () {
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
        })
        return (
            <div className='tc'>
            <h1>Robo Friends</h1>
            <SearchBox searchchange={this.onsearchchange}/>
            <Scroll>
            <CardList robots={filteredrobots} />
            </Scroll>
            </div>
       );
    }
} 

export default App;