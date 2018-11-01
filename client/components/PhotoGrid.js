import React from 'react'
import Photo from './Photo'

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((photo, index) => (
          <Photo
            key={index}
            index={index}
            link={photo.code}
            src={photo.display_src}
            caption={photo.caption}
          />
        ))}
      </div>
    )
  }
}

export default PhotoGrid
