"use client";

import axios from 'axios';
import { useEffect, useState } from "react";
import Head from "next/head";
import Pagination from "./Pagination";
import { paginate } from "./paginate";
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'


export default function Page() {
  // To hold the actual data
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 10;
 
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(() => {
                alert('There was an error while retrieving the data')
            })
     }, [])   
    console.log(data)
    
    const onPageChange = (page) =>{
      setCurrentPage(page);
      console.log(page)
    };
    const onPrev = () => {
      if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }    
    const onNext = () => {
      if(currentPage !== pageSize) setCurrentPage(currentPage + 1)
    }

    const paginatedPosts = paginate(data, currentPage, pageSize);
    console.log(paginatedPosts) 
  return (
    <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <p>
      <strong>NextJS x Pagination</strong>
    </p>
    <p>
      Page: <span style={{ color: "red" }}>{currentPage}</span>
    </p>

  {paginatedPosts.map((item) => {
    return <p key={item.id}>{item.title}</p>;
  })} 
  <nav aria-label="Page navigation" className="inline-flex flex-wrap">
    <button 
      className="w-1/10 px-3 py-2 leading-tight text-gray-500 leading-tight bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
      onClick={onPrev}>
      <BsChevronLeft className="w-6 h-6"/>
    </button>  
    <Pagination
      items={data.length} // 100
      currentPage={currentPage} // 1
      pageSize={pageSize} // 10
      onPageChange={onPageChange}
    />
    <button 
      className="w-1/10 px-3 py-2 leading-tight text-gray-500 leading-tight bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
      onClick={onNext}>
        <BsChevronRight className="w-6 h-6"/>
    </button>       
  </nav>
</>  
  );
}