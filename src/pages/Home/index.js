import React, { useEffect, useState } from 'react';
import './style.scss'

import Header from '../../components/Header'
import Card from '../../components/Card'
import axios from 'axios';

const token = 'uliZcJk7OLoizDU-8Cps62Z9mGdqSUkXRMSb';
export default function Home() {
  
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  
  useEffect(() => {
    async function loadPosts() {
      setLoading(true)
      const res = await axios.get(`https://gorest.co.in/public-api/posts?_format=json&access-token=${token}&page=${currentPage}`)


      setPosts(res.data.result)
      setLoading(false)
      setCurrentPage(res.data._meta.currentPage)
      }
      
      loadPosts()
    }, [currentPage])
    
    
    function changePage(pagination){
       if(pagination > currentPage){
        setCurrentPage(pagination)
       }

       if(pagination < currentPage && pagination > 0){
        setCurrentPage(pagination)
       }

    }

  return (
    <>
      <Header />
      <div className='home-content'>
        <Card posts={posts} currentPage={currentPage} loading={loading} changePage={changePage}/>
      </div>
    </>
  );
}
