import { Add } from '@material-ui/icons';
import { color } from 'Assets/Style/themes';
import CustomButton from 'Components/Button/CustomButton';
import CustomDrawer from 'Components/Drawer/CustomDrawer';
import { CustomInput, CustomTextArea } from 'Components/Input/CustomInput';
import Post from 'Components/Post/Post';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './Style/Post.scss';
import { getPostsAction } from 'Store/actions/post.action';
import { openDrawer } from 'Store/actions/common.action';

const Posts = ({ posts, getPostsAction }) => {
  const dispatch = useDispatch();
  const onCreatePost = e => {};
  const onChange = e => {};

  useEffect(() => {
    getPostsAction();
  }, []);

  console.log(posts);
  return (
    <section className="post-section">
      <div className="body">
        <div className="filter-wrap">
          <input type="text" className="filter-post" placeholder="Search by tags..." />
          <CustomButton onClick={() => dispatch(openDrawer())}>
            <Add />
            Create New Post
          </CustomButton>
        </div>
        <div className="post-container">
          {posts.map(post => (
            <Post key={post._id} {...post} />
          ))}
        </div>
      </div>

      <CustomDrawer headTitle="Add New Post">
        <form onSubmit={onCreatePost}>
          <CustomInput type="text" name="title" onChange={onChange} placeholder="Enter Title" />
          <CustomInput type="text" name="sub_title" onChange={onChange} placeholder="Enter Sub Title" />
          <CustomInput type="text" name="tags" onChange={onChange} placeholder="Enter Tags" />
          <CustomTextArea type="text" name="content" onChange={onChange} placeholder="Enter Content" />
          <CustomButton color={color.success}>Submit</CustomButton>
        </form>
      </CustomDrawer>
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
