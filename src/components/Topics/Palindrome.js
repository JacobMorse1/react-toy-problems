import React, { Component } from "react";

export default class Palindrome extends Component {

    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    };

    handleChange(value) {
        this.setState({userInput: value})
    };

    findPalindrome(userInput) {
        for(let i = 0; i < userInput.length / 2; i++) {
            if(userInput[i] !== userInput[userInput.length - 1 - i] ) {
                this.setState({ palindrome: 'false'})
            } else {
                this.setState({ palindrome: 'true'})
            }
        }     
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.findPalindrome(this.state.userInput)}>Check It</button>
                <span className="resultsBox">Is it a Palindrome? { this.state.palindrome }</span>
            </div>
        )

    }
}