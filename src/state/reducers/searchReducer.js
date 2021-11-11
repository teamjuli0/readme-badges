const initialState = {
  'search-string': '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateSearch':
      const updatedSearch = { ...state, persistent: action.payload }
      return updatedSearch

    default:
      return state
  }
}

export default reducer
