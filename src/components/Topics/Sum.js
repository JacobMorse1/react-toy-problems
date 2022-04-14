import React, { Component } from "react";

export default class Sum extends Component {

    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    };

    handleChangeOne(value) {
        this.setState({number1: parseInt(value, 10)})
    };
    handleChangeTwo(value) {
        this.setState({number2: parseInt(value, 10)})
    };

    findSum(num1, num2) {
        let add = num1 + num2
        this.setState({sum: add})
    };


    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleChangeOne(e.target.value)}></input>
                <input className="inputLine" onChange={(e) => this.handleChangeTwo(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.findSum(this.state.number1, this.state.number2)}>Add 'em Up</button>
                <span className="resultsBox"> SUM: {this.state.sum}</span>
            </div>
        )

    }
}