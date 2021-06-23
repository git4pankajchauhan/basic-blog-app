import { Add } from '@material-ui/icons'
import CreatePostForm from 'Components/Post/CreatePostForm'
import EditPostForm from 'Components/Post/EditPostForm '
import Post from 'Components/Post/Post'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getPostActionByTag, getPostsAction } from 'Store/actions/post.action'
import './Post.style.scss'

const Posts = ({ posts, getPostsAction, getPostActionByTag, ...props }) => {
  const [search, setSearch] = useState('')

  const onSearch = e => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search) {
      getPostActionByTag(search)
    } else {
      getPostsAction()
    }
  }, [search])

  return (
    <section className='post-section'>
      <div className='body'>
        <div className='filter-wrap'>
          <input type='text' className='filter-post' placeholder='Search by tags...' onChange={onSearch} value={search} />
          <Link className='add-post-btn' to={{ pathname: `/posts/create-post` }}>
            <Add /> Create New Post
          </Link>
        </div>
        <div className='post-container'>
          {posts.map(post => (
            <Post key={post._id} {...post} history={props.history} />
          ))}
        </div>
      </div>
      <Switch>
        <Route path='/posts/create-post' exact component={CreatePostForm} />
        {posts.length && <Route path='/posts/edit/:id' exact component={EditPostForm} />}
      </Switch>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPostsAction, getPostActionByTag }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)
