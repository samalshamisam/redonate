import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import './css/blogs.css';
import blog1 from '../image/blog-3-1536x1024.jpg';
import blog2 from '../image/blog-4-1536x1024.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
  return (
    <>
    <section className='blogs'>
        <Container>
            <Row>
            <div className='blogs-text'>
              <Row>
                <Col lg={6} md={12}>
                  <h2>The latest <span>Blogs & Articles</span></h2>
                </Col>
                <Col lg={6} md={12}>
                  <p>Stay updated with fresh insights, trends, and expert opinions in music production and technology. Explore our curated blogs to keep your creativity alive.</p>
                </Col>
              </Row>
            </div>
            
            <Col lg={4} md={6} sx={12}>
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
            <Col lg={4} md={6} sx={12}>
              <div className='blogs-img'>
                <div className='img-blogs'>
                <img src={blog1} />
                <button>Tour</button>
                </div>
                <div className='blogs-text-img'>
                  <span> <FontAwesomeIcon icon={faCalendar} /> January 22, 2025</span>
                  <h1>Sound Spotlight: Fresh Tracks & Rising Artists</h1>
                  <p>Tour & Live HOME – Single Blog KLLG St, No.99, Pku City, ID 28289 hello@domainsite.com…</p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sx={12}>
              <div className='blogs-news'>
                <h1>News</h1>
                <div className='blogs-news-text'>
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
            </Col>
            
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Blogs;