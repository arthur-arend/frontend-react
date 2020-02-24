import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './style.scss';

// import { Container } from './styles';

export default function Card(props) {
  const { posts } = props
  const { currentPage } = props
  const { loading } = props

  if(loading) {
    return <h2>Loading...</h2>
  }


  function next(){
    props.changePage(currentPage + 1);
  }
  function prev(){
    props.changePage( currentPage - 1);
  }

  return (
    <div className="card-content">
      <h1>Últimas Postagens</h1>
      <ul>
      <nav className="menu-nav">
        <p className="menu-title">Título</p>
        <p className="menu-body">Conteúdo</p>
        <p className="menu-date">Data da Publicação</p>
      </nav>
        {posts.map(post => (
          <li className="list-content" key={post.id} >
            <p className="list-title">{post.title}</p>
            <p className="list-body">{post.body}</p>
            <p className="list-date">24/02/2020</p>
          </li>
        ))}    

        {/* <Footer totalPosts={posts.length} currentPage={currentPage} totalItemsCount={props.totalItemsCount} changePage={changePage}/> */}
      <footer className="footer-nav">
        <p>Exibindo {posts.length} postagens</p>
        <div className="footer-page"> 
          <MdKeyboardArrowLeft onClick={prev} />
            <p>{currentPage -1}</p>
            <p className="footer-select">{currentPage}</p>
            <p>{currentPage +1}</p>
          <MdKeyboardArrowRight onClick={next} />
        </div>
      </footer>
      </ul>
    </div>
  );
}
