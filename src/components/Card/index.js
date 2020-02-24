import React from 'react';
import './style.scss'

// import { Container } from './styles';

export default function Card(props) {
  const { posts } = props;



  return (
    <>
    <nav className="nav-content">
      <p>Título</p>
      <p>Conteudo</p>
    </nav>
    <ul>
      {posts.map(post => (
        <li className="card-content" key={post.id} >
          <p className="card-title">{post.title}</p>
          <p className="card-body">{post.body}</p>
          <p className="card-date">24/02/2020</p>
        </li>
      ))}
        
    </ul>
    </>
  );
}
