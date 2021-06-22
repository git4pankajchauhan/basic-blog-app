import { Delete } from '@material-ui/icons';
import { color } from 'Assets/Style/themes';
import CustomButton from 'Components/Button/CustomButton';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deletePostAction } from 'Store/actions/post.action';
import './Post.scss';

const Post = props => {
  const dispatch = useDispatch();

  return (
    <div className="post-box">
      <div className="post-info">
        <span className="tags">{props.tags}</span>
        <h2 className="title">{props.title}</h2>
        <p className="sub-title">{props.subTitle}</p>
        <p className="sub-title">{props.description}</p>
      </div>
      <div className="btns-wrap">
        <NavLink className="btn-link" to={{ pathname: `/post/${props._id}` }}>
          <CustomButton color={color.default}>View Post</CustomButton>
        </NavLink>
        <NavLink className="btn-link" to={{ pathname: `/posts/edit/${props._id}` }}>
          <CustomButton color={color.success}>Edit Post</CustomButton>
        </NavLink>
        <CustomButton color={color.danger} onClick={() => dispatch(deletePostAction(props._id, props.history))}>
          <Delete />
        </CustomButton>
      </div>
    </div>
  );
};

export default Post;
