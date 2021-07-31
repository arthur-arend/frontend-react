import React from 'react';

import './styles.scss';

interface IPost {
  id: number,
  user_id: number,
  title: string,
  body: string
}

interface IProps {
  post: IPost,
}

const Card2: React.FC<IProps> = (props) => {

  const showCardID = () => {
    console.log('ID :', props.post.id)
  }
  return (
    <article className="article__card" onClick={() => showCardID()}>
      <div className="title__content">
        <p>{props.post.title}</p>
      </div>
      <div className="article__body">
        <p>{props.post.body}</p>
      </div>
    </article>
  );
}

export default Card2;