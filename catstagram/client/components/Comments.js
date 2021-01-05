import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.comment = this.comment.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  comment(commentData, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{commentData.user}</strong>
          {commentData.text}
          <button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.comment)}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input required type='text' ref='author' placeholder='Author' />
          <input required type='text' ref='comment' placeholder='Comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Comments
