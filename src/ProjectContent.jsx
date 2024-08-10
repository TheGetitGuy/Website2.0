import React, {useRef, useEffect, useState } from 'react';
import Card from './Card';//props.img, title, content 
import './ProjectContent.css'
import pixelGenerator from './Images/projects/objectPixelgenerator.png'
import pyligen from './Images/projects/pyligen.png'
import reactCards from './Images/projects/reactCards.png'
import retro from './Images/projects/retro-mmov3.png'
import rotten from './Images/projects/rottentacoscreencap.png'
import saveher from './Images/projects/saveher.png'
import postBoard from './Images/projects/postBoardScreenShot.png'
import weatherApp from './Images/projects/weatherApp.png'


const cardsToMake = [//The urls are used as ids so keep them different
  {
    // url1: 'https://www.pyligen.com/',
    url2: 'https://github.com/TheGetitGuy/2darraygenerator',
    picture: pyligen, //Needs Recropped
    cardTitle: 'Python List Generator',
    size: '2in',
    cardContent:'A tool for generating 2d lists for use in python. I made this for building my own games.',
  },{
    url1: 'https://weather-app-umber-eta.vercel.app/',
    url2: 'https://github.com/TheGetitGuy/weather-app',
    picture: weatherApp,
    cardTitle: 'React Weather App',
    size: '2in',
    cardContent:'Communicates with an api, through my server, to display the weather forcast of any city.',
  },{
    url1: 'https://codepen.io/thegetitguy/pen/QWOXypd/result',
    picture: pixelGenerator,
    cardTitle: 'Object Oriented Canvas Project',
    size: '2in',
    cardContent:'This is a project made to learn canvas and get more experience with the javascript class system.',
  },{
    // url1: 'https://post.thegetitguy.com',
    url2: 'https://github.com/TheGetitGuy/postBoard',
    picture: postBoard,
    cardTitle: 'Post Board',
    size: '2in',
    cardContent:'A micro blogging platform built with Bcrypt, Express, and PUG templating',
  },{
    url1: 'https://codepen.io/thegetitguy/pen/ExbrgzN/result',
    picture: reactCards,
    cardTitle: 'React Generated Cards',
    size: '2in',
    cardContent:'Cards created in react by pulling from a random api generator.',
  },{
 /**    urlForNav: '#home4',    Evan said no :<
    picture: retro,
    cardTitle: 'Retro-MMO Fan Site',
    cardContent:'The latest version of my fansite for the Retro-MMO community.',
  },{  */
    url1: 'https://codepen.io/thegetitguy/full/JjOaORK/result',
    picture: rotten,
    cardTitle: 'Mock E-Commerce Site',
    size: '200',
    cardContent:'Practicing HTML and CSS by building a responsive Mock E-Commerce Site ',
  },{
    url1: 'https://thegetitguy.itch.io/save-her-ugj-33',
    picture: saveher,
    cardTitle: 'Save Her',
    size: '200',
    cardContent:'Game Jam game made in G-Develop in under a week.',
  }
]; 
function ProjectContent() { 
    const refforCardBox = useRef();
    const [cardBoxIsVisible, setCardBoxIsVisible] = useState()
    useEffect(()=>{ //using this to Change the class of the cards element when scrolled to
        const observer = new IntersectionObserver((entries)=>{
         const entry = entries[0];
         setCardBoxIsVisible(entry.isIntersecting)
         console.log(cardBoxIsVisible)
        })
        observer.observe(refforCardBox.current)
    },[])
  return (
    <div ref={refforCardBox} className={`contentCardsBox ${cardBoxIsVisible ? 'isVisible' : ''}`}>
        {cardsToMake.map((currentCard) =>(
           (<Card  size={currentCard.size} className='contentCards' key={currentCard.url1} url1={currentCard.url1} url2={currentCard.url2} img={currentCard.picture} title={currentCard.cardTitle} content={currentCard.cardContent}/>)
        ))}
    </div>
  );
};

export default ProjectContent;
