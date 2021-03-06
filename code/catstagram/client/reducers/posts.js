function posts(state = [], action) {
  // Return new state based on action
  switch (action.type) {
    case 'INCREMENT_LIKES':
      // return updated state
      const i = action.index
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ]
    default:
      return state;
  }
}

export default posts
