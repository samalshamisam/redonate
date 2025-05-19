import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt , faPhone ,  faVoicemail } from '@fortawesome/free-solid-svg-icons';
import './banner.css';
function Banner(props) {
  return (
    <section className='banner'>
        <Container>
            <Row>
                <div className='s'>
                <div className='banner-ba row'>
                    <div className='h col-lg-6 col-md-12'>
                        <h1>{props.title}</h1>
                        <p><a href='/Home'> Home </a>  -   {props.smtitle}</p>
                    </div>
                    <div className='text col-lg-6 col-md-12 '>
                        <div>
                        <span><FontAwesomeIcon icon={faMapMarkerAlt}  /> KLLG St, No.99, Pku City, ID 28289 </span>
                        <span>  <br /><FontAwesomeIcon icon={faVoicemail}  /> hello@domainsite.com</span>
                        </div>
                        <div className='phone'>
                            <span><FontAwesomeIcon icon={faPhone}  /> 0761-8523-398</span>
                        </div>
                    </div>
                </div>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Banner;