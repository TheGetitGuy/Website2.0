import React from 'react';
import './NavBar.css'
//import './Header.css';



function NavBar() {

  const navLinks = [
  {
    urlForNav: 'url',
    textForNav: 'Home'
  },{
    urlForNav: 'url',
    textForNav: 'Development'
  },{
    urlForNav: 'url',
    textForNav: 'socials'
  },
  ];
  
  return (
    <div className='flexBoxCentered'>
      <div  id='coloredBarForNav'>
        {navLinks.map((currentNav) =>(
           (<div key={currentNav.textForNav} className='navButtonForBar'>{currentNav.textForNav}</div>)
        ))}


      </div>
    </div>
  );
};

export default NavBar;