import React, { Component } from 'react';
import { girls } from '../data';

const styles = {
    image: {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
    },
}

class Tournament extends Component {
    constructor(props){
        super(props);

        this.people = girls.slice(0,16);
        this.winner = [];
        this.state = {
            index: 0,
            final: false
        }
        this.handleImage = this.handleImage.bind(this);
    }

    handleImage(index) {
        this.winner.push(index);
        console.log(this.winner);
        console.log(this.winner.length);
        console.log(this.people.length);
        if (this.winner.length === 1 && this.people.length === 2){
            this.setState({final: true});
        }
        else if (this.winner.length === (this.people.length / 2)) {
            this.initialize();
        } else {
            this.setState({ index: this.state.index + 2} )
        }
        console.log(this.winner)
    }

    initialize() {
        let arr = [];
        this.winner.forEach(item => {
            arr.push(this.people[item]);
        })
        this.people = [...arr];
        this.winner = [];
        this.setState({ index: 0 });
    }

    competition() {
        return (
            <div>
                <img onClick={() => {this.handleImage(this.state.index)}} style={styles.image} src={this.people[this.state.index]} />
                <img onClick={() => {this.handleImage(this.state.index + 1)}} style={styles.image} src={this.people[this.state.index + 1]} />

            </div>
        )
    }

    renderWinner() {
        return (
            <div>
                <img src={this.people[this.winner[0]]} />
            </div>
        )
    }

    render() {
        if (this.state.final) {
            return (
                <div>
                    {this.renderWinner()}
                </div>
            )
        } else {
            return (
                <div>
                    {this.competition()}
                </div>
            )
        }
    }
}


export default Tournament;