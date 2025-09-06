// pages/Home.jsx
import React from 'react';
import HeroSection from '../component/HeroSection';
import AboutSection from '../component/AboutSection';
import ServicesSection from '../component/ServicesSection';
import AudioPlayerSection from './about/About';
import Testimonials from '../component/Testimonials';
import CallToAction from '../component/CallToAction';
import NavBar from './Navbar';
import Econ from './Econ';
import Audioartistsection from './Audioartistsection';
import Studio from './Studio';
import Partner from './Partner';
import Our from './Our';
import Blogs from './Blogs';
import Footer from './Footer';
const Home = () => {
    return (
    <>
    <NavBar />
    <HeroSection />
    <AboutSection />
    <Testimonials />
    <Econ />
    <Audioartistsection />
    <Studio />
    <Partner />
    <Our />
    <Blogs />
    <Footer />
    </>
);
}

export default Home;
