import React from 'react';
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import './studiodetails.css';
import { Container , Row , Col , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck ,faUserFriends , faRulerCombined , faMapMarkerAlt , faPhone ,  faVoicemail} from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import photo1 from '../../image/photo-50.jpg';
import photo2 from '../../image/photo-35-4545.jpg';
import photo3 from '../../image/photo-34.jpg';
import photo4 from '../../image/photo-38.jpg';
import photo5 from '../../image/photo-37-1.jpg';
import Footer from  '../Footer';
const  Studiodetails = () => {
  return (
    <>
    <section className='studio-details'>
        <Navbar />
        <Banner title="Studio Recording " smtitle="Studio-Recording" />
    </section>
    <section className='details-studio'>
        <Container>
            <Row>
                <Col lg={8} md={12}>
                    <div className='details-right'>
                        <img src={photo1} />
                        <div className='studio1 row'>
                            <div className='left col-lg-6 col-sx-12'>
                                <h1>Studio 1 - Recording</h1>
                                <div>
                                    <p><FontAwesomeIcon icon={faRulerCombined} /> <span> 350 sqft </span></p>
                                    <p><FontAwesomeIcon icon={faUserFriends} /> <span> 9 people</span></p>
                                </div>
                            </div>
                            <div className='right col-lg-6  col-sx-12'>
                                <span>price</span>
                                <div className='price'>
                                    <span className='price-hour'>59.99$ </span>
                                    <span className='hour'>/hour</span>
                                </div>
                            </div>
                        </div>
                        <div className='studio1-text'>
                            <p>Our Recording Studio is designed for artists who seek top-tier sound quality. With state-of-the-art equipment and acoustically treated spaces, Studio 1 ensures every recording, from vocals to instruments, captures the finest details with clarity and precision. Whether you’re working solo or with a full band, our studio provides the perfect environment for creativity and exceptional performances.</p>
                            <p>The space is designed for maximum comfort and functionality, featuring high-end microphones, monitors, and audio interfaces to bring your vision to life. Our experienced sound engineers are on hand to guide you through the process, ensuring your recordings sound as good as they feel. Whether you’re tracking, mixing, or mastering, Studio 1 has everything you need to create your best work.</p>
                        </div>
                        <div className='equipment'>
                            <h1>Studio Equipment</h1>
                            <div className='studio-eq'>
                                <span><FontAwesomeIcon icon={faCheck} /> <p>Microphones</p></span>
                                <p>: Model C900 (1 unit, for vocal and instrument recording)</p>
                            </div>
                            <div className='studio-eq'>
                                <span><FontAwesomeIcon icon={faCheck} /> <p>Audio Interface</p></span>
                                <p>: Twin Pro X (1 unit, 2 input channels)</p>
                            </div>
                            <div className='studio-eq'>
                                <span><FontAwesomeIcon icon={faCheck} /> <p>Monitors</p></span>
                                <p>: StudioMax 8 (2 units, stereo output)</p>
                            </div>
                            <div className='studio-eq'>
                                <span><FontAwesomeIcon icon={faCheck} /> <p> Mixing Console</p></span>
                                <p>: CompactMix 8 (1 unit, 8 channels with EQ and routing)</p>
                            </div>
                            <div className='studio-eq'>
                                <span><FontAwesomeIcon icon={faCheck} /> <p> DAW</p></span>
                                <p>: Pro Studio X (1 unit, multi-track recording software)</p>
                            </div>
                            <div className='studio-eq'>
                                <span><FontAwesomeIcon icon={faCheck} /> <p> 
Headphones</p></span>
                                <p>
: SoundMax 700 (2 pieces, stereo)</p>
                            </div>
                            <div className='studio-eq'>
                                <span><FontAwesomeIcon icon={faCheck} /> <p>Drum Kit </p></span>
                                <p>: DrumMaster 550 (1 set, essential for live drum recordings)</p>
                            </div>
                        </div>
                        <div className='studio-details-img '>
                                <div className='left'>
                                    <div >
                                        <img src={photo2} className='' />
                                    </div>
                                </div>
                                <div className='right'>
                                    <div >
                                        <img src={photo3} className=''/>
                                    </div>
                                    <div className='bottom '>
                                        <img src={photo4} />
                                        <img src={photo5} />
                                    </div>
                                </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={12}>
            <div className='service-from'>
                <Form>
                  <h3>Subscribe</h3>
                <Form.Group className="mb-3  " >
                  <Form.Label>Full Name*</Form.Label>
                  <Form.Control type="text" placeholder=" Name Here" required />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                  <Form.Label>Email*</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" required />
                </Form.Group>
                  <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message*</Form.Label>
                  <Form.Control as="textarea" rows={3} required />
                </Form.Group>
                <Button type="submit">Send Message </Button>
              </Form>
            </div>
            <div className='service-question'>
              <h3>Have Any Question?</h3>
              <p>Ask us anything, and we’ll respond with the details you need.</p>
              <div>
                  <h5><FontAwesomeIcon icon={faMapMarkerAlt}  /> <span>KLLG St, No.99, Pku City, ID 28289</span> </h5>
                  <h5>  <br /><FontAwesomeIcon icon={faVoicemail}  /><span> hello@domainsite.com</span></h5>
                  </div>
                <div className='phone'>
                <h5><FontAwesomeIcon icon={faPhone}  /> <span>0761-8523-398</span></h5>
                </div>
            </div>
                </Col>
            </Row>
        </Container>
    </section>
    <Footer />
    </>
  )
}

export default Studiodetails;