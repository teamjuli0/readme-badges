export const updateChoices = (array) => {
  return (dispatch) => {
    dispatch({
      type: 'updateChoices',
      payload: array,
    })
  }
}

export const updateCurrentChoice = (object) => {
  return (dispatch) => {
    dispatch({
      type: 'updateCurrentChoice',
      payload: object,
    })
  }
}
