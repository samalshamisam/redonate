import React, {  useState , useEffect} from 'react';
import './about.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter,faSpotify, faItunesNote } from '@fortawesome/free-brands-svg-icons';
import photo from '../../image/photo-26.jpg';

import logo1 from '../../image/logo-1-1.png';
import logo2 from '../../image/logo-2-1.png';
import team1 from '../../image/team-1.jpg';
import team2 from '../../image/team-2.jpg';
import team3 from '../../image/team-3.jpg';
import Audioartistsection from '../Audioartistsection';
import team11 from '../../image/team-1.jpg';
import team12 from '../../image/team-2.jpg';
import team13 from '../../image/team-6.jpg';
import team14 from '../../image/team-4.jpg';
import stay from '../../image/photo-273.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination , Navigation } from 'swiper/modules';
const About = () => {
   const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
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
    <section className='baner'>
    <Navbar />
    <Banner  title="About us " smtitle="About Us "/>
    </section>
    <section className='about-section'>
      <Container>
        <Row>
          <div className='about-text row'>
            <div className='col-lg-6 col-md-12'><h2>Your Creative Haven for Musical<span>Excellence</span></h2></div>
            <div className='about-p col-lg-6 col-md-12'>
              <p>Welcome to our music studio, designed for musicians to refine their talents, collaborate, and elevate their creations with modern facilities in a comfortable space.</p>
              <span>hello@domainsite.com</span>
              <div className='icon'>
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
            </div>
          </div>
          <div className='about-best row'>
          <Col lg={6} md={12} >
            <div className='row best'>
              <img src={photo} />
              <Col lg={6} md={6} sm={12}>
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
                              <Col lg={6} md={6} sm={12}>
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
            </div>
          </Col>
          <Col lg={6} md={12} className='about-img'></Col>
          </div>
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
      <section className='about-audio'>
            <Audioartistsection />
      </section>
      <section className='about-minds'>
        <Container>
          <Row>
            <div className='minds-text'>
              <h2>Meet the<span>Minds</span> Behind the Music</h2>
              <p >Our team of talented musicians, producers, and creators is dedicated to supporting you in achieving your best work. With expertise and experience, we’re here to help you reach your full musical potential.</p>
            </div>
            <Col lg={3} md={4} sx={12} className='notactive'>
              <div className='about-card'>
                <Card>
                  <div className='card-about'><img src={team2} /></div>
                  <div className='overlay'>
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
                  </div>
                  <h2>Ethan Hayes</h2>
                  <p>Sound Engineer</p>
                </Card>
              </div>
            </Col>
            <Col lg={3} md={4} sx={12} className='active'>
              <div className='about-card'>
                <Card>
                  <div className='card-about'><img src={team1} /></div>
                  <div className='overlay'>
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
                  </div>
                  <h2>Liam Carter</h2>
                  <p>Sound Engineer</p>
                </Card>
              </div>
            </Col>
            <Col lg={3} md={4} sx={12} className='notactive'>
              <div className='about-card'>
                <Card>
                  <div className='card-about'><img src={team3} /></div>
                  <div className='overlay'>
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
                  </div>
                  <h2>Emma Brooks</h2>
                  <p>Recording Specialist</p>
                </Card>
              </div>
            </Col>
            <Col lg={3} md={12} className='abut-swiper'>
              <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='swiper-text'>
            <span>
              Liam ensures top-notch audio quality through expert recording, mixing, and mastering, turning raw tracks into polished works.
            </span>
            <div className='swiper-img'>
              <img src={team11} />
              <div className='h'>
                <h2>Mason Walker</h2>
                <p>Recording Specialist</p>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
            <div className='swiper-text'>
            <span>
              Liam ensures top-notch audio quality through expert recording, mixing, and mastering, turning raw tracks into polished works.
            </span>
            <div className='swiper-img'>
              <img src={team12} />
              <div className='h'>
                <h2>Liam Carter</h2>
                <p>Sound Engineer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-text'>
            <span>
              Liam ensures top-notch audio quality through expert recording, mixing, and mastering, turning raw tracks into polished works.
            </span>
            <div className='swiper-img'>
              <img src={team13} />
              <div className='h'>
                <h2>Ethan Hayes </h2>
                <p>Sound Engineer </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-text'>
            <span>
              Liam ensures top-notch audio quality through expert recording, mixing, and mastering, turning raw tracks into polished works.
            </span>
            <div className='swiper-img'>
              <img src={team14} />
              <div className='h'>
                <h2>Emma Brooks </h2>
                <p>Recording Specialist</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
    <section className='lgoipsum'>
      <Container>
        <Row>
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
            <SwiperSlide className='swiper-about' key={project.id}> <div><img src={project.photo} alt={project.photo}/></div></SwiperSlide>
            ))} 
      </Swiper>
        </Row>
      </Container>
    </section>
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
    </>
  );
}

export default About;
