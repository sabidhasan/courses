import React from 'react'
import Photo from './Photo'

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, index) => (
          <Photo
            {...this.props}
            key={index}
            index={index}
            link={post.code}
            src={post.display_src}
            caption={post.caption}
            likes={post.likes}
            comments={this.props.comments[post.code]}
          />
        ))}
      </div>
    )
  }
}

export default PhotoGrid
