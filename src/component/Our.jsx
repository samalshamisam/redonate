import React, { useState, useEffect } from 'react';
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row } from 'react-bootstrap';
import './css/our.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Pagination, FreeMode } from 'swiper/modules';
// import { FreeMode, Pagination } from "swiper/modules";
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';


const Our = () => {
    const [ourlist, setOur] = useState([]);
    // const form = useRef();
    useEffect(() => {
        axios.get("our.json")
          .then((res) => {
            console.log("our.json response:", res.data); // ← تحقق هنا
            setOur(res.data.our);
          })
          .catch(err => console.error("Error fetching our.json:", err));
      }, []);
      console.log("ourlist state:", ourlist);

  return (
    <>
    <section className='Our-Creators'>
        <Container>
            <Row>
                <div className='our-text'>
                    <h2>Hear What Our Creators Have<span>to Say!</span></h2>
                    <p>Discover how our clients experience the creative process at our studio and why they trust us to bring their music to life.</p>
                </div>
                <div className='our-swiper'>
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
         {Array.isArray(ourlist) && ourlist.slice(1, 7).map((our) => (
  <SwiperSlide key={our.id}>
    <div className='our-team'>
      <div className='icon'>
        <FontAwesomeIcon icon={faQuoteRight} size="2x" />
      </div>
      <div className='our-p'>
        <p>{our.title}</p>
      </div>
      <div className='our-img'>
        <img src={our.photo}  alt={our.photo}/>
        <div className='our-img-text'>
          <h2>{our.imgh2}</h2>
          <p>{our.imgp}</p>
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="rkit" />
          ))}
        </div>
      </div>
    </div>
  </SwiperSlide>
))}

        </Swiper>









                        {/* <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"  data-wow-duration="2s" data-wow-delay="0.5s"
                        >
                                <div className='our-teams-container'>
                                <SwiperSlide className='swip' >
                                
                                <div className='our-team'>
                                    <div className='icon'>
                                    <FontAwesomeIcon icon={faQuoteRight} size="2x" />
                                    </div>
                                    <div className='our-p'>
                                        <p>The team here truly knows how to elevate a song to its full potential. Their expertise and passion made the entire process enjoyable and rewarding.</p>
                                    </div>
                                    <div className='our-img'>
                                        <img src={photo1}/>
                                        <div className='our-img-text'>
                                            <h2>Liam Scott</h2>
                                            <p>Music Producer</p>
                                            <FontAwesomeIcon icon={faStar} className="rkit" /><FontAwesomeIcon icon={faStar} className="rkit" /><FontAwesomeIcon icon={faStar} className="rkit" /><FontAwesomeIcon icon={faStar} className="rkit" /><FontAwesomeIcon icon={faStar} className="rkit" />
                                        </div>
                                    </div>
                                </div>
                                
                                </SwiperSlide>
                                </div>
                        </Swiper> */}
                        {/* <Swiper
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
          {projects.slice(1, 9).map((project) => (
            <SwiperSlide className='swip' target="_blank" rel="noreferrer"  >
                                <div className='our-team'>
                                    <div className='icon'>
                                    <FontAwesomeIcon icon={faQuoteRight} size="2x" />
                                    </div>
                                    <div className='our-p'>
                                        <p>The team here truly knows how to elevate a song to its full potential. Their expertise and passion made the entire process enjoyable and rewarding.</p>
                                    </div>
                                    <div className='our-img'>
                                        <img src={photo1}/>
                                        <div className='our-img-text'>
                                            <h2>Liam Scott</h2>
                                            <p>Music Producer</p>
                                            <FontAwesomeIcon icon={faStar} className="rkit" /><FontAwesomeIcon icon={faStar} className="rkit" /><FontAwesomeIcon icon={faStar} className="rkit" /><FontAwesomeIcon icon={faStar} className="rkit" /><FontAwesomeIcon icon={faStar} className="rkit" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
            
          ))}
        </Swiper> */}
                </div>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Our;