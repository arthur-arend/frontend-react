import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import './styles.scss';
import Header from '../../components/Header';
import Card2 from '../../components/Card2';
import api from '../../services/api';


interface IPost {
    id: number,
    user_id: number,
    title: string,
    body: string
}

const Home: React.FC = () => {
    const [ posts, setPosts ] = useState<IPost[]>();
    const [ currentPage, setCurrentPage ] = useState<number>(1);
    const [ isLoading, setIsloading ] = useState(false);

    useEffect(() => {
        setIsloading(true);
        
        api.get(`&page=${currentPage}`).then((res) => {
            setPosts(res.data.data);
            setIsloading(false);
        });
    }, [currentPage])


    const changePage = (pagination: number) => {
        if (pagination > currentPage) {
            setCurrentPage(pagination);
        } else if (pagination < currentPage && pagination > 0) {
            setCurrentPage(pagination);
          }
    }

  return (
      <main className="main__home">
          <Header />
          <section className="section__home">
              <h1>Últimas postagens</h1>
              <div className="table__home">
                  <div className="table__titles">
                    <p className="table__titles--title">Título</p>
                    <p className="table__titles--content">Conteúdo</p>
                  </div>
                {!isLoading && posts ? 
                    posts.map((post) => {
                    return <Card2 key={post.id} post={post}/>
                    })
                 : <h1>Loading...</h1>}
                 <footer className="footer__nav">
                <p>Exibindo {posts ? posts.length : 0} postagens</p>
                <div className="footer__markers"> 
                    <MdKeyboardArrowLeft onClick={() => changePage(currentPage -1)} className={currentPage === 1 ? 'disabled' : ''}/>
                    <p>{currentPage -1}</p>
                    <p className="footer__markers--selected">{currentPage}</p>
                    <p>{currentPage +1}</p>
                    <MdKeyboardArrowRight onClick={() => changePage(currentPage +1)} />
                </div>
            </footer>
              </div>

            
          </section>
      </main>
  );
}

export default Home;