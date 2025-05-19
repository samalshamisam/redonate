
import React, { useState , useEffect} from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import './css/AboutPreview.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img4 from '../image/img4.jpg';
import img6 from '../image/img6.jpg';
import img7 from '../image/img7.jpg';
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
const AboutSection = () => {

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
    <section className="about-preview py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={3}> 
            <h1>Discover the Latest<span className='brush1'>Records!</span></h1>
            <p>Check out the newest tracks straight from the studio, ready to bring your project to life.</p>
            <div className="w-max-content st">
              <button className='btn-accent-underline' href='/concat'>Explore Studios</button>
            </div>
          </Col>
          <Col md={3}>
            <div className="card-trac d-flex flex-column gap-3">
              <div className="position-relative">
                <img src={img4} alt="" />
                <div className="track-blur bg-blur">
                  <div className="position-relative 100.h-100">
                    <div className="d-flex flex-column gap-3 p-4 w-100 text-center algin-items-centerjustify-content-center position-relative sty">
                      <FontAwesomeIcon icon={faChevronRight}  />
                      <p>A soulful track blending mellow melodies and heartfelt lyrics, capturing the essence of bittersweet nostalgia.</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                <h5 className="m-0 accent-color">
                  Midnight pulse
                </h5>
                <p>Neon Drift</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}> 
          <div className="card-trac d-flex flex-column gap-3">
              <div className="position-relative">
                <img src={img6} alt="" />
                <div className="track-blur bg-blur">
                  <div className="position-relative 100.h-100">
                    <div className="d-flex flex-column gap-3 p-4 w-100 text-center algin-items-centerjustify-content-center position-relative sty" >
                      <FontAwesomeIcon icon={faChevronRight}  />
                      <p>A soulful track blending mellow melodies and heartfelt lyrics, capturing the essence of bittersweet nostalgia.</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                <h5 className="m-0 accent-color">
                  Electric Heart
                </h5>
                <p>Groove Theory</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
          <div className="card-trac d-flex flex-column gap-3">
              <div className="position-relative">
                <img src={img7} alt="" />
                <div className="track-blur bg-blur">
                  <div className="position-relative 100.h-100">
                    <div className="d-flex flex-column gap-3 p-4 w-100 text-center algin-items-centerjustify-content-center position-relative sty" >
                      <FontAwesomeIcon icon={faChevronRight}  />
                      <p>A soulful track blending mellow melodies and heartfelt lyrics, capturing the essence of bittersweet nostalgia.</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                <h5 className="m-0 accent-color">
                  Fading Dreams
                </h5>
                <p>The Skylines</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='logo-swiper'>
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
            <SwiperSlide className='swip' key={project.id}> <div><img src={project.photo} alt={project.photo}/></div></SwiperSlide>
            ))} 
      </Swiper>
      </Row>
    </Container>
    </section>
  </>
  );
};

export default AboutSection;


// const [projects, setProject] = useState([]);
// useEffect(() => {
//   axios.get("data.json")
//     .then((res) => {
//       setProject(res.data.projects)
//     })
// }, [])