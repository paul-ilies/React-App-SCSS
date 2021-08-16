import React from 'react'

const Overview = () => {

    const iconStar = () => {
        let stars = []
        for (let i = 0; i < 5; i++) {
            stars.push(i)
        }
        return stars.map(el => {
            return (
                <svg className="overview__icon-star" key={el}>
                    <use xlinkHref="img/sprite.svg#icon-star"></use>
                </svg>
            )
        })
    }



    return (
        <div className="overview">
            <h1 className="overview__heading">Hotel Marriot</h1>
            <div className="overview__stars">
                {iconStar()}
            </div>
            <div className="overview__location">
                <svg className="overview__icon-location" >
                    <use xlinkHref="img/sprite.svg#icon-location-pin"></use>
                </svg>
                <button className="btn-inline">Albufeira,Portugal</button>
            </div>
            <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">430 votes</div>
            </div>
        </div>
    )
}

export default Overview
