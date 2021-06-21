import { Delete } from '@material-ui/icons';
import { color } from 'Assets/Style/themes';
import CustomButton from 'Components/Button/CustomButton';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Post.scss';

const Post = ({ id, tags, title, sub_title, content }) => {
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
        <CustomButton color={color.success}>Edit Post</CustomButton>
        <CustomButton color={color.danger}>
          <Delete />
        </CustomButton>
      </div>
    </div>
  );
};

export default Post;
