import './App.css';
import React, { Component } from 'react'
import Figures from './components/Figures.js';

class App extends Component {

    state = {
        figures: []
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        // fetch('http://localhost:3001/')
            .then(res => res.json())
            .then((data) => {
            this.setState({ figures: data })
        })
        .catch(console.log)
    }
    render() {
        return (
            <Figures figures={this.state.figures} />
        );
    }
    
    
}

export default App;
