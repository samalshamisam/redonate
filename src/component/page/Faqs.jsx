// import React, { useState } from 'react';
// import Navbar from '../Navbar';
// import Banner from '../bannerabout/Banner';
// import './faqs.css';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// // import Footer from '../Footer';


// const Faqs = () => {

//   return (
//     <>
//     <section className='faq-section'>
//         <Navbar />
//         <Banner title="FAQ's " smtitle="FAQ's" />
//     </section>
//     <section className='ques'>
//         <Container>
//             <Row>
//                 <Col lg={6}>
//                     <div className='faq-ques'>
//                         <div className='left'>
//                             <div class="list"><button class="accordion">What is Netflix?</button><div class="panel"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere eos perspiciatis nam eius, doloribus iure beatae laboriosam est blanditiis natus expedita porro delectus exercitationem mollitia ex, fugit ullam laborum!</p></div></div>
//                         </div>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     </section>
//     </>
//   )
// }

// export default Faqs;
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import './faqs.css';
import { Container, Row, Col } from 'react-bootstrap';
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

const Faqs = () => {
  const faqData = [
    {
      question: 'What types of music projects can be recorded in Studio 1?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.',
    },
    {
      question: 'Is the studio acoustically treated?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
    },
    {
      question: 'What types of music projects can be recorded in Studio 1?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
        },
    {
      question: ' Can the studio handle full band recordings?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
        },
    {
      question: ' Does the studio support live tracking?',
      answer:'Studio 1 is designed to accommodate a variety of music projects, from solo vocal recordings and instrumental tracks to full band sessions. Its versatile equipment and acoustically treated environment make it suitable for all genres and styles.'
        },
  ];

  return (
    <>
      <section className="faq-section">
        <Navbar />
        <Banner title="FAQ's" smtitle="FAQ's" />
      </section>

      <section className="ques">
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <div className="faq-ques">
                <div className="left">
                    <h3>General</h3>
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
              <div className="faq-ques">
                <div className="left">
                    <h3>Account</h3>
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
            <Col lg={12}>
                <div className='got'>
                    <div className='got-text'>
                        <h3>Got Questions?</h3>
                        <p>If your question isn’t answered here, feel free to chat with our support team anytime.</p>
                    </div>
                    <button> <a href='/FAQs'> Get In Touch</a></button>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Faqs;
