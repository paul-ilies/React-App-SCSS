import React from 'react'

const Gallery = () => {

    const galleryPhoto = [
        {
            id: 1,
            img: "img/hotel-1.jpg",
            description: "Hotel 1"
        },
        {
            id: 2,
            img: "img/hotel-2.jpg",
            description: "Hotel 2"
        },
        {
            id: 3,
            img: "img/hotel-3.jpg",
            description: "Hotel 3"
        },
    ]

    const displayGallery = () => {
        return galleryPhoto.map(el => {
            const { id, img, description } = el
            return (
                <figure className="gallery__item" key={id}>
                    <img src={img} alt={description} className="gallery__photo" />
                </figure>
            )
        })
    }
    return (
        <div className="gallery">
            {displayGallery()}
        </div>
    )
}

export default Gallery
