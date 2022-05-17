import React from "react";
import { slide as Menu } from 'react-burger-menu';
import './sidebar.styles.scss';

const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/balboapark">
        Balboa Park / Hillcrest
      </a>
      <a className="menu-item" href="/coronado">
        Coronado
      </a>
      <a className="menu-item" href="/downtown">
        Downtown
      </a>
      <a className="menu-item" href="/kearneymesa">
        Kearney Mesa / Miramar
      </a>
      <a className="menu-item" href="/lajolla">
        La Jolla / Torrey Pines
      </a>
      <a className="menu-item" href="/missionbeach">
        Mission Beach / Pacific Beach
      </a>
      <a className="menu-item" href="/oceanbeach">
        Ocean Beach / Point Loma
      </a>
      <a className="menu-item" href="/oldtown">
        Old Town
      </a>
    </Menu>
  );
};

export default Sidebar;