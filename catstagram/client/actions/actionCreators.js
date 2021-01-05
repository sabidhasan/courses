// Increment (add a like)
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index,
  }
}

// Add comment
export function addComment(post, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId: post,
    author,
    comment
  }
}

// Remove comment
export function removeComment(post, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId: post,
  }
}
