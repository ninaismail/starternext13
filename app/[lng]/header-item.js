'use client';

import Link from "next/link";
function NavItem({ text, link, active }) {
  return (
    <Link href={link || '/'}>
      <div 
        className={`lg:text-xl xlg:text-l text-md nav__link ${
          active ? "active" : ""
        }`}
      >
        {text}
      </div>
    </Link>
  );
};

export default NavItem;