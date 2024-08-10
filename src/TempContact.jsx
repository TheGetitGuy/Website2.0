//Server 2.0 is down, I'm busy re-tooling too many things, so I'm just going to  link contact info.

import { Email } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Paper,InputLabel,Button,FormControl,Stack, TextField, Grid, Container, Input, Link, Typography } from '@mui/material';
import { useState } from 'react';
const TempContact = ({cardStyling}) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Paper id="contactFormHolder" variant='outlined' sx={cardStyling} elevation={6}>
            <h2>Contact Me</h2>
            <p>Email me for business inquiries or to just say hello.</p>
                <form action="https://formsubmit.co/thegetitguy+contact@gmail.com" method="POST">
            <Stack spacing={2}>
                <Box display={"flex"} justifyContent={"space-between"}>
                <FormControl>
                <TextField label="Name" color="secondary" type="text" id="name" name="name" required/>
                </FormControl>
                <FormControl>
                <TextField label="Email" color="secondary" type="email" id="email" name="email" required/>
                </FormControl>
                </Box>
                <FormControl >
                <TextField color="secondary" label="Body" multiline id="body" name="body" style={{width:"100%"}} required/>
                </FormControl>
                
                <Box>
                <FormControl sx={{display:"flex", alignItems:"end"}}>
                <LoadingButton loading={isLoading} onClick={()=>{setIsLoading(true)}} sx={{width:"fit-content"}} variant="contained" color='secondary' type="submit">send</LoadingButton>
                </FormControl>
                </Box>
            </Stack>
                </form>
        </Paper>
    )
}
export default TempContact