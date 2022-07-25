import React, {useState} from 'react';
import './Home.css';
import Header from './Header';
import NavBar from './NavBar';
import Card from './Card';//props.img, title, content
import Contact from './Contact'//Contact Form
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect } from 'react';
import backgroundImg from './Images/pexels-did.jpg'

function Home() {

  const [GetitProfile, setGetitProfile] = useState({})

  useEffect(()=>{
  fetch('https://api.github.com/users/TheGetitGuy')
    .then((response)=> response.json())
    .then((json)=>{
      setGetitProfile(json)
      console.log(GetitProfile)
    })},[])

  return (
    <main>
      <Header/>
      <NavBar/>
      <div className='gridContainer'>
        <div id='leftBlock'>
          <Card img={GetitProfile.avatar_url} title={`Joseph Riter | Web Developer`} content={GetitProfile.bio}/> 
        </div>
        <div id='rightBlock'>
          <div>
          <h1>Building Websites and App<wbr/>lications</h1>
          <h2>React ◦ Django ◦ JavaScript ◦ FrontEnd</h2>
          <p>Professional developer who can adapt to anything because of his hardworking nature.</p>
          </div>

          <div>
            <Contact/>
          </div>
          
        </div>
      </div>
      <footer> A website built in React.js by Joseph Riter</footer>
    </main>
  );
}

export default Home;