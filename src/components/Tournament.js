import React, { Component } from 'react';
import { connect } from 'react-redux';
import { girls } from '../data';
import { selectGender, selectPerson } from '../actions';

const styles = {
    image: {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
    },
}

class Tournament extends Component {
    constructor(){
        super();

        this.winner = [];
        this.state = {
            index: 0,
            final: false
        }
        this.handleImage = this.handleImage.bind(this);
        this.imagePath = '../images/females/';
    }

    componentWillMount() {
        // console.log("SELECTGEN: ", this.props.match.params)
        this.props.selectGender(this.props.match.params.gender);
    }

    handleImage(index) {
        this.props.selectPerson(index);

        // if (this.winner.length === 1 && this.people.length === 2){
        //     this.setState({final: true});
        // }
        // else if (this.winner.length === (this.people.length / 2)) {
        //     this.initialize();
        // } else {
        //     this.setState({ index: this.state.index + 2} )
        // }
        // console.log(this.winner)
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
        const { people } = this.props.game;
        return (
            <div>
                <img 
                    onClick={() => {this.handleImage(this.state.index)}} 
                    style={styles.image} 
                    src={this.imagePath + people[this.state.index]} 
                />
                <img 
                    onClick={() => {this.handleImage(this.state.index + 1)}} 
                    style={styles.image} 
                    src={this.imagePath + people[this.state.index + 1]} 
                />
            </div>
        )
    }

    renderWinner() {
        return (
            <div>
                <img src={this.imagePath + this.people[this.winner[0]]} />
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

function mapStateToProps(state) {
    return {
        game: state.game
    }
}


export default connect(mapStateToProps, {selectGender, selectPerson})(Tournament);