import { Add } from '@material-ui/icons';
import CreatePostForm from 'Components/Post/CreatePostForm';
import Post from 'Components/Post/Post';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getPostsAction } from 'Store/actions/post.action';
import './Style/Post.scss';

const Posts = ({ posts, getPostsAction }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPostsAction();
  }, []);

  return (
    <section className="post-section">
      <div className="body">
        <div className="filter-wrap">
          <input type="text" className="filter-post" placeholder="Search by tags..." />
          <Link className="text-dark" to={{ pathname: `/posts/create-post` }}>
            <Add /> Create New Post
          </Link>
        </div>
        <div className="post-container">
          {posts.map(post => (
            <Post key={post._id} {...post} />
          ))}
        </div>
      </div>

      <Switch>
        <Route path="/posts/create-post" component={CreatePostForm} />
      </Switch>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.PostsReducer.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPostsAction }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
