import React, { useEffect, useState } from 'react';
import './style.scss'

import Header from '../../components/Header'
import Card from '../../components/Card'
import axios from 'axios';

// import { Container } from './styles';
const token = 'uliZcJk7OLoizDU-8Cps62Z9mGdqSUkXRMSb';
let page = 1;

export default function Home() {

  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(20)

  useEffect(() => {
    async function loadPosts() {
      const res = await axios.get(`https://gorest.co.in/public-api/posts?_format=json&access-token=${token}&page=${page}`)

      setPosts(res.data.result)
      setCurrentPage(res.data._meta.currentPage)
      }

      loadPosts()
  }, [])

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  console.log("10 posts", currentPosts)

  return (
    <>
      <Header />
      <div className='home-content'>
        <Card posts={currentPosts} />
        {/* <h1>Últimas Postagens</h1>
        {list.map(item => (
          <Card key={item.id} item={currentPosts} />
        ))} */}
      </div>
    </>
  );
}
