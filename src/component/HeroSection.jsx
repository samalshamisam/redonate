// components/HeroSection.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import './css/HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import img4 from '../image/img4.jpg';
const HeroSection = () => {
  return (
    <div  className="hero-section d-flex align-items-center">
      <div className="bg-over"></div>
      <Container className="text-start text-white">
        <h1 className="display-4 fw-bold">  Elevate <span className='brush1'> Your Sound</span>  Create
        <span className='brush2'> Your Masterpiece</span>
        </h1>
        <p className="lead">    With top-tier acoustics and cutting-edge equipment, our studio is the ultimate place to bring your music to life. </p>
        <div className="bt d.flex">
          <button className='btn btn-accent'>  Get Started</button>
          <button className='btn btn-accent-outline' href='/concat'> <FontAwesomeIcon icon={faMusic} /> Explore Studios</button>
        </div>
        <div className='song'>
          <p>The Last Song Recorded Here ...</p>
          <div className='sound'>
            <img src={img4} />
            <div className='text'>
              <h2>Silent Whispers</h2>
              <h4>Album by Nocturnal</h4>
            </div>
            <div className="soundcloud-player">
              <iframe
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/tammanmusic/sets/kamman-tt&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
