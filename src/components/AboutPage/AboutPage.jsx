import React from 'react';
import photo from '../../Photos/fabulous_me.png';
import './AboutPage.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';


function AboutPage() {
  return (
    <div className="container">
      <div className='connect'>
      <img className='about' src={photo} />
      <h3>Connect</h3>
      <p>hwww.linkedin.com/in/maihleevang</p>
    </div>



      <div className='all'>
        <div className='challenges'>


          <h3>Challenges</h3>
          <ul>
            <li>POST: <br></br>what to send in payload and had to loop in router</li>
            <li>PUT: <br></br>Dynamic and changing inputs that were being mapped. <br>
            </br>Could not attack each individual ID. <br></br>Could not do onChange or send to reducer.</li>
            <li>Components: <br></br>Quite a bit and similar names to reference the main view.</li>
          </ul>
        </div>
        <div className='next'>
          <h3>Next Steps</h3>
          <ul>
            <li>Image uploads</li>
            <li>Favorites tab</li>
            <li>User setting</li>

          </ul>
        </div>
        <div className='used'>
          <h3>Technology Used</h3>
          <ul>
            <li>PostgreSQL, Express, React, Node.js</li>
            <li>Redux, Redux-Saga</li>
            <li>Vinalla CSS</li>
            <li>Material UI</li>
            <li>SweetAlerts</li>
            <li>Google Fonts</li>
          </ul>
        </div>
        <div className='thanks'>
          <h3> Shout outs: </h3>
          <ul>
            <li>Prime Digital Academy: Liz, Dane.</li>
            <li>Peers: laughs, support, and help</li>
            <li>Family</li>
          </ul>



        </div>
      </div>
    </div>
  );
}

export default AboutPage;
