import React, { useState } from 'react';
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
    const [isOpened, setIsOpened] = useState(' isOpened')
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
    <div  id='coloredBarForNav' className={isOpened}>
      <button className='navMenuButton pointer' onClick={()=>{clickHandler()}}>==</button>
      <div className={'flexBoxCentered holdingNavDivs'+isOpened}>
        {navLinks.map((currentNav) =>(
           (<div key={currentNav.textForNav} className='pointer navButtonForBar'>{currentNav.textForNav}</div>)
        ))}
      </div>
    </div>
  );
};

export default NavBar;