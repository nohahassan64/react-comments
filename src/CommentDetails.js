import React from 'react'

const CommentDetails = props => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="data">{props.time}</span>
          </div>
          <div className="text">{props.content}</div>
        </div>
      </div>
    )
}

export default CommentDetails
