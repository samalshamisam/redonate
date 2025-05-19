import React from 'react';
import Navbar from '../Navbar';
import './page.css';
import { Container, Row, Col, } from 'react-bootstrap';
import photo from '../../image/error.png';

import Footer from '../Footer';
const Page = () => {
  return (
    <>
    <section className="Err-section">
        <Navbar />
        {/* <Banner title="FAQ's" smtitle="FAQ's" /> */}
          <Container>
            <Row>
                <div className='Error-section'>
                <div className='error '>
                    <div className='h col-lg-6 col-md-12'>
                        <img src={photo} />
                        <h1>Oooppsss!!!!</h1>
                        <p> Thepage you are looking for does not exists or an other error occurred.  </p>
                        <bottun><a href="/Home">Back To Home</a></bottun>
                    </div>
                    <div className='text col-lg-6 col-md-12 '>
                        
                    </div>
                </div>
                </div>
            </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Page;