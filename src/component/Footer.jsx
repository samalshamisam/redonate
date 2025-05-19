import React , { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Row , Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt , faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter,faSpotify, faItunesNote } from '@fortawesome/free-brands-svg-icons';
import logo from '../image/logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/footer.css';
const Footer = () => {
      const [footerlist, setFooter] = useState([]);
      useEffect(() => {
          axios.get("footer.json")
            .then((res) => {
              console.log("footer.json response:", res.data); 
              setFooter(res.data.footer);
            })
            .catch(err => console.error("Error fetching footer.json:", err));
        }, []);
        console.log("footerlist state:", footerlist);
  return (
    <>
    <section className='footer'>
      <Container>
        <Row className=''>
          <div className='footer-dis row'>
          <div className='footer-left col-lg-7 col-md-12'>
            <div className='footer-left-address'>
              <span><FontAwesomeIcon icon={faMapMarkerAlt}  /> KLLG St, No.99, Pku City, ID 28289 </span>
              <span><FontAwesomeIcon icon={faPhone}  /> 0761-8523-398</span>
            </div>
            <div className='footer-tags'>
              <h1>Tags</h1>
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
            <div className='footer-logo '>
              <div className='footer-img'>
                <img src={logo} alt={logo} />
              </div>
              <div className='footer-a '>
                <ul>
                  <li><a href="#Home"> Home</a></li>
                </ul>
                <ul>
                  <li><a href="#Home"> About Us</a></li>
                </ul>
                <ul>
                  <li><a href="#Home"> Services</a></li>
                </ul>
                <ul>
                  <li><a href="#Home"> Blog</a></li>
                </ul>
                <ul>
                  <li><a href="#Home"> Pages</a></li>
                </ul>
              </div>
              <div className='footer-h'>
                <h2>Copyright © 2025 Rometheme. All Rights Reserved.</h2>
              </div>
            </div>
          </div>
          <div className='footer-right col-lg-5 col-md-12'>
            <div className='footer-icon'>
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
            <div className='footer-text'>
              <h3>Get in contact</h3>
              <p>hello@domainsite.com</p>
            </div>
            <div className='footer-right-img'>
  <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
        >
         {Array.isArray(footerlist) && footerlist.slice(1, 16).map((footer) => (
  <SwiperSlide key={footer.id}>
    <div className='team'>
      <div className='team-footer-img'>
        <img src={footer.photo}  alt={footer.photo}/>
      </div>
    </div>
  </SwiperSlide>
))}
        </Swiper>
            </div>
            <div className='footer-tearms'>
              <span className='s'>Tearms & Conditios</span>
              <span>Privacy Policy</span>
            </div>
          </div>
          </div>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Footer; 