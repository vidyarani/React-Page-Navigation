import {Component} from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

class ContactsList extends Component {
    constructor(){
        super();
        this.state = {
            contactsList:  [
                {"fname" : "Vidya", "mname" : "Rani", "lname": "Nethi", "age": 35, "id" : "1"},
                {"fname" : "Ravi", "mname" : "Kumar", "lname": "Pasumarthy", "age": 39, "id" : "2"}
            ]
        };
    } 

    render(){
        let listToDisplay = this.state.contactsList.map(contact => 
            <div key = {contact.id}>
            <Link to = {{
                pathname: `/details/${contact.id}`,
                state: {contact}
                }} 
                
                className="details" > {contact.id} </Link>

            {"  " + contact.fname + " " + contact.mname} </div>
        );
        return (
            <div>
                <h1>Listing Page  </h1>  
                
                <div className = "listing_page">
                    <div> Id  Full name</div>
                    {listToDisplay}
                </div>  
            </div>
        );
    }
}

export default ContactsList;
