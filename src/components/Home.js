import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <Link to="/tournament" className="btn btn-primary">Male</Link>
                <Link to="/tournament" className="btn btn-primary">Female</Link>
                <Link to="/upload" className="btn btn-primary">Add player</Link>
            </div>
        )
    }
}


export default Home;