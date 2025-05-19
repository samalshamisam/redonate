import React, { useState , useEffect} from 'react';
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import { Container , Row , Col , Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt , faPhone ,  faVoicemail } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Footer from '../Footer';
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="list">
      <button
        className={`accordion ${isOpen ? 'active' : ''}`}
        onClick={toggleAccordion}
      >
        {question}
      </button>
      <div
        className="panel"
        style={{
          maxHeight: isOpen ? '300px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-out',
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Contact = ()  => {
     const faqData = [
    {
      question: 'Can I book a session online?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.',
    },
    {
      question: 'Is a technician included during sessions?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
    },
    {
      question: 'Can I bring my own equipment?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
        },
    {
      question: 'Do you offer mixing or editing services?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
        },
    {
      question: 'Does the studio have a waiting area?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
        },
  ];

const faqData2 = [
    {
      question: 'What should I bring to my session?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.',
    },
    {
      question: 'Can I get recordings in different formats?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
    },
    {
      question: 'Do I need prior experience?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
        },
    {
      question: 'How long is a typical session?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
        },
    {
      question: 'What if I need to reschedule?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
        },
  ];

    const [projects, setProject] = useState([]);
        useEffect(() => {
            axios.get("project.json")
                .then((res) => {
                  console.log("project.json response:", res.data); 
                  setProject(res.data.project);
                })
                .catch(err => console.error("Error fetching project.json:", err));
            }, []);
            console.log("projects state:", projects);
            
  return (
    <>
    <section className='contact'>
        <Navbar />
        <Banner  title=" Contact Us" smtitle="  Contact Us "/>
        </section>
        <section className='contact-section'>
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                    <div className='contact-form'>
                        <Form>
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
                    <div className='contact-text'>
                        <h2>Main Studio</h2>
                        <p>The heart of our creative space, designed for high-quality recordings with top-tier equipment and expert support.</p>
                        <div>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt}  /> KLLG St, No.99, Pku City, ID 28289 </span>
                            <span>  <br /><FontAwesomeIcon icon={faVoicemail}  /> hello@domainsite.com</span><br />
                            <span><FontAwesomeIcon icon={faPhone}  /> 0761-8523-398</span>
                        </div>
                    </div>
                    </Col>
                    <Col lg={6} md={12}>
                    <div className='contact-with'>
                        <h2>Contact <span>With Us</span></h2>
                        <p>Stay connected to discover what we offer. If you have questions or want to collaborate, we’re here to help!</p>
                        <div className="map-container" style={{ width: '100%', height: '400px' }}>
        <iframe
        loading="lazy"
        src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
        title="London Eye, London, United Kingdom"
        aria-label="London Eye, London, United Kingdom"
        style={{ width: '100%', height: '100%', border: 0 }}
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
                        </div>
                        <h1>Opening Hours</h1>
                        <div><h6>Monday - Friday</h6><span>09.00 AM - 23.00 PM</span></div>
                        <div><h6>Saturday</h6><span>10.00 AM - 18.00 PM</span></div>
                        <div><h6>Sunday</h6><span>Closed</span></div>
                    </div>
                    </Col>
                     <section className='logo-swiper'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                          >
                                {Array.isArray(projects) && projects.slice(1, 15).map((project) => (
                                <SwiperSlide className='swip' key={project.id}> <div><img src={project.photo} alt={project.photo}/></div></SwiperSlide>
                                ))} 
                        </Swiper>
                        </section>
                </Row>
            </Container>
        </section>
        <section className='asked'>
            <Container>
                <Row>
                    <div className='asked-text'>
                        <h2>Frequently <span>Asked</span> Questions</h2>
                        <p>Find quick answers to common questions about our services, from session details to pricing. If you need more information, feel free to reach out!</p>
                    </div>
                    <Col lg={6} md={12}>
                                <div className="asked-ques">
                                    <div className="left">
                                    {faqData.map((item, index) => (
                                        <AccordionItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                        />
                                    ))}
                                    </div>
                                </div>
                    </Col>
                    <Col lg={6} md={12}>
                                <div className="asked-ques">
                                    <div className="right">
                                    {faqData2.map((item, index) => (
                                        <AccordionItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                        />
                                    ))}
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

export default Contact;