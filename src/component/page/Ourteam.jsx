
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from '../Navbar';
import Banner from '../bannerabout/Banner';
import './ourteam.css';
import { Container, Row, Col , Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter,  } from '@fortawesome/free-brands-svg-icons';
import Audioartistsection from '../Audioartistsection';
import Our from  '../Our';
import Footer from  '../Footer';
const Ourteam = () => {
  const [teamlist, setTeam] = useState([]);
  const [alllist, setAll] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [filteredTeam, setFilteredTeam] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  // تحميل بيانات الأعضاء
  useEffect(() => {
    axios.get("team.json")
      .then((res) => {
        console.log("team.json response:", res.data);
        setTeam(res.data.team);
        setFilteredTeam(res.data.team); // عند البداية عرض الكل
      })
      .catch(err => console.error("Error fetching team.json:", err));
  }, []);

  // تحميل بيانات القوائم (الفرق)
  useEffect(() => {
    axios.get("teamall.json")
      .then((res) => {
        console.log("teamall.json response:", res.data);
        setAll(res.data.teamall);
      })
      .catch(err => console.error("Error fetching teamall.json:", err));
  }, []);

const handleSelect = (index) => {
    setActiveIndex(index);
  const selectedTeam = alllist[index];
  setSelectedIndex(index);
  setFade(true);

  setTimeout(() => {
    if (selectedTeam.title === "All Team") {
      setFilteredTeam(teamlist); // عرض كل الصور
    } else {
      const filtered = teamlist
        .filter((member) => member.group === selectedTeam.title)
        .slice(0, 2); // عرض فقط صورتين
      setFilteredTeam(filtered);
    }
    setFade(false);
  }, 300);
};


  return (
    <>
    <section className='ourteam'>
        <Navbar />
        <Banner title="Our Team " smtitle="Our-Team" />
    </section>

    <section className='team-text'>
        <Container>
            <Row>
            <div className='minds'>
              <h2>Meet the <span>Minds</span> Behind the Music</h2>
              <p>Our team of talented musicians, producers, and creators is dedicated to supporting you in achieving your best work.</p>
            </div>

            <Col lg={12}  className='all-ul'>
              <ul className="minds-team ">
                {alllist.length > 0 ? (
                  alllist.map((allteam, index) => (
                    <div className='all-li'>
                        <li
                      key={allteam.id}
                        className={`minds-item  ${activeIndex === index ? 'active' : ''}`} 
                      onClick={() => handleSelect(index)}
                    >
                      {allteam.title}
                    </li>
                    </div>
                  ))
                ) : (
                  <p>Loading teams...</p>
                )}
              </ul>
            </Col>

            <Col lg={12} className="our-card-img">
                {filteredTeam.length > 0 && (
                filteredTeam.map((member) => (
                    <div className='re  '>
                    <div className='card'>
                        <div className='f'>
                        <img
                        key={member.id}
                        src={member.photo}
                        alt={`studio-${member.id}`}
                        className={`studio-image img-fluid rounded ${fade ? "fade-out" : "fade-in"}`}
                        />
                        </div>
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
                        
                            <h2>{member.title}</h2>
                            <p>{member.par}</p>
                    </div>
                    </div>
                ))
            )}
                </Col>
            </Row>
        </Container>
    </section>
    <section className='about-audio'>
            <Audioartistsection />
    </section>
    <Our />
    <Footer />
    </>
  );
};

export default Ourteam;
