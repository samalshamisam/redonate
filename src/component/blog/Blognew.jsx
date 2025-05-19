import React from 'react';
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import './blognew.css'
import { Container , Row , Col} from 'react-bootstrap';
import blog1 from '../../image/blog-3-1536x1024.jpg';
import blog2 from '../../image/blog-4-1536x1024.jpg';
import blog3 from '../../image/team-4.jpg';
import blog4 from '../../image/photo-28.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer';
const Blognew = () => {
  return (
    <>
    <section className='blog-new'>
    <Navbar />
    <Banner  title="Blog & News" smtitle="Blog & News"/>
    </section>
    <section className='blog-section'>
        <Container>
            <Row>
                <div className='blog-text row'>
                    <h2 className='col-lg-6 col-md-12'>The latest <span>Blogs & Articles</span></h2>
                    <p className='col-lg-6 col-md-12'>Stay updated with fresh insights, trends, and expert opinions in music production and technology. Explore our curated blogs to keep your creativity alive.</p>
                </div>
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
                <Col lg={6} md={6} sx={12}>
              <div className='blogs-img'>
                <div className='img-blogs'>
                <img src={blog4} />
                <button>Tour</button>
                </div>
                <div className='blogs-text-img'>
                  <span> <FontAwesomeIcon icon={faCalendar} />  January 22, 2025</span>
                  <h1>On the Road: Upcoming Tours & Live Performances</h1>
                  <p>Tour & Live HOME – Single Blog KLLG St, No.99, Pku City, ID 28289 hello@domainsite.com…</p>
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

export default Blognew;