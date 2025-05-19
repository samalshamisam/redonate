import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './css/partner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Form from 'react-bootstrap/Form';
import photo1 from '../image/artist-1.jpg';
import photo2 from '../image/artist-2.jpg';
import photo3 from '../image/artist-3.jpg';
import photo4 from '../image/artist-4.jpg';
const Partner = ()=> {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
    }
  return (
    <>
    <section className='partner'>
        <Container>
            <Row>
                <Col lg={12}>
                <div className='text'>
                    <Row>
                        <Col lg={7} md={12}>
                        <h1>Aetists'Reliable <span>Partner</span></h1>
                        </Col>
                        <Col lg={5} md={12}>
                        <p>Your trusted ally in music production, offering expert services to bring your vision to life.</p>
                        </Col>
                    </Row>
                </div>
                </Col>
                <Col lg={12}>
                    <div className='partner-img'>
                        <Row>
                            <Col lg={3} md={6} sm={12}>
                            <div className='p-real'>
<Card>
    <div className='overlay'></div>
    <img src={photo1} />
    <div className='partner-artist'>
        <h2>Lunar Echo</h2>
        <p>Artist</p>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
</div>
</Card>
</div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                
<div className='p-real'>
<Card>
    <div className='overlay'></div>
    <img src={photo2} />
    <div className='partner-artist'>
        <h2>Funk Shifter</h2>
        <p>Artist</p>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
</div>
</Card>
</div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                
<div className='p-real'>
<Card>
    <div className='overlay'></div>
    <img src={photo3} />
    <div className='partner-artist'>
        <h2>Silver Horizon</h2>
        <p>Artist</p>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
</div>
</Card>
</div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                
<div className='p-real'>
<Card>
    <div className='overlay'></div>
    <img src={photo4} />
    <div className='partner-artist'>
        <h2>Indigo Skies</h2>
        <p>Artist</p>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
</div>
</Card>
</div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className='partner-form'>
                    <Container>
                        <Row>
                            <Col lg={6} md={12}>
                                <div className='session'>
                                    <h2>Secure Your Studio <span >Session</span>Today</h2>
                                    <div className='session-text'>
                                        <div className='address'>
                                            <p>Address :</p>
                                            <h2>KLLG St, No.99, Pku City, ID 28289</h2>
                                        </div>
                                        <div className='address'>
                                            <p>Email :</p>
                                            <h2 className='active'> hello@domainsite.com</h2>
                                        </div>
                                        <div className='address'>
                                            <p>Phone :</p>
                                            <h2>+1 (212) 555-1212</h2>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row>
                            <Col lg={6} md={12}>
                                <Form.Group className="mb-3 " >
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="input Name Here" required />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12}>
                                <Form.Group className="mb-3 " >
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="your Phone Here"  required/>
                                </Form.Group>
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={6} md={12}>
                                <Form.Group className="mb-3" >
                                <Form.Label>Reservation Date </Form.Label>
                                <Form.Control type="date" placeholder="your Phone Here" required />
                                </Form.Group>
                                </Col>
                            <Col lg={6} md={12}>
                                <Form.Label>Duration of Session </Form.Label>
                                <Form.Select aria-label="Default select example"  required readonly>
                                
                                <option value="1">1 Hours</option>
                                <option value="2">2 Hours</option>
                                <option value="3">3 Hours</option>
                                <option value="3">4 Hours</option>
                                <option value="3">Etc</option>
                                </Form.Select>
                            </Col>
                            </Row>
                                <Form.Label>Studio Selection</Form.Label>
                                <Form.Select aria-label="Default select example"  required readonly>
                                <option value="1">Studio 1 - Recording</option>
                                <option value="2">Studio 2 - Mixing</option>
                                <option value="3">Studio 3 - Mastering</option>
                                <option value="3">Studio 4 - Music</option>
                                <option value="3">Studio 5 - Production</option>
                                </Form.Select>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="your Message" />
                                </Form.Group>
                                <Button type="submit">Submit </Button>
                            </Form>
                                
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  );
}

export default Partner;
