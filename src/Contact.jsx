import React, { useState } from 'react';
import './Contact.css'

function Contact() {
    const [inputEmailValue, setInputEmailValue] = useState("")
    const [inputSubjectValue, setInputSubjectValue] = useState("")
    const [inputBodyValue, setInputBodyValue] = useState("")
    
    const handleSubmit = (event)=>{
        //handle the form submit and send it off to Server2.0
        event.preventDefault()
        const formData = new URLSearchParams();//let build the formData URLSearchParams worked best
        
        formData.append('Email',inputEmailValue);
        formData.append('Subject',inputSubjectValue);
        formData.append('Body',inputBodyValue);
        const url = 'http://localhost:5000/email/mailer'
        const fetchOptions = {
            method: 'POST',
            body:formData,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }}
        async function postForm(){
            const response = await fetch(url,fetchOptions);
            response.ok;
            response.status;
            console.log(response)
        }
        postForm()
    }
    //below handles the text fields updating.
    const handleEmailChange = (event)=>{
        setInputEmailValue(event.target.value)
    }
    const handleSubjectChange = (event)=>{
        setInputSubjectValue(event.target.value)
    }
    const handleBodyChange = (event)=>{
        setInputBodyValue(event.target.value)
    }

    return (
    <div id="contactFormHolder">
        <h2>Contact Me</h2>
        <p>Email me for business inquiries or to just say hello.</p>
        <form id='contactForm' onSubmit={handleSubmit}>
            <div className='holdingContactInput'>
                <label>Email:</label>
                <input required name='Input' type='email' value={inputEmailValue} onChange={handleEmailChange}/>
            </div>
            <div className='holdingContactInput'>
                <label>Subject:</label>
                <input required name='Subject' type='text' value={inputSubjectValue} onChange={handleSubjectChange}/>
            </div>
            <div className='holdingContactInput'>
                <label>Body:</label>
                <textarea name='textArea' rows='4' maxLength='256' value={inputBodyValue} onChange={handleBodyChange}/>
            </div>
            <button className='contactButton pointer' type='submit'>Submit</button>
        </form>
    </div>
  );
};

export default Contact;