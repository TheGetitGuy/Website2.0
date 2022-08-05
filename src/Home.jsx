import React, {useState} from 'react';
import './Home.css';
import Header from './Header';
import NavBar from './NavBar';
import Card from './Card';//props.img, title, content
import Contact from './Contact'//Contact Form
import ProjectContent from './ProjectContent'//cards of my projects
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect } from 'react';
import backgroundImg from './Images/pexels-did.jpg'
import { Box, Paper,Grid,Container} from '@mui/material';  
import { createTheme,ThemeProvider} from "@mui/material/styles";
import { lime, red} from "@mui/material/colors";

const cardStyling = {padding:"0.25in", margin:"0.25in", maxWidth:"5in"}
const theme = createTheme({
  
    palette: {
      primary:{
        main: lime[100]
      } ,
      secondary:{
        main: red[200]
      }
    }
  
})

function Home() {


  const [GetitProfile, setGetitProfile] = useState({})

  useEffect(()=>{
  fetch('https://api.github.com/users/TheGetitGuy')
    .then((response)=> response.json())
    .then((json)=>{
      setGetitProfile(json)
      console.log(GetitProfile)
    })},[])

  return (
   <ThemeProvider theme={theme}>
    <main id='home'> 
      <NavBar/>
      <Header/>
    <Grid container sx={{overflowX:'hidden'}} > 
      <Box className='gridContainer' sx={{display:'flex', justifyContent:'space-evenly',flexWrap:'wrap'}} >
      
      <Grid item   >
        <Container className="getitCard" maxWidth='sm'  >
          <Card  id='getitCard' img={GetitProfile.avatar_url} title={`Joseph Riter | Web Developer`} content={GetitProfile.bio}/> 
        </Container>
      </Grid>
      <Grid item >
        <Container maxWidth='sm'>
          <Paper variant='outlined'  sx={cardStyling}  elevation={6}>
          <h1>Building Websites and App<wbr/>lications</h1>
          <h2>React ◦ Django ◦ JavaScript ◦ FrontEnd</h2>
          <p>Professional developer who can adapt to anything because of his hardworking nature.</p>
          </Paper>
          
          <Paper variant='outlined' sx={cardStyling} elevation={6}>
            <Contact/>
          </Paper>
        </Container>
        </Grid> 
      <Grid item sm={8}>
      </Grid>
      </Box>
      <Box>
      <ProjectContent/>
      </Box>
      <footer> A website built in React.js by Joseph Riter.<br/>
      Server made with Node.js and Express.
      </footer> 
      </Grid>
    </main>
    </ThemeProvider>
  );
}

export default Home;