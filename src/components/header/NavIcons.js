import React from 'react';
import "./Navicons.scss"

const NavIcons = () => {
    const user = [
        {
            id: 1,
            icon: "/img/sprite.svg#icon-bookmark",
            userNotification: 7
        },
        {
            id: 2,
            icon: "/img/sprite.svg#icon-chat",
            userNotification: 13
        }
    ]
    const renderNotifications = () => {
        return (
            user.map(el => {
                const { icon, userNotification } = el;
                return (
                    <div className="user-nav__icon-box" key={el.id}>
                        <svg className="user-nav__icon">
                            <use xlinkHref={icon} />
                        </svg>
                        <span className="user-nav__notification">
                            {userNotification}
                        </span>
                    </div>
                )
            })
        )
    }

    return (
        <div className="user-nav">
            {renderNotifications()}
            <div className="user-nav__user">
                <img src="/img/user.jpg" alt="User" className="user-nav__user-photo" />
                <span className="user-nav__user-name">Paul</span>
            </div>
        </div>
    )
}

export default NavIcons
