import React from 'react'
import Landing from './Landing';
import AboutUs from './AboutUs';
import Learn from './Learn';
import ShopNow from './ShopNow';
import Contact from './Contact';

export default function Home() {
    return (
        <div>
        <Landing  />
        <AboutUs />
        <ShopNow />
        <Learn />
        <Contact />
        </div>
    )
}
