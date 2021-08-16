import React from 'react'

const DetailReviews = () => {
    const review = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
            img: "img/user-1.jpg",
            alt: "User 1",
            userName: "Nick Smith",
            date: "23 Feb 2021",
            rating: 7.8
        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
            img: "img/user-2.jpg",
            alt: "User 2",
            userName: "Nick Smith",
            date: "15 Sep 2021",
            rating: 9
        },
    ]

    const onReviewPost = () => {
        return review.map(el => {
            const { id, description, img, alt, userName, date, rating } = el;
            return (
                <figure className="review" key={id}>
                    <blockquote className="review__text">{description}</blockquote>
                    <figcaption className="review__user">
                        <img src={img} alt={alt} className="review__photo" />
                        <div className="review__user-box">
                            <p className="review__user-name">{userName}</p>
                            <p className="review__user-date">{date}</p>
                        </div>
                        <div className="review__rating">{rating}</div>
                    </figcaption>
                </figure>
            )
        })
    }

    return (
        <div className="user-reviews">
            {onReviewPost()}
            <button className="btn-inline">Show All <span>&rarr;</span></button>
        </div>
    )
}

export default DetailReviews
