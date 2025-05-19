import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/testimonials.css';
import logo8 from '../image/photo-8.jpg';
const Testimonials = ()=> {
  return (
    <>
    <section className='testimonials'>
      <Container>
        <Row className="align-items-center">
          <Col md={6}> 
            <h1>A Studio for<span className='brush'>Musicians</span>to Unite and Elevate Music</h1>
            <p>We provide a dedicated environment to bring your musical ideas to life. With our state-of-the-art studios and expert team.</p>
            <div className='icon-p'>
              <p> <FontAwesomeIcon icon={faHeadphonesAlt}  /> 
              We provide expert music production and track mastering services</p>
              <p><FontAwesomeIcon icon={faHeadphonesAlt}  /> 
              We offer personalized music production and mixing sessions</p>
            </div>
            <div className='app'>
            <div className='counter-container'>
              <div className='counter'>
                <span className='count'>20</span>
                <span className='counter-suffix'>+</span>
              </div>
              <span className='counter-title'>Years of Expertise</span>
            </div>
            <div className='counter-container'>
              <div className='counter'>
                <span className='count'>2</span>
                <span className='counter-suffix'>+</span>
              </div>
              <span className='counter-title'>Tracks Produced</span>
            </div>
            <div className='counter-container'>
              <div className='counter'>
                <span className='count'>50</span>
                <span className='counter-suffix'>+</span>
              </div>
              <span className='counter-title'>Artist Collaborations</span>
            </div>
            </div>
          </Col>
          <Col md={6} >
            <div class="masked-image" data-id="cbb6d2d" >
              <img src={logo8} />
            </div>
            </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Testimonials;