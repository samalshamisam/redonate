import React, { Fragment } from 'react'
import {Outlet} from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';

function Layout() {
  return (
    <Fragment>
        <Navbar />
        <main>
            <Outlet />
            <Home />
        </main>
        
        <Footer />
    </Fragment>
  )
}

export default Layout;
