import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Figures from './components/figures';

class App extends Component {

    state = {
        figures: []
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
            this.setState({ contacts: data })
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
