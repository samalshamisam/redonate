import { useState } from 'react';
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import './bookapp.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../Footer';
const Bookapp = () => {
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
    <section className='book-appoinment'>
        <Navbar />
        <Banner title="Book Appoinment " smtitle="Book-Appoinment" />
    </section>
    <section className='partner'>
        <Container>
            <Row>
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
    <Footer />
    </>
  )
}

export default Bookapp;