import React from 'react'

const DetailsDescription = () => {

    const someText = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit.Animi nisi dignissimos debitis ratione sapiente saepe.Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.",
        "Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam."]

    const itemDescription = [
        {
            id: 1,
            description: "Close to the beach",

        },
        {
            id: 2,
            description: "Breakfast included"
        },
        {
            id: 3,
            description: "Free airport shuttle"
        },
        {
            id: 4,
            description: "Free WiFi"
        },
        {
            id: 5,
            description: "Pets allowed"
        },
        {
            id: 6,
            description: "We speack all languages"
        },
        {
            id: 7,
            description: "Perfect for families"
        }
    ]
    const imgFriends = [
        {
            id: 1,
            img: "img/user-3.jpg",
            description: "Friend 1"
        },
        {
            id: 2,
            img: "img/user-4.jpg",
            description: "Friend 2"
        },
        {
            id: 3,
            img: "img/user-5.jpg",
            description: "Friend 3"
        },
        {
            id: 4,
            img: "img/user-6.jpg",
            description: "Friend 4"
        },
    ]
    const onTextreturn = () => {
        return someText.map((el, index) => {
            return (
                <p className="paragraph" key={index}>{el}</p>
            )
        })
    }

    const onItemDescription = () => {
        return itemDescription.map(el => {
            const { id, description } = el;

            return (
                <li className="list__item" key={id}>
                    <svg className="list__item-icon">
                        <use xlinkHref="img/sprite.svg#icon-chevron-thin-right"></use>
                    </svg>
                    {description}</li>
            )
        })
    }

    const onFriendsReturn = () => {
        return imgFriends.map(el => {
            const { id, img, description } = el;
            return (
                <img src={img} alt={description} key={id} className="recommend__photo" />
            )
        })
    }

    return (
        < div className="description" >
            {onTextreturn()}
            <ul className="list">
                {onItemDescription()}
            </ul>
            <div className="recommend">
                <p className="recommend__count">Paul and 3 other friends recommend this hotel</p>
                <div className="recommend__friends">
                    {onFriendsReturn()}
                </div>
            </div>

        </div >
    )
}

export default DetailsDescription
