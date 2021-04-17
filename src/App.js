import React, {useState} from 'react'

import {ReactComponent as UsersIcon} from './icons/users.svg'
import {ReactComponent as HomeIcon} from './icons/home.svg'
import {ReactComponent as MarketIcon} from './icons/market.svg'
import {ReactComponent as GroupsIcon} from './icons/groups.svg'
import {ReactComponent as WatchIcon} from './icons/watch.svg'

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
  
  const SidebarItemContents = [
    {icon: <HomeIcon/>,   text: "Home"},
    {icon: <UsersIcon/>,  text: "Friends"},
    {icon: <MarketIcon/>, text: "Marketplace"},
    {icon: <WatchIcon/>,  text: "Watch"},
    {icon: <GroupsIcon/>, text: "Groups"},
  ];
  
  const [activeItems, setActiveItems] = useState([true, false, false, false, false])

  const isActive = (index) => activeItems[index]; 
  const setActiveClass = (isActive) => isActive ? "sidebar_item" : "sidebar_item inactive";

  const handleClick = (sidebar_item_index) => {
    setActive(sidebar_item_index);
    
    const activeItemsCopy = [false, false, false, false, false];
    activeItemsCopy[sidebar_item_index] = true;
    setActiveItems(activeItemsCopy);
  }

  const SidebarItem = ({index, content}) => {
    return <li>
      <span 
        className={setActiveClass(isActive(index))} 
        onClick={() => handleClick(index)}
      >
        <span className="icon">{content.icon}</span>
        <span>{content.text}</span>
      </span>  
    </li>
  }

  return (
    <ul>
      <span className="active_tab" style={{top: `calc(${active} * 48px)`}}></span>
      {SidebarItemContents.map((item, index) => {
        return <SidebarItem key={index} index={index} content={item}></SidebarItem>
      })}
    </ul>
  )
}

function Main(){

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
