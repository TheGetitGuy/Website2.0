import React, { useState, useEffect } from 'react';
import './NavBar.css'; 
import menuButton from "./Images/MenuButton.png"
import gitButton from "./Images/github.svg"


const navLinks = [
  {
    urlForNav: '#home',
    textForNav: 'Home'
  },{
    urlForNav: 'https://github.com/TheGetitGuy',
    textForNav: <><img src={gitButton} style={{transform: 'translate(-5px,7px)'}} height='30em' innertext='Github'/><span>GitHub</span></>
  }
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
      {/*<button className={'navMenuButton pointer'+isOpened} onClick={()=>{clickHandler()}}><img src={menuButton}/></button> */}
      <div className={'flexBoxCentered holdingNavDivs'+isOpened}>
        {navLinks.map((currentNav) =>(
           (<a key={currentNav.textForNav} href={currentNav.urlForNav} className='pointer navButtonForBar'><div >{currentNav.textForNav}</div></a>)
        ))}
      </div>
    </div>
  );
};

export default NavBar;