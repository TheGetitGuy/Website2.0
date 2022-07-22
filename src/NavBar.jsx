import React from 'react';
import './NavBar.css';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { MenuIcon } from '@mui/icons-material';
//import './Header.css';

const navLinks = [
  {
    urlForNav: 'url',
    textForNav: 'Home'
  },{
    urlForNav: 'url',
    textForNav: 'Development'
  },{
    urlForNav: 'url',
    textForNav: 'Socials'
  },
  ];



function NavBar() {
return (
    
    <div  id='coloredBarForNav'>
      <AppBar position='sticky'><Toolbar> <IconButton><MenuIcon/>wow</IconButton> </Toolbar></AppBar>
      <div className='flexBoxCentered holdingNavDivs'>
        {navLinks.map((currentNav) =>(
           (<div key={currentNav.textForNav} className='navButtonForBar'>{currentNav.textForNav}</div>)
        ))}
      </div>
    </div>
  );
};

export default NavBar;