import { Add } from '@material-ui/icons';
import { color } from 'Assets/Style/themes';
import CustomButton from 'Components/Button/CustomButton';
import CustomDrawer from 'Components/Drawer/CustomDrawer';
import { CustomInput, CustomTextArea } from 'Components/Input/CustomInput';
import Post from 'Components/Post/Post';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Style/Post.scss';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [addPost, setAddPost] = useState({
    title: '',
    sub_title: '',
    tags: '',
    content: '',
  });

  const onChange = e => {
    const { name, value } = e.target;
    setAddPost(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onCreatePost = async e => {
    e.preventDefault();
  };

  return (
    <section className="post-section">
      <div className="body">
        <div className="filter-wrap">
          <input type="text" className="filter-post" onChange={e => setSearch(e.target.value)} value={search} placeholder="Search by tags..." />

          <CustomButton onClick={e => setIsDrawerOpen(!isDrawerOpen)}>
            <Add />
            Create New Post
          </CustomButton>
        </div>
        <div className="post-container">{!posts.length ? <h2>No Post Found</h2> : posts.map(post => <Post key={post._id} post={post} />)}</div>
      </div>

      <CustomDrawer headTitle="Add New Post" isOpen={isDrawerOpen} closeHandle={e => setIsDrawerOpen(!isDrawerOpen)}>
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

export default withRouter(Posts);
