import React, { useState, useEffect } from 'react';
//import './NavBar.css'; 
import menuButton from "./Images/MenuButton.png"
import gitButton from "./Images/github.svg"
import { AppBar,IconButton,Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { GitHub, Home } from '@mui/icons-material';
import {useTheme} from "@mui/material/styles"

const navLinks = [
  {
    urlForNav: '#home',
    textForNav: <Home/>
  },{
    urlForNav: 'https://github.com/TheGetitGuy',
    textForNav: <GitHub/>
  }
]; 
function NavBar() {
  const theme = useTheme();
  const [isOpened, setIsOpened] = useState('') 
  const [isPassed, setisPassed] = useState(false)
  function clickHandler()
  {
    if (isOpened == ''){
      setIsOpened(' isOpened')
    }
    else{
      setIsOpened('')
    }
  }
  
  return (
    <AppBar  id='coloredBarForNav' className={isOpened}>
      {/*<button className={'navMenuButton pointer'+isOpened} onClick={()=>{clickHandler()}}><img src={menuButton}/></button> */}
      <Stack spacing='1em' direction='row' className={'flexBoxCentered holdingNavDivs'+isOpened}>
        {navLinks.map((currentNav) =>(
           (<IconButton color='secondary' edge='start' key={currentNav.urlForNav} href={currentNav.urlForNav} className='pointer navButtonForBar'><div >{currentNav.textForNav}</div></IconButton>)
        ))}
      </Stack>
    </AppBar>
  );
};

export default NavBar;