import React, { useState } from 'react'

import { ReactComponent as UsersIcon } from './icons/users.svg'
import { ReactComponent as HomeIcon } from './icons/home.svg'
import { ReactComponent as MarketIcon } from './icons/market.svg'
import { ReactComponent as GroupsIcon } from './icons/groups.svg'
import { ReactComponent as WatchIcon } from './icons/watch.svg'

import './App.css';
import './Reset.css';

const Header = () => {
  return (
    <a href="/"><h1>F</h1></a>
  )
}

const Footer = () => {
  return (
    <p>&#169; Copyright 2021 | AlmostFacebook</p>
  )
}

const Sidebar = () => {

  const [active, setActive] = useState(0);

  const handleClick = (item_index) => {
    setActive(item_index);
  }

  const SidebarItem = ({ index, text, icon }) => {
    return <li>
      <span className={"sidebar_item" + (index === active ? "" : " inactive")}
      onClick={() => handleClick(index)}
      >
        <span className="icon">{icon}</span>
        <span>{text}</span>
      </span>
    </li>
  }

  return (
    <ul>
      <span className="active_tab" style={{ top: `calc(${active} * 48px)` }}></span>
      <SidebarItem key={0} index={0} text={"Home"} icon={<HomeIcon />} />
      <SidebarItem key={1} index={1} text={"Friends"} icon={<UsersIcon />} />
      <SidebarItem key={2} index={2} text={"Marketplace"} icon={<MarketIcon />} />
      <SidebarItem key={3} index={3} text={"Watch"} icon={<WatchIcon />} />
      <SidebarItem key={4} index={4} text={"Groups"} icon={<GroupsIcon />} />
    </ul>
  );
}

function Main() {

}

function App() {
  return (
    <div className="container">
      <div className="header">{Header()}</div>
      <div className="sidebar">{Sidebar()}</div>
      <div className="main">{Main()}</div>
      <div className="footer">{Footer()}</div>
    </div>
  );
}

export default App;
