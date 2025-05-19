import React from 'react';
import './css/econ.css';
import { Container, Row, Col, } from 'react-bootstrap';
import logo1 from '../image/logo-1-1.png';
import logo2 from '../image/logo-2-1.png';
import logo3 from '../image/logo-3-1.png';
import logo4 from '../image/logo-4-1.png';
const  Econ = ()=> {
  return (
    <>
    <section className='econ'>
        <Container>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <div className='e'>
                    <div className='e-con'>
                        <img src={logo1} alt="" />
                        <div className='text'>
                            <h4>Best Equipment</h4>
                            <p>High-quality tools to bring your music vision to life with precision</p>
                        </div>
                        <a href='#h'> Read More</a>
                    </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className='e'>
                    <div className='e-con'>
                        <img src={logo2} alt="" />
                        <div className='text'>
                            <h4>Sound Quality</h4>
                            <p>Delivering pristine audio that ensures your tracks sound the music</p>
                        </div>
                        <a href='#h'> Read More</a>
                    </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className='e'>
                    <div className='e-con ' >
                        <img src={logo3} className='img-e' alt="" />
                        <div className='text'>
                            <h4>Real Instruments</h4>
                            <p>Bring your music to life with authentic sounds and skilled musicians</p>
                        </div>
                        <a href='#h'> Read More</a>
                    </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className='e'>
                    <div className='e-con'>
                        <img src={logo4} alt="" />
                        <div className='text'>
                            <h4>Versatile Studios</h4>
                            <p>Choose studios tailored for diverse genres and production needs</p>
                        </div>
                        <a href='#h'> Read More</a>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  );
}

export default Econ;