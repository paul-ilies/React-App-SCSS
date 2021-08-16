import React from 'react'
import Header from './components/header/Header';
import "./App.scss"
import Sidebar from './components/sidebar/Sidebar';
import HotelView from "./components/hotelview/HotelView"

const App = () => {
    return (
        <div className="container">
            <Header />

            <div className="content">
                <Sidebar />
                <HotelView />

            </div>
        </div>
    )
}

export default App
