import React from 'react'
import NavIcons from './NavIcons'
import "./TopHeader.scss"

const TopHeader = () => {
    return (
        <header className="header">
            <img src="/img/logo.png" alt="logo" className="logo" />
            <form className="search">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search Hotels" />
                <button className="search__button">
                    <svg className="search__icon">
                        <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
                    </svg>
                </button>
            </form>
            <NavIcons />
        </header>
    )
}

export default TopHeader
