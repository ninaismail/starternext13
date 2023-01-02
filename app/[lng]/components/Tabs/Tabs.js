"use client";

import { useState } from "react";

export default function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  const [isActive, setIsActive] = useState(1);

  return (
<div className="my-10 w-full px-10 py-12">
  <ul className="flex relative bg-blue-gray-50 bg-opacity-60 rounded-lg p-1" 
  id="tabs-tab" role="tablist">
    <li role="presentation" className="grid place-items-center text-center w-full h-full 
      relative 
      bg-transparent 
      p-1 
      text-blue-gray-900 
      antialiased 
      font-sans 
      text-base 
      font-normal 
      leading-relaxed select-none cursor-pointer"  
      style={{
          opacity: isActive == 1 ? '1' : '0.25',
        }}
        id="tabs-message-tab" data-bs-toggle="pill" data-bs-target="#tabs-message" 
        aria-controls="tabs-message"
        aria-selected="true"
        onClick={() => {setOpenTab(1); setIsActive(1)}}>
        Message
    </li>
    <li role="presentation" className="grid place-items-center text-center w-full h-full 
      relative 
      bg-transparent 
      p-1 
      text-blue-gray-900 
      antialiased 
      font-sans 
      text-base 
      font-normal 
      leading-relaxed select-none cursor-pointer"  
      style={{
          opacity: isActive == 2 ? '1' : '0.25',
        }}
      id="tabs-vision-tab" data-bs-toggle="pill" data-bs-target="#tabs-vision"
        aria-controls="tabs-vision" aria-selected="false"
        onClick={() => {setOpenTab(2); setIsActive(2)}}>
        Vision
    </li>  
    <li role="presentation" className="grid place-items-center text-center w-full h-full 
      relative 
      bg-transparent 
      p-1 
      text-blue-gray-900 
      antialiased 
      font-sans 
      text-base 
      font-normal 
      leading-relaxed select-none cursor-pointer"  style={{
          opacity: isActive == 3 ? '1' : '0.25',
        }}
      id="tabs-goals-tab" data-bs-toggle="pill" data-bs-target="#tabs-goals" role="tab"
        aria-controls="tabs-goals" aria-selected="false"
        onClick={() => {setOpenTab(3); setIsActive(3)}}>
        Goals 
    </li>
    <li role="presentation"className="grid place-items-center text-center w-full h-full 
      relative 
      bg-transparent 
      p-1 
      text-blue-gray-900 
      antialiased 
      font-sans 
      text-base 
      font-normal 
      leading-relaxed select-none cursor-pointer"  
       style={{
        opacity: isActive == 4 ? '1' : '0.25',
      }}
      id="tabs-scope-tab" data-bs-toggle="pill" data-bs-target="#tabs-scope" role="tab"
        aria-controls="tabs-scope" aria-selected="false"
        onClick={() => {setOpenTab(4); setIsActive(4)}}>
        Scope
    </li>
  </ul>
  <div className="block w-full relative bg-transparent overflow-hidden" id="tabs-tabContent">
    <div className={`w-full h-max text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed
   ${openTab === 1 ? "block" : "hidden"}`}  id="tabs-message" role="tabpanel" aria-labelledby="tabs-message-tab">
        Lorem ipsum dolor sit amet
    </div>
    <div className={`w-full h-max text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed
   ${openTab === 2 ? "block" : "hidden"}`} id="tabs-vision" role="tabpanel" aria-labelledby="tabs-vision-tab">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip
    </div>
    <div className={`w-full h-max text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed
   ${openTab === 3 ? "block" : "hidden"}`}  id="tabs-goals" role="tabpanel" aria-labelledby="tabs-goals-tab">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>  
    <div className={`w-full h-max text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed
   ${openTab === 4 ? "block" : "hidden"}`}  id="tabs-scope" role="tabpanel" aria-labelledby="tabs-scope-tab">
    Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident,   
    </div>
  </div>
</div>
  );
}