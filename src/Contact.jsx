import React, { useState } from 'react';
import './Contact.css'
import loadingIcon from './Images/loading.svg'
import {Button} from '@mui/material'
import { TextField, Box, CircularProgress } from '@mui/material';
function Contact() {
    const [hideForm, sethideForm] = useState(false)
    const [showComplete, setShowComplete] = useState(false)
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
            sethideForm(true)
            const response = await fetch(url,fetchOptions);
            if (!response.ok){
                sethideForm(false)
                throw new Error(`couldnt send the form`)
            } else {
                
                setShowComplete(true)
            }
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
    <div className={(hideForm ? 'hideForm':'showForm')+` `+(showComplete ? 'showComplete':  ' ')}>
    <CircularProgress className={(showComplete ? 'hideLoadingImage':'')+' '+(hideForm ? 'showLoadingImage':'hideLoadingImage')}/>
    <div id="contactFormHolder">
        <h2>Contact Me</h2>
        <p>Email me for business inquiries or to just say hello.</p>
        <Box  id='contactForm' onSubmit={handleSubmit} component='form'>

                <TextField className='holdingContactInput'  label='Email' variant='outlined' required name='Input' type='email' value={inputEmailValue} onChange={handleEmailChange}/>

                <TextField className='holdingContactInput' variant='outlined' label='Subject' required name='Subject' type='text' value={inputSubjectValue} onChange={handleSubjectChange}/>
 
                <TextField className='holdingContactInput' multiline label='Body' variant='outlined' name='textArea' rows='4' maxLength='256' value={inputBodyValue} onChange={handleBodyChange}/>

            <Button variant="contained"  className='contactButton pointer' type='submit'>Submit</Button>
        </Box>
    </div>
    </div>
  );
};

export default Contact;