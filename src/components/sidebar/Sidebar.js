import React from 'react';
import SidebarList from '../../SidebarList';
import "./Sidebar.scss"

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="side-nav">
                <SidebarList />
            </ul>
        </nav>
    )
}

export default Sidebar
