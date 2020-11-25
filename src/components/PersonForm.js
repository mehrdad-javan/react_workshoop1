import React, { Component } from 'react';
import Person from './Person';

class PersonForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            fristName:"",
            lastName: ""
        }
    }

    savePersonHandler = (e) => {
        e.preventDefault(); 
        let person = {firstName: this.state.firstName, lastName: this.state.lastName};
        // invoke web service or rest api
        console.log('pesron >>>>> ', person);
    }
        
    handleChangeFirstName = (event)=>{
        this.setState({firstName: event.target.value});
        console.log('FirstName====>   ' , event.target.value);
    }

    handleChangeLastName = (event)=>{
        this.setState({lastName: event.target.value});
        console.log('LastName====>   ' , event.target.value);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.savePersonHandler}>
                    <div className="card">
                        <div className="card bg-secondary text-white">
                            <div className="card-body"><h4>Person Form</h4></div>
                        </div>
                        <div className="card-body was-validated">
                            <div className="card-body row">
                                <label>First Name:</label>
                                <input type="text" value={this.props.firstName} onChange={this.handleChangeFirstName} className="form-control" id="firstName" placeholder="Enter First Name" required/>
                                <div className="valid-feedback">Valid.</div> 
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </div>
                            <div className="card-body row">
                                <label>Last Name:</label>
                                <input type="text" value={this.props.lastName} onChange={this.handleChangeLastName} className="form-control" id="lastName" placeholder="Enter Last Name" required/>
                                <div className="valid-feedback">Valid.</div> 
                                <div className="invalid-feedback">Please fill out this field.</div> 
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
                <Person firstName={this.state.firstName} lastName={this.state.lastName} />
            </div>
        );
    }
}

export default PersonForm;
