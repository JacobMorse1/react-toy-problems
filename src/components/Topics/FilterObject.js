import React, { Component } from "react";

export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            UnfilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            
            userInput: "",
            filteredArray: []
        }
    };

    handleChange(value) {
        this.setState({userInput: value})
    };

    filteringObject(prop) {
        let employees = this.state.UnfilteredArray
        let filteredArray = []

        for (let i = 0; i < employees.length; i++) {
            if( employees[i].hasOwnProperty(prop)) {
                filteredArray.push(employees[i]);
            }
        }
        this.setState({filteredArray: filteredArray})
    }



    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.UnfilteredArray, null, 10)}</span>
                <input className="inputLine" type="text" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.filteringObject(this.state.userInput)}} >Filter the Object</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )

    }
}