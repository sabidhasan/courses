import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
  render() {
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/view/${this.props.link}`}>
            <img
              src={this.props.src}
              alt={this.props.caption}
              className='grid-photo'
            />
          </Link>
          <CSSTransitionGroup
            transitionName='like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={this.props.likes} className='likes-heart'>
              {this.props.likes}
            </span>
          </CSSTransitionGroup>
          <figcaption>
            <p>{this.props.caption}</p>
            <div className='control-buttons'>
              <button onClick={() => this.props.increment(this.props.index)} className='likes'>
                &hearts; {this.props.likes}
              </button>
              <Link className='button' to={`/view/${this.props.link}`}>
                <span className='comment-count'>
                  <span className='speech-bubble'></span>
                  { this.props.comments ? this.props.comments.length : 0 }
                </span>
              </Link>
            </div>
          </figcaption>
        </div>
      </figure>
    )
  }
}

export default Photo
