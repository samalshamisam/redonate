import React from 'react'
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import Studio from '../Studio';
import Econ from '../Econ';
import Footer from '../Footer';
import './ourstudio.css';
import stay from '../../image/photo-273.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter,faSpotify, faItunesNote } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Ourstudio = () => {
  return (
    <>
    <section className='our-studio'>
        <Navbar />
        <Banner title="Our Studio " smtitle="Our-Studio" />
    </section>
    <section>
        <Studio />
        <Econ />
        <section className='stay'>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <div className='stay-text'>
              <h2><span>Stay Tuned</span> for the Latest Beats!</h2>
              <p> Subscribe now and never miss updates on new tracks, studio tips, and exclusive offers.</p>
            </div>
            <div className='stay-email'>
              <Form.Floating className="mb-3 s">
          <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          required/>
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <button className='r'> submit</button>
            </div>
            <div className='icon'>
              <h3>Follow Us:</h3>
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" />
                          </a>
                          <a
                          href="https://instagram.com/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faInstagram} size="2x" color="#E1306C" />
                          </a>
                          <a
                    href="https://x.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faXTwitter} size="2x" color="black" />
                  </a>
                  <a
                    href="https://open.spotify.com/user/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faSpotify} size="2x" color="#1DB954" />
                  </a>
                  <a
                    href="https://music.apple.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faItunesNote} size="2x" color="#FA57C1" />
                  </a>
            </div>
          </Col>
          <Col lg={6} md={12} className='right'>
            <img src={stay} />
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
    </section>
    </>
  )
}

export default Ourstudio