import { color } from 'Assets/Style/themes';
import CustomButton from 'Components/Button/CustomButton';
import CustomDrawer from 'Components/Drawer/CustomDrawer';
import { CustomInput, CustomTextArea } from 'Components/Input/CustomInput';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { openDrawer } from 'Store/actions/common.action';
import { updatePostAction } from 'Store/actions/post.action';
import { getPost } from 'Store/selectors/Post.selectors';

const EditPostForm = props => {
  const [post, setPost] = useState({ ...props.post });

  const dispatch = useDispatch();

  const onAddPostChange = e => {
    const { name, value } = e.target;
    setPost(lastInput => ({
      ...lastInput,
      [name]: value,
    }));
  };

  const onCreatePost = e => {
    e.preventDefault();
    dispatch(updatePostAction(post, props.history));
  };

  useEffect(() => {
    if (props.post) {
      dispatch(openDrawer());
      setPost(props.post);
    } else {
      props.history.push('/posts');
    }
  }, [props.post, props.match.params]);

  return (
    <CustomDrawer headTitle="Edit Post">
      <form onSubmit={onCreatePost}>
        <CustomInput type="text" name="title" value={post.title} onChange={onAddPostChange} placeholder="Enter Title" />
        <CustomInput type="text" name="subTitle" value={post.subTitle} onChange={onAddPostChange} placeholder="Enter Sub Title" />
        <CustomInput type="text" name="tags" value={post.tags} onChange={onAddPostChange} placeholder="Enter Tags" />
        <CustomTextArea type="text" name="description" value={post.description} onChange={onAddPostChange} placeholder="Enter Description" />
        <CustomButton color={color.success}>Submit</CustomButton>
      </form>
    </CustomDrawer>
  );
};

const mapStateToProps = state => {
  const post = getPost();
  return (state, props) => {
    return {
      post: post(state, props.match.params.id),
    };
  };
};

export default connect(mapStateToProps)(EditPostForm);
