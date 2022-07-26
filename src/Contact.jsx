import React, { useState } from 'react';
import './Contact.css'

function Contact() {
    const [inputEmailValue, setInputEmailValue] = useState("")
    const [inputSubjectValue, setInputSubjectValue] = useState("")
    const [inputBodyValue, setInputBodyValue] = useState("")
    
    const handleSubmit = (event)=>{
        event.preventDefault()
    }

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
                <input required type='email' value={inputEmailValue} onChange={handleEmailChange}/>
            </div>
            <div className='holdingContactInput'>
                <label>Subject:</label>
                <input required type='text' value={inputSubjectValue} onChange={handleSubjectChange}/>
            </div>
            <div className='holdingContactInput'>
                <label>Body:</label>
                <textarea rows='4' maxLength='256' value={inputBodyValue} onChange={handleBodyChange}/>
            </div>
            <button className='contactButton pointer' type='submit'>Submit</button>
        </form>
    </div>
  );
};

export default Contact;