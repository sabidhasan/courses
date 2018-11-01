import React from 'react';

class Comments extends React.Component {
  comment(commentData, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{commentData.user}</strong>
          {commentData.text}
          <button className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.comment)}
        <form ref='commentForm' className='comment-form'>
          <input type='text' ref='author' placeholder='Author' />
          <input type='text' ref='comment' placeholder='Comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Comments
