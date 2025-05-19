// // // components/CallToAction.jsx
// // import React from 'react';
// // import { Container, Button } from 'react-bootstrap';

// // import './css/CallToAction.css';
// // const CallToAction = () => {
// //   return (
// //     <section className="cta-section py-5 text-center">
// //       <Container>
// //         <h2 className="mb-3">هل أنت مستعد لتسجيل صوتك؟</h2>
// //         <p className="mb-4">احجز موعدك الآن وابدأ رحلتك الإبداعية في عالم الموسيقى.</p>
// //         <Button variant="success" size="lg" href="/Appointment">احجز الآن</Button>
// //       </Container>
      
// //     </section>
// //   );
// // };

// // export default CallToAction;
// import React, { useState, useEffect } from 'react';
// import axios from "axios";

// import 'swiper/css';
// import 'swiper/css/pagination';

// import Navbar from './Navbar';
// import Banner from './bannerabout/Banner';
// // import './ourteam.css';
// import { Container , Row , Col} from 'react-bootstrap';
// // import team1 from '../../image/team-1.jpg';
// // import team2 from '../../image/team-2.jpg';
// // import team3 from '../../image/team-3.jpg';
// // import team4 from '../../image/team-4.jpg';
// // import team5 from '../../image/team-5.jpg';
// // import team6 from '../../image/team-6.jpg';
// // import team7 from '../../image/team-7.jpg';
// // import team8 from '../../image/team-8.jpg';


// const Ourteam = () => {

//   const [ourlist, setOur] = useState([]);
//     // const form = useRef();
//     useEffect(() => {
//         axios.get("our.json")
//           .then((res) => {
//             console.log("our.json response:", res.data); // ← تحقق هنا
//             setOur(res.data.our);
//           })
//           .catch(err => console.error("Error fetching our.json:", err));
//       }, []);
//       console.log("ourlist state:", ourlist);














//     // const [teamlist, setTeam] = useState([]);
//     // const [alllist, setAll] = useState([]);
//     // const [selectedIndex, setSelectedIndex] = useState(0);
//     // const [fade, setFade] = useState(false);
//     // // const form = useRef();
//     // useEffect(() => {
//     //     axios.get("team.json")
//     //         .then((res) => {
//     //         console.log("team.json response:", res.data); // ← تحقق هنا
//     //         setTeam(res.data.team);
//     //     })
//     //         .catch(err => console.error("Error fetching team.json:", err));
//     //     }, []);
//     //     console.log("teamlist state:", teamlist);
        


//         //  useEffect(() => {
//         // axios.get("teamall.json")
//         //     .then((res) => {
//         //     console.log("teamall.json response:", res.data); // ← تحقق هنا
//         //     setAll(res.data.teamall);
//         // })
//         //     .catch(err => console.error("Error fetching teamall.json:", err));
//         // }, []);
//         // console.log("alllist state:", alllist);

//   //       const handleSelect = (index) => {
//   //   setFade(true); // أول شيء نخفي
//   //   setTimeout(() => {
//   //     setSelectedIndex(index); // بعدها نغير العنصر
//   //     setFade(false); // ثم نظهره
//   //   }, 300); // بعد 100 ملي ثانية
//   // };
//   return (
//     <>
//     {/* <section className='ourteam'>
//         <Navbar />
//         <Banner  title="Our Team " smtitle="Our-Team"/>
//     </section> */}
//     <section className='team-text'>
//         <Container>
//             <Row>
//                 <div className='minds'>
//                     <h2>Meet the <span>Minds</span> Behind the Music</h2>
//                     <p>Our team of talented musicians, producers, and creators is dedicated to supporting you in achieving your best work. With expertise and experience, we’re here to help you reach your full musical potential.</p>
//                 </div>
//                  {/* <Col lg={12} >
//             <ul className="studio-list">
//               {alllist.length > 0 ? (
//                 alllist.map((allteam, index) => (
//                   <li
//                     key={allteam.id}
//                     className="studio-item"
//                     onClick={() => handleSelect(index)}
//                   >
//                     {allteam.title}
//                   </li>
//                 ))
//               ) : (
//                 <p>Loading studios...</p>
//               )}
//             </ul>
//           </Col> */}
//           <div>
//             <ul>
//                 {ourlist.map((item) => (
//                   <li key={item.id}>{item.title}</li>
//                 ))}
//             </ul>
//           </div>
//             </Row>
//         </Container>
//     </section>
//     </>
//   )
// }

// export default Ourteam;
