import React, { useState } from 'react';
import './Footer.css';
import { useForm } from "react-hook-form";
import {db} from './firebase.config';
const Footer = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [comment, SetComment] = useState("");


    // Add data to the store
    const onSubmit = () =>{
        console.log('dhfvb');
    db.collection("contact").add({
        Name: name,
        Email: email,
        Comment: comment,
    })
        .then((docRef) => {
            alert("Data Successfully Submitted");
            console.log(name,"jskdf");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    return (
        <div>
            <h1 className="text-center">Feel Free To Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" type="text" className="feedback-input" placeholder="Name" onBlur={(e) => { SetName(e.target.value) }} />
                <input name="email" type="text" className="feedback-input" placeholder="Email" onBlur={(e) => { SetEmail(e.target.value) }} />
                <textarea name="comment" className="feedback-input" placeholder="Comment" onBlur={(e) => { SetComment(e.target.value) }}></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default Footer;