import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout";
import Home from './component/Home';
import NavBar from "./component/Navbar";
import About from './component/about/About';
import Services from './component/services/Services';
import Servicedetails from './component/services/Servicedetails';
import Ourteam from './component/page/Ourteam';
import Ourstudio from './component/page/Ourstudio';
import Studiodetails from './component/page/Studiodetails';
import Bookapp from './component/page/Bookapp';
import Faqs from './component/page/Faqs';
import Page from './component/page/Page';
import Blognew from './component/blog/Blognew';
import Singleblog from './component/blog/Singleblog';
import Contact from './component/contact/Contact';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index path='/Home' element={<Home />} />
        <Route  path='/About' element={<About />} />
        <Route  path='/Services' element={<Services />} />
        <Route  path='/Detalis' element={<Servicedetails />} />
        <Route  path='/our-team' element={<Ourteam />} />
        <Route  path='/our-studio' element={<Ourstudio />} />
        <Route  path='/Studio' element={<Studiodetails />} />
        <Route  path='/book' element={<Bookapp />} />
        <Route  path='/FAQs' element={<Faqs />} />
        <Route  path='/Error' element={<Page />} />
        <Route  path='/Blog' element={<Blognew />} />
        <Route  path='/Post' element={<Singleblog />} />
        <Route  path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
