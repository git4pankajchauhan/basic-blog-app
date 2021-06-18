import { Delete } from '@material-ui/icons';
import Axios from 'axios';
import CustomButton from 'Components/Button/CustomButton';
import CustomDrawer from 'Components/Drawer/CustomDrawer';
import { CustomInput, CustomTextArea } from 'Components/Input/CustomInput';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { color } from 'Assets/Style/themes';
import './Post.scss';

const Post = ({ id, tags, title, sub_title, content, getPost }) => {
  const [message, setMessage] = useState('');
  const [editPost, setEditPost] = useState({
    id: id,
    title: title,
    sub_title: sub_title,
    tags: tags,
    content: content,
  });

  const editInputChange = e => {
    const { name, value } = e.target;
    setEditPost(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const editformSubmit = async e => {
    e.preventDefault();
    const result = await Axios.patch(`http://localhost:5000/post/${editPost.id}`, editPost);
    if (result.data.status) {
      getPost('');
      setMessage(result.data.message);
      setTimeout(() => {
        setMessage(false);
      }, 3000);
    } else {
      setMessage(result.data.message);
    }
  };
  const deletePost = async id => {
    const result = await Axios.delete(`http://localhost:5000/post/${id}`);
    if (result.data.status) {
      getPost('');
    }
  };
  return (
    <div className="post-box">
      <div className="post-info">
        <span className="tags">{tags}</span>
        <h2 className="title">{title}</h2>
        <p className="sub-title">{sub_title}</p>
      </div>
      <div className="btns-wrap">
        <NavLink className="btn-link" to={`/post/${id}`}>
          <CustomButton color={color.default}>View Post</CustomButton>
        </NavLink>
        <CustomDrawer btnText="Edit Post" color={color.success} label="Edit Post">
          <form action="" method="post" onSubmit={editformSubmit}>
            <CustomInput type="text" name="title" value={editPost.title} onChange={editInputChange} placeholder="Enter Title" />
            <CustomInput type="text" name="sub_title" value={editPost.sub_title} onChange={editInputChange} placeholder="Enter Sub Title" />
            <CustomInput type="text" name="tags" value={editPost.tags} onChange={editInputChange} placeholder="Enter Tags" />
            <CustomTextArea type="text" name="content" value={editPost.content} onChange={editInputChange} placeholder="Enter Content" />
            {message && <div className="message">{message}</div>}
            <CustomButton color={color.success}>Update</CustomButton>
          </form>
        </CustomDrawer>
        <CustomButton color={color.danger} onClick={() => deletePost(editPost.id)}>
          <Delete />
        </CustomButton>
      </div>
    </div>
  );
};

export default Post;
