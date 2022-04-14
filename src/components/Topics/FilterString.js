import React, { Component } from "react";

export default class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            stringArr: ['Jake', 'Josh', 'Rachel', 'Rick', 'Mike', 'John'],
            userInput: '',
            filteredArr: []
        };    
    };


    handleChange(value) {
        this.setState({userInput: value})
    };

    filterStrg(userInput) {
        let arr = this.state.stringArr
        let filteredArr = [];

        for(let i = 0; i < arr.length; i++) {
            if (arr[i].includes(userInput)) {
                filteredArr.push(arr[i]);
            }
        }
        this.setState({filteredArr: filteredArr})
    };




    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.arr, null, 10)} </span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterStrg(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB"> Filtered String: {JSON.stringify(this.state.filteredArr, null, 10)} </span>
            </div>
        )

    }
}