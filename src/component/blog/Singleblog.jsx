import React from 'react';
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import './single.css';
import photo from '../../image/blog-4.jpg';
import photo1 from '../../image/photo-22-1.jpg';
import { Container , Row , Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar , faCheck , } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter ,} from '@fortawesome/free-brands-svg-icons';
import blog1 from '../../image/blog-3-1536x1024.jpg';
import blog2 from '../../image/blog-4-1536x1024.jpg';
import blog3 from '../../image/team-4.jpg';
import Footer from '../Footer';
const Singleblog = () => {
  return (
    <>
    <section className='single-blog'>
    <Navbar />
    <Banner  title="Tour & Live" smtitle=" Single Blog "/>
    </section>
    <section className='single-section'>
        <Container>
            <Row>
                <Col lg={9} md={12}>
                    <div className='blog-single'>
                        <div className='img-blogs'>
                        <img src={photo} />
                        <button>Tour</button>
                        </div>
                        <h4>On the Road: Upcoming Tours & Live Performances</h4>
                        <span> <FontAwesomeIcon icon={faCalendar} />  January 22, 2025</span>
                        <div className='blog-text'>
                            <p>Our Recording Studio is designed for artists who seek top-tier sound quality. With state-of-the-art equipment and acoustically treated spaces, Studio 1 ensures every recording, from vocals to instruments, captures the finest details with clarity and precision. Whether you’re working solo or with a full band, our studio provides the perfect environment for creativity and exceptional performances. The space is designed for maximum comfort and functionality, featuring high-end microphones, monitors, and audio interfaces to bring your vision to life. Our experienced sound engineers are on hand to guide you through the process, ensuring your recordings sound as good as they feel. Whether you’re tracking, mixing, or mastering, Studio 1 has everything you need to create your best work.</p>
                            <p>The space is designed for maximum comfort and functionality, featuring high-end microphones, monitors, and audio interfaces to bring your vision to life. Our experienced sound engineers are on hand to guide you through the process, ensuring your recordings sound as good as they feel. Whether you’re tracking, mixing, or mastering, Studio 1 has everything you need to create your best work. The space is designed for maximum comfort and functionality, featuring high-end microphones, monitors, and audio interfaces to bring your vision to life. Our experienced sound engineers are on hand to guide you through the process, ensuring your recordings sound as good as they feel. Whether you’re tracking, mixing, or mastering, Studio 1 has everything you need to create your best work.</p>
                            <h4>Tour and Live</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies lacus eu diam consequat, id feugiat ligula tempor. Etiam auctor justo quis sem feugiat facilisis sit amet quis purus. Donec eget orci ante. Fusce tristique erat eu maximus luctus. Integer eu suscipit quam, a lobortis lorem. Nulla et lorem id urna sollicitudin placerat eget eget elit.</p>
                            <div className='lorem row'>
                                <Col lg={6} md={12}>
                                    <img src={photo1} />
                                </Col>
                                <Col lg={6} md={12}>
                                    <div className='text'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies lacus eu diam consequat, id feugiat ligula tempor. Etiam auctor justo quis sem feugiat facilisis sit amet quis purus.</p>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCheck} /> Lorem ipsum dolor</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> Maecenas ultricies lacus</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> Fusce tristique erat</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> Integer eu suscipit quam</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies lacus eu diam consequat, id feugiat ligula tempor</p>
                                    </div>
                                </Col>
                                <p className='p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies lacus eu diam consequat, id feugiat ligula tempor. Etiam auctor justo quis sem feugiat facilisis sit amet quis purus. Donec eget orci ante. Fusce tristique erat eu maximus luctus.</p>
                            </div>
                        </div>
                        <div className='tour'>
                            <span>
                                <h5>Tags:</h5>
                                <ul>
                                    <li><span>artists</span></li>
                                    <li><span>music</span></li>
                                    <li><span>tour</span></li>
                                </ul>
                            </span>
                            <span>
                                <h5>Share This :</h5>
                                <ul>
                                    <li> 
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                        href="https://x.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <FontAwesomeIcon icon={faXTwitter} size="2x" color="black" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                        href="https://instagram.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#E1306C" />
                                        </a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='reads row'>
                            <h4>Recommended Reads</h4>
                            <Col lg={6} md={6} sx={12}>
                            <div className='blogs-img'>
                <div className='img-blogs'>
                <img src={blog1} />
                <button>Tour</button>
                </div>
                <div className='blogs-text-img'>
                        <span> <FontAwesomeIcon icon={faCalendar} />  January 22, 2025</span>
                        <h1>On the Road: Upcoming Tours & Live Performances</h1>
                        <p>Tour & Live HOME – Single Blog KLLG St, No.99, Pku City, ID 28289 hello@domainsite.com…</p>
                        </div>
                            </div>
                            </Col>
                            <Col lg={6} md={6} sx={12}>
              <div className='blogs-img'>
                <div className='img-blogs'>
                <img src={blog2} />
                <button>Tour</button>
                </div>
                <div className='blogs-text-img'>
                  <span> <FontAwesomeIcon icon={faCalendar} />  January 22, 2025</span>
                  <h1>On the Road: Upcoming Tours & Live Performances</h1>
                  <p>Tour & Live HOME – Single Blog KLLG St, No.99, Pku City, ID 28289 hello@domainsite.com…</p>
                </div>
              </div>
                            </Col>
                            <Col lg={6} md={6} sx={12}>
              <div className='blogs-img'>
                <div className='img-blogs'>
                <img src={blog3} />
                <button>Tour</button>
                </div>
                <div className='blogs-text-img'>
                  <span> <FontAwesomeIcon icon={faCalendar} />  January 22, 2025</span>
                  <h1>On the Road: Upcoming Tours & Live Performances</h1>
                  <p>Tour & Live HOME – Single Blog KLLG St, No.99, Pku City, ID 28289 hello@domainsite.com…</p>
                </div>
              </div>
                            </Col>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={12}>
                <div className='tag'>
                    <h4>Tag cloud.</h4>
                    <div className='footer-tags'>
                                
                                <div className='footer-tags-con'>
                                    <Row>
                                    <div className='footer-tags-ul '>
                                      <Row>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>artist</span></li></ul>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>audio</span></li></ul>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>studio</span></li></ul>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span> instrument</span></li></ul>
                                      </Row>
                                      <Row>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>music</span></li></ul>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>beat</span></li></ul>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>song</span></li></ul>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>performance</span></li></ul>
                                      </Row>
                                      <Row>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>playlist</span></li></ul>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>album</span></li></ul>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>lyrics</span></li></ul>
                                      <ul className='footer-ul col-lg-3 col-md-4 col-sx-3'> <li> <span>record</span></li></ul>
                                      </Row>
                                    </div>
                                    </Row>
                                  </div>
                    </div>
                    <div className='blogs-news'>
                                    <h4>Recent Posts</h4>
                                    <div className='blogs-news-text'>
                                        <h4>Top Music Production Trends to Watch in 2025</h4>
                                      <h2>On the Road: Upcoming Tours & Live Performances</h2>
                                      <span> <FontAwesomeIcon icon={faCalendar} />  January 22, 2025</span>
                                      <p>Tour & Live HOME – Single Blog KLLG St, No.99,…</p>
                                    </div>
                                    <div className='blogs-news-text'>
                                      <h2>Sound Spotlight: Fresh Tracks & Rising Artists</h2>
                                      <span> <FontAwesomeIcon icon={faCalendar} />  January 22, 2025</span>
                                      <p>Tour & Live HOME – Single Blog KLLG St, No.99,…</p>
                                    </div>
                                    <div className='blogs-news-text'>
                                      <h2>Crafting Identity: How Artist Define Their Sound</h2>
                                      <span> <FontAwesomeIcon icon={faCalendar} />  January 22, 2025</span>
                                      <p>Tour & Live HOME – Single Blog KLLG St, No.99,…</p>
                                    </div>
                                    <div className='blogs-news-text'>
                                      <h2>From Concept to Creation: The Art of Music Production</h2>
                                      <span> <FontAwesomeIcon icon={faCalendar} />  January 22, 2025</span>
                                      <p>Tour & Live HOME – Single Blog KLLG St, No.99,…</p>
                                    </div>
                                    <button> Visit Our Blog</button>
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

export default Singleblog;