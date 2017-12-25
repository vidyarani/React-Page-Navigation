import React from 'react';
import { Link } from 'react-router-dom';

const Details = (props) => {
    const contact = props.location.state.contact;
      return (
            <div>
                <h1>Contact Details Page for id </h1>
                <div>First Name: {contact.fname}</div>
                <div>Middle Name: {contact.mname}</div>
                <div>Age: {contact.age}</div>
                <div></div>
                <Link to="/"><button> Back </button></Link>
            </div>
       )
    }
  
export default Details;
