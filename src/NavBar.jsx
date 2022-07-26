import React, { useState, useEffect } from 'react';
import './NavBar.css'; 
import menuButton from "./Images/MenuButton.png"


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
    <div  id='coloredBarForNav' className={isOpened}>
      <button className={'navMenuButton pointer'+isOpened} onClick={()=>{clickHandler()}}><img src={menuButton}/></button>
      <div className={'flexBoxCentered holdingNavDivs'+isOpened}>
        {navLinks.map((currentNav) =>(
           (<div key={currentNav.textForNav} className='pointer navButtonForBar'>{currentNav.textForNav}</div>)
        ))}
      </div>
    </div>
  );
};

export default NavBar;