import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import './css/studio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Studio = () => {
  const [studioList, setStudioList] = useState([]);
  const [imglist, setImgList] = useState([]);
  const [plist, setPlist] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    axios.get("/dataa.json")
      .then((res) => setStudioList(res.data.Studio))
      .catch((err) => console.error("Error loading studio data:", err));
  }, []);

  useEffect(() => {
    axios.get("/dataimg.json")
      .then((res) => setImgList(res.data.imglist))
      .catch((err) => console.error("Error loading image data:", err));
  }, []);

  useEffect(() => {
    axios.get("/datap.json")
      .then((res) => setPlist(res.data.plist))
      .catch((err) => console.error("Error loading price and description data:", err));
  }, []);

  const handleSelect = (index) => {
    setFade(true); // أول شيء نخفي
    setTimeout(() => {
      setSelectedIndex(index); // بعدها نغير العنصر
      setFade(false); // ثم نظهره
    }, 300); // بعد 100 ملي ثانية
  };

  return (
    <section className="studio-section">
      <Container>
        <div className="text-center studio-header">
          <h2 className="studio-title">Choose Your <span>Studio</span></h2>
          <p className="studio-subtitle">
            Select the perfect studio space for your project, whether it’s for recording, mixing, or mastering,
            with options to suit different production styles and needs.
          </p>
        </div>

        <Row className="studio-content">
          {/* قائمة الاستوديو */}
          <Col lg={3} md={3} sm={12}>
            <ul className="studio-list">
              {studioList.length > 0 ? (
                studioList.map((studio, index) => (
                  <li
                    key={studio.id}
                    className="studio-item"
                    onClick={() => handleSelect(index)}
                  >
                    {studio.title}
                  </li>
                ))
              ) : (
                <p>Loading studios...</p>
              )}
            </ul>
          </Col>

          {/* صورة الاستوديو */}
          <Col lg={6} md={9} sm={12} className="text-center">
            {imglist.length > 0 && (
              <img
                src={imglist[selectedIndex]?.photo}
                alt={`studio-${imglist[selectedIndex]?.id}`}
                className={`studio-image img-fluid rounded ${fade ? "fade-out" : "fade-in"}`}
              />
            )}
          </Col>

          {/* تفاصيل الاستوديو */}
          <Col lg={3} md={12} sm={12}>
            {plist.length > 0 && (
              <div className={`studio-details ${fade ? "fade-out" : "fade-in"}`}>
                <h3>{plist[selectedIndex]?.title}</h3>
                <p>{plist[selectedIndex]?.description}</p>
                <div className="studio-meta">
                  <span className="studio-price">{plist[selectedIndex]?.price}</span>
                  {plist[selectedIndex]?.hour && <span className="studio-hour">/ {plist[selectedIndex]?.hour}</span>}
                </div>
                <div className="studio-meta">
                  {plist[selectedIndex]?.sqft &&  <span className="studio-sqft"><FontAwesomeIcon icon={faRulerCombined} className="icon" /> {plist[selectedIndex]?.sqft}</span>}
                  {plist[selectedIndex]?.people && <span className="studio-people"> <FontAwesomeIcon icon={faUserFriends} className="icon" />{plist[selectedIndex]?.people}</span>}
                </div>
                <button className="studio-btn">Book Now</button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Studio;


























// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from 'react-bootstrap';
// import axios from "axios";
// const Studio = ()=> {
//     const [studioList, setStudioList] = useState([]);

//     useEffect(() => {
//       axios.get("/dataa.json")
//         .then((res) => {
//           setStudioList(res.data.Studio);
//         })
//         .catch((err) => {
//           console.error("Error loading studio data:", err);
//         });
//     }, []);
//     const [imglist, setimglist] = useState([]);

//     useEffect(() => {
//       axios.get("/dataimg.json")
//         .then((res) => {
//             setimglist(res.data.Studio);
//         })
//         .catch((err) => {
//           console.error("Error loading studio data:", err);
//         });
//     }, []);
//   return (
//     <>
//     <section className='studio'>
//         <Container>
//             <Row>
//                 <h2>Choose Your Studio</h2>
//                 <p>Select the perfect studio space for your project, whether it’s for recording, mixing, or mastering, with options to suit different production styles and needs.</p>
//                 {studioList.map((studio) => (
//             <Col key={studio.id} lg={3} md={4} sm={4}  className="mb-4">
//                 <div className="studio-box p-3 border rounded text-center">
//                     <span className="fw-bold">{studio.title}</span>
//                 </div>
//             </Col>
//             ))}
//           {imglist.map((item) => (
//   <Col key={item.id} lg={6} md={8} sm={8} className="mb-4">
//     <div className="s text-center">
//       <img src={item.photo} alt={`studio-${item.id}`} className="img-fluid rounded" />
//     </div>
//   </Col>
// ))}
//                 <Col lg={3}></Col>
//             </Row>
//         </Container>
//     </section>
//     </>
//   );
// }

// export default Studio;