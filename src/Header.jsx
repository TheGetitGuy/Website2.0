import React from 'react';
import HeaderSvgFront from './Images/HeaderFront.svg';
import HeaderSvgBg from './Images/HeaderBg.svg';
import './Header.css'
//import './Header.css';

function Header() {
  return (
    <div className='flexBoxCentered'>
      <div id='headerContainer'>
        <img id='HeaderBg' src={HeaderSvgBg}/>
        <img id='HeaderFront' src={HeaderSvgFront}/>
      </div>
    </div>
  );
};

export default Header;