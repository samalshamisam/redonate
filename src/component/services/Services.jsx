import React from 'react';
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import './services.css'
import { Container , Row , Col } from 'react-bootstrap';
import photo1 from '../../image/photo-28.jpg';
import photo2 from '../../image/blog-3.jpg';
import photo3 from '../../image/photo-31.jpg';
import photo4 from '../../image/photo-32.jpg';
import photo5 from '../../image/photo-29.jpg';
import { Icon } from '@iconify/react';
import arrowForward from '@iconify/icons-material-symbols/arrow-forward';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays , faUsers , faMicrophone  } from '@fortawesome/free-solid-svg-icons';
import Studio from  '../Studio';
import Our from  '../Our';
import Footer from  '../Footer';
const Services = () => {
  return (
    <>
    <section className='services-section'>
        <Navbar />
        <Banner  title="Services " smtitle=" Services"/>
    </section>
    <section className='services-sec'>
        <Container>
            <Row>
                <div className='services-text row'>
                    <h2 className='col-lg-12'>Explore The <span>Service</span>You Need</h2>
                    <div className='services-p'><p className='col-lg-12'>Discover a wide range of professional services designed to cater to your specific goals, delivering quality and excellence every step of the way.</p></div>
                </div>
                <Col lg={6} md={6} sx={12}>
                    <div className="services-relative">
                            <div className="services-img">
                            <img src={photo1} />
                        </div>
                        <div className='services-absolute'>
                            <h2>Sound Mixing</h2>
                            <span>
                            <a href="/Services"> 
                            <Icon icon={arrowForward} /> View Detalis </a></span>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sx={12}>
                    <div className="services-relative">
                            <div className="services-img">
                            <img src={photo2} />
                        </div>
                        <div className='services-absolute'>
                            <h2>Sound Mixing</h2>
                            <span>
                            <a href="/Services"> 
                            <Icon icon={arrowForward} /> View Detalis </a></span>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sx={12}>
                    <div className="services-relative">
                            <div className="services-img">
                            <img src={photo4} />
                        </div>
                        <div className='services-absolute'>
                            <h2>Track Mastering</h2>
                            <span>
                            <a href="/Services"> 
                            <Icon icon={arrowForward} /> View Detalis </a></span>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sx={12}>
                    <div className="services-relative">
                            <div className="services-img">
                            <img src={photo3} />
                        </div>
                        <div className='services-absolute'>
                            <h2>Audio Editing</h2>
                            <span>
                            <a href="/Services"> 
                            <Icon icon={arrowForward} /> View Detalis </a></span>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sx={12}>
                    <div className="services-relative">
                            <div className="services-img">
                            <img src={photo5} />
                        </div>
                        <div className='services-absolute'>
                            <h2>Audio Restoration</h2>
                            <span>
                            <a href="/Services"> 
                            <Icon icon={arrowForward} /> View Detalis </a></span>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sx={12}>
                    <div className="services-relative">
                            <div className="services-img">
                            <img src={photo4} />
                        </div>
                        <div className='services-absolute'>
                            <h2>Mobile Studio</h2>
                            <span>
                            <a href="/Services"> 
                            <Icon icon={arrowForward} /> View Detalis </a></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section className='services-work'>
        <Container>
            <Row>
                <div className='work-text row'>
                    <h2 className='col-lg-6 col-md-12'>How We <span>Work </span> ?</h2>
                    <p className='col-lg-6 col-md-12'>We follow a collaborative and transparent approach, ensuring that every step aligns with your goals, from concept to completion.</p>
                </div>
                <Col lg={4} md={4} sx={12}> 
                    <div className='work-services'>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <h2>Book The Studio</h2>
                        <p>Reserve your time and access top-tier equipment for your next project.</p>
                        <h3>01</h3>
                    </div>
                </Col>
                <Col lg={4} md={4} sx={12}> 
                    <div className='work-services'>
                        <h3>02</h3>
                        <FontAwesomeIcon icon={faUsers} />
                        <h2>Get Our Expertise</h2>
                        <p> Access expert guidance to help bring your project vision to life.</p>
                    </div>
                </Col>
                <Col lg={4} md={4} sx={12}> 
                    <div className='work-services'>
                        <FontAwesomeIcon icon={faMicrophone} />
                        <h2>Professional Service</h2>
                        <p>Choose studios tailored for diverse genres and production needs.</p>
                        <h3>03</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <Studio />
    <section className='yerrs'>
        <Container>
            <Row>
                <div className='about-years row'>
                            <Col lg={3} md={6} sx={12}>
                            <div className='counter-container'>
                              <div className='counter'>
                                <span className='count'>50</span>
                                <span className='counter-suffix'>+</span>
                              </div>
                              <span className='counter-title'>Artist Collaborations</span>
                            </div>
                            </Col>
                            <Col lg={3} md={6} sx={12}>
                            <div className='counter-container'>
                              <div className='counter'>
                                <span className='count'>20</span>
                                <span className='counter-suffix'>+</span>
                              </div>
                              <span className='counter-title'>Years of Expertise</span>
                            </div>
                            </Col>
                            <Col lg={3} md={6} sx={12}>
                            <div className='counter-container'>
                              <div className='counter'>
                                <span className='count'>2</span>
                                <span className='counter-suffix'>k</span>
                              </div>
                              <span className='counter-title'>Tracks Produced</span>
                            </div>
                            </Col>
                            <Col lg={3} md={6} sx={12}>
                            <div className='counter-container'>
                              <div className='counter'>
                                <span className='count'>15</span>
                              </div>
                              <span className='counter-title'>Studio Branc</span>
                            </div>
                            </Col>
                          </div>
            </Row>
        </Container>
    </section>
    <Our />
    <Footer />
    </>
  )
}

export default Services;