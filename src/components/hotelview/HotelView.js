import React from 'react';
import Cta from './Cta';
import Details from './Details';
import Gallery from './Gallery';
import "./HotelView.scss"
import Overview from './Overview';

const HotelView = () => {
    return (
        <main className="hotel-view">
            <Gallery />
            <Overview />
            <Details />
            <Cta />
        </main>
    )
}

export default HotelView
