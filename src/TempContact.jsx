//Server 2.0 is down, I'm busy re-tooling too many things, so I'm just going to  link contact info.

import { Email } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Paper, InputLabel, Button, FormControl, Stack, TextField, Grid, Container, Input, Link, Typography } from '@mui/material';
import { useState } from 'react';
const TempContact = ({ cardStyling }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState();
    const [body, setBody] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true);
        setMessage();
        fetch("https://formsubmit.co/ajax/d0f705a964bdf784f1d46d9104486d4c", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({name, email, body})
        })
            .then((response) => {
                setMessage("good");
            })
            .catch(() => {
                setMessage("bad");
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <Paper id="contactFormHolder" variant='outlined' sx={cardStyling} elevation={6}>
            <h2>Contact Me</h2>
            <p>Email me for business inquiries or to just say hello.</p>
            <form onSubmit={handleFormSubmit} action="https://formsubmit.co/d0f705a964bdf784f1d46d9104486d4c" method="POST">
                <Stack spacing={2}>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <FormControl>
                            <TextField value={name} onChange={(e) => { setName(e.target.value); console.log(e) }} label="Name" color="secondary" type="text" id="name" name="name" required />
                        </FormControl>
                        <FormControl>
                            <TextField value={email} onChange={(e) => { setEmail(e.target.value); console.log(e) }} label="Email" color="secondary" type="email" id="email" name="email" required />
                        </FormControl>
                    </Box>
                    <FormControl >
                        <TextField value={body} onChange={(e) => { setBody(e.target.value); console.log(e) }} color="secondary" label="Body" multiline id="body" name="body" style={{ width: "100%" }} required />
                    </FormControl>
                    <Box>
                        {message === "good"? <Typography color={'green'}>Message sent Successfully.</Typography>:<></>}
                        {message === "bad"? <Typography color={'red'}>Error Sending message.</Typography>:<></>}
                        <FormControl sx={{ display: "flex", alignItems: "end" }}>
                            <LoadingButton loading={isLoading} sx={{ width: "fit-content" }} variant="contained" color='secondary' type="submit">send</LoadingButton>
                        </FormControl>
                    </Box>
                </Stack>
            </form>
        </Paper>
    )
}
export default TempContact