//Server 2.0 is down, I'm busy re-tooling too many things, so I'm just going to  link contact info.

import { Email } from '@mui/icons-material';
import { Box, Paper, Grid, Container, TextField, Link, Typography } from '@mui/material';
const TempContact = ({cardStyling}) => {
    return (
        <Paper id="contactFormHolder" variant='outlined' sx={cardStyling} elevation={6}>
            <h2>Contact Me</h2>
            <p>Email me for business inquiries or to just say hello.</p>
            <Box >
                <Link color={"secondary"} display={"flex"} href='mailto:josephriterdev@gmail.com' target="_top" >
                    <Typography >josephriterdev@gmail.com</Typography>
                    <Email></Email>
                </Link>
            </Box>
        </Paper>
    )
}
export default TempContact