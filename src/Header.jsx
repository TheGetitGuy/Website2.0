import React from 'react';
import HeaderSvgFront from './Images/HeaderFront.svg';
import HeaderSvgBg from './Images/HeaderBg.svg';
import './Header.css'
//this likely doesn't have to be seperate... But why not?

function Header() {
  return (
    <div className='hover flexBoxCentered headerBackground'>
      <div id='HeaderContainer'>
        <img id='HeaderBg' src={HeaderSvgBg}/>
        <img id='HeaderFront' src={HeaderSvgFront}/>
      </div>
    </div>
  );
};

export default Header;