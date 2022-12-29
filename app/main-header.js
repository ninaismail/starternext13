'use client';

import Link from "next/link";
import Image from "next/image";

import {useState} from "react";
import NavItem from "./header-item";

const MENU_LIST = [
  { text:  "Home", href: "/" }, 
  { text:  "About Us", href: "http://localhost:3000/#about" },
  { text: "Our Goals", href: "http://localhost:3000/#goals" },
  { text: "Contact Us", href: "http://localhost:3000/#contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  
  const [selectAria, setSelectAria] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick= () => {
    setNavActive(!navActive)
    setSelectAria(!selectAria)
    setIsOpen(!isOpen)
  };

  return (
<header>
{isOpen && <div className="overlay"></div>}
  <nav className="bg-blue-200 p-[16px] flex justify-between items-center">
    <Link href={"/"} className="logo">
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