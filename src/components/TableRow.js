import React, { Component } from 'react';

class TableRow extends Component {
    state = {
        persons:[
            {
                firstName: "Test1",
                lastName:"Tessson1"
            },
            {
                firstName: "Test2",
                lastName:"Tessson2"
            },
            {
                firstName: "Test3",
                lastName:"Tessson3"
            }
        ]
    }

    getPersonListHandler(){
        // invoke web service or rest api
    }
    
    render() {
        return (
            <tbody>
                {
                    this.state.persons.map( person => 
                        <tr key={person.firstName}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>
                                <button type="submit" className="btn btn-info" >Details</button>
                            </td>
                        </tr>
                        )
                }
            </tbody>
        );
    }
}

export default TableRow;
