import React from 'react';
import './NavBar.css';


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
      <div className='flexBoxCentered holdingNavDivs'>
        {navLinks.map((currentNav) =>(
           (<div key={currentNav.textForNav} className='navButtonForBar'>{currentNav.textForNav}</div>)
        ))}
      </div>
    </div>
  );
};

export default NavBar;