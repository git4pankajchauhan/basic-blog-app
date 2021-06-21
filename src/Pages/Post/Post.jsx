import React, { useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import './Style/Post.scss';

const SinglePost = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  return (
    <section className="spost-section">
      <div className="post-box">
        <div className="post-info">
          <span className="tags">{posts.tags}</span>
          <h2 className="title">{posts.title}</h2>
          <p className="sub-title">{posts.sub_title}</p>
          <p className="description">{posts.content}</p>
        </div>
      </div>
    </section>
  );
};

export default withRouter(SinglePost);
