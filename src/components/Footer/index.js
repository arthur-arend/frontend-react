import React from 'react';
import Pagination from "react-js-pagination";

// import { Container } from './styles';

export default function Footer(props) {
  const { currentPage } = props; 
  const { totalPosts } = props;
  
  return (
    <footer className="footer-nav">
        <p>Exibindo {totalPosts} postagens!</p>
        <Pagination 
          activePage={currentPage}
          totalItemsCount={props.totalItemsCount}
          pageRangeDisplayed={4}
          hideFirstLastPages
          prevPageText=''
          nextPageText=''
          onChange={props.changePage}        
        />
      </footer>
  );
}
