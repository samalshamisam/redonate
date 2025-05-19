import React from 'react';
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import './servicedetails.css';
// import Button from 'react-bootstrap/Button';
import { Container , Row , Col , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck , faCircleChevronRight , faMapMarkerAlt , faPhone ,  faVoicemail} from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer';

const Servicedetails = () => {
  return (
    <>
    <section className='servicedetails'>
        <Navbar />
        <Banner  title="Voice Recording " smtitle="SINGLE SERVICE"/>
    </section>
    <section className='service'>
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <div className='service-video'>
              < div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              ></iframe>
              </div>
              <div className='video-text'>
                <h3>Voice Recording</h3>
                <p>Our voice recording service combines cutting-edge technology with expert engineering to ensure pristine audio quality for your projects. Whether you’re recording vocals, narration, or podcasts, we provide a professional and comfortable environment tailored to your needs. Equipped with industry-standard microphones and soundproof studios, we capture every nuance and deliver crystal-clear recordings that bring your vision to life. With a focus on precision and creativity, we work to ensure each session runs smoothly, allowing you to focus on your performance while we handle the technical details.</p>
                <div className='text-p'><p className='text-v'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.”</p></div>
                <p>Beyond the technical aspects, our team works closely with you to refine your sound and enhance the final product. From session setup to post-production, we prioritize clarity, tone, and emotional resonance to match your project’s requirements. Whether it’s for music, film, or voiceover work, our voice recording service ensures your message is heard with precision and impact. We also offer creative input and professional guidance throughout the process, ensuring that the final result not only meets but exceeds your expectations. Let us help you transform your ideas into powerful and captivating audio content.</p>
              </div>
              <div className='service-features'>
                <h3>Service Features</h3>
                <div className='our-text row'>
                  <Col lg={6} md={12}>
                    <p>Our voice recording service delivers exceptional quality with state-of-the-art equipment, expert engineers, and a comfortable studio environment. Whether you need clear vocals, engaging narrations, or professional podcasts, we provide flexible solutions tailored to your project.</p>
                  </Col>
                  <Col lg={6} md={12}>
                    <div className='high'>
                      <span> <FontAwesomeIcon icon={faCheck} /><p>High-Quality Equipment</p></span>
                      <span><FontAwesomeIcon icon={faCheck} /> <p>Expert Engineers</p></span>
                      <span><FontAwesomeIcon icon={faCheck} /> <p>Comfortable Environment</p></span>
                      <span><FontAwesomeIcon icon={faCheck} /> <p>Flexible Formats</p></span>
                    </div>
                  </Col>
                  <p>In conclusion, our voice recording service is dedicated to providing you with a seamless and professional experience, ensuring that every project, whether it’s music, narration, or podcasts, receives the attention and precision it deserves.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className='service-other'>
              <h3>Other Service</h3>
              <div>
                <ul>
                  <li> <FontAwesomeIcon icon={faCircleChevronRight} />  <a href="/Detalis"> Sound Mixing</a></li>
                  <li> <FontAwesomeIcon icon={faCircleChevronRight} />  <a href="/Detalis"> Track Mastering</a></li>
                  <li> <FontAwesomeIcon icon={faCircleChevronRight} />  <a href="/Detalis"> Audio Editing </a></li>
                  <li> <FontAwesomeIcon icon={faCircleChevronRight} />  <a href="/Detalis"> Audio Restoration </a></li>
                  <li> <FontAwesomeIcon icon={faCircleChevronRight} />  <a href="/Detalis"> Audio Restoration </a></li>
                </ul>
              </div>
            </div>
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

export default Servicedetails;