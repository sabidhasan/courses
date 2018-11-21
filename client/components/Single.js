import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends React.Component {
  render() {
    // Index of post
    const { postId } = this.props.params;

    const i = this.props.posts.findIndex(post => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className='single-photo'>
        <Photo index={i} src={post.display_src} caption={post.caption}
          link={post.code} likes={post.likes} {...this.props}
        />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
}

export default Single
