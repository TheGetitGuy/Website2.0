import React, { useState } from 'react';
import './Contact.css'

function Card() {
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
    <div>
        <h2>Contact Me</h2>
        <p>Email me for business inquiries or to just say hello.</p>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type='email' value={inputEmailValue} onChange={handleEmailChange}/>
            <label>Subject:</label>
            <input type='text' value={inputSubjectValue} onChange={handleSubjectChange}/>
            <label>Body:</label>
            <textarea rows='4' maxLength='256' value={inputBodyValue} onChange={handleBodyChange}/>
        </form>
    </div>
  );
};

export default Card;