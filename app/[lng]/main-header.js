'use client';

import Link from "next/link";
import Image from "next/image";

import {useState} from "react";
import NavItem from "./header-item";

function Navbar({lng}) {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  
  const [selectAria, setSelectAria] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const MENU_LIST = [
    { text:  "Home", link:`/${lng}`},
    { text:  "About Us", link:`/${lng}/about`},
    { text: "Our Goals", href:`/${lng}/goals`},
    { text: "Contact Us", href:`/${lng}/contact`},
  ];
  
  function handleClick() {
    setNavActive(!navActive);
    setSelectAria(!selectAria);
    setIsOpen(!isOpen);
  }

  return (
<header>
{isOpen && <div className="overlay"></div>}
  <nav className="bg-blue-200 p-[16px] flex justify-between items-center">
    <Link href={`/${lng}`} className="logo">
      <Image src="/images/logo.png" width="100" height="50" alt="Company Name" />
    </Link>      
    <div className={`${navActive ? "active" : ""} nav__menu-list `}>
      {MENU_LIST.map((menu, idx) => (
        <div 
          onClick={() => {
            setActiveIdx(idx);
            setNavActive(false);
          }}
          key={menu.text}
        >
          <NavItem active={activeIdx === idx} {...menu} />
        </div>
      ))}
    </div>
    <button type="button" aria-label="Toggle menu" aria-expanded={selectAria}
      className="nav__menu-bar"
      onClick={handleClick}>

      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>  
  </nav>
</header>
  );
};

export default Navbar;