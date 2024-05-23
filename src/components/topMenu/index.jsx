import React from 'react'
import { setActive, setSubsActive, setActiveIndex } from './topMenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TopMenu = ({ items }) => {

  
  const state = useSelector((state) => state.topMenu);
  const dispatch = useDispatch();
  
  const handleSubState = (index,value) => {
      dispatch(setSubsActive({
          index,
          value
      }));
  }
  const handleState = () => {
      dispatch(setActive(!state.isActive));
  }
  const handleActiveIndex = (index) => {
    dispatch(setActiveIndex(index));
  }
  const menuItems = [];

  for (const i in items) {
    if ("sub" in items[i]) {
      const subItems = [];
      for (const i2 in items[i].sub) {
        const subItem = (
          <li key={`i2-${i2}`}>
            <Link onClick={()=>{
              handleState();
              handleActiveIndex(i);
            }} to={items[i].sub[i2].link}>{items[i].sub[i2].title}</Link>
            {/* <Link onClick={handleState} to={items[i].sub[i2].link}>{items[i].sub[i2].title}</Link> */}
          </li>
          // <div key={`i2-${i2}`} className="menu-sub-item">
          //   <Link onClick={handleState} to={items[i].sub[i2].link}>{items[i].sub[i2].title}</Link>
          // </div>
        );
        subItems.push(subItem);
      }
      // items.push(<div key={`i-${i}`} className="menu-item has-sub" onClick={() => { handleSubState(i, !state.isSubsActive[i]) }}>{items[i].title} <i className="icofont-caret-down"></i></div>);
      // items.push(<div key={`j-${i}`} className={`menu-sub-items${(state.isSubsActive[i]) ? " active" : ""}`}>{subItems}</div>);
      menuItems.push(
        <li key={`i-${i}`} onClick={()=>{handleSubState(i,!state.isSubsActive[i])}} className={`has-sub${(state.isSubsActive[i]) ? " active" : ""}`}>
          <a className={(state.activeIndex == i)? "active" : ""} href="#">{items[i].title}</a>
          <ul className="sub-menu">
            {subItems}
          </ul>
        </li>
      )
    } else {
      //items.push(<div key={`i-${i}`} className="menu-item"><Link onClick={handleState} to={items[i].link}>{items[i].title}</Link></div>);
      menuItems.push(
        <li><Link onClick={()=>{
          handleState();
          handleActiveIndex(i);
        }} className={(state.activeIndex == i)? "active" : ""} onClick={handleState} to={items[i].link}>{items[i].title}</Link></li>
      )
    }
  }
  return (
    <>
      <ul className={`nav${(state.isActive) ? " active" : ""}`}>
        {menuItems}
        <li className="custom-top-button"><a href="contact-us.html">Sizi Arayalım</a></li>
        {/* <li className="has-sub">
          <a href="#">Kurumsal</a>
          <ul className="sub-menu">
            <li><a href="about-us.html">Hakkımızda</a></li>
            <li><a href="our-services.html">İnsan Kaynakları</a></li>
            <li><a href="contact-us.html">KVKK Hakkında</a></li>
          </ul>
        </li>
        <li className="has-sub">
          <a href="#">Hizmetler</a>
          <ul className="sub-menu">
            <li><a href="about-us.html">Analitik & Veri Mühendisliği</a></li>
            <li><a href="our-services.html">Bankacılık & Finans</a></li>
            <li><a href="contact-us.html">IK Hizmetleri</a></li>
          </ul>
        </li>
        <li className="scroll-to-section"><a href="#services">Kariyer</a></li>
        <li className="scroll-to-section"><a href="#services">Destek</a></li> */}
      </ul>
      <a onClick={handleState} className={`menu-trigger${(state.isActive) ? " active" : ""}`}>
        <span>Menu</span>
      </a></>
  )
}

export default TopMenu;