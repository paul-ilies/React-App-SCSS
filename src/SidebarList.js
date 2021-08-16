import React from 'react'

const SidebarList = () => {
    const listItems = [
        {
            id: 1,
            icon: "img/sprite.svg#icon-home",
            text: "Hotel"
        },
        {
            id: 2,
            icon: "img/sprite.svg#icon-aircraft-take-off",
            text: "Flight"
        },
        {
            id: 3,
            icon: "img/sprite.svg#icon-key",
            text: "Car rental"
        },
        {
            id: 4,
            icon: "img/sprite.svg#icon-map",
            text: "Tours"
        },
    ]

    const onSidebarRender = () => {

        return (
            listItems.map(el => {
                const { id, icon, text } = el;

                return (
                    <li className={id === 1 ? ` side-nav__item side-nav__item--active` : "side-nav__item"} key={id}>
                        <a href="/" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use xlinkHref={icon}></use>
                            </svg>
                            <span>{text}</span>
                        </a>
                    </li>
                )
            })
        )
    }

    return (
        <>
            {onSidebarRender()}
        </>
    )

}

export default SidebarList
