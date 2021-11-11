import ReadmeBadges from '../../themes'

const { 'menu-categories': Categories, technologies: Technologies } =
  ReadmeBadges.choices

const choices = [
  ...Categories.map((item) => ({ name: item, category: 'menu-categories' })),
  ...Technologies.map((item) => ({
    name: item,
    category: 'technologies',
  })),
]

const initialState = {
  choices: choices,
  filteredChoices: choices,
  currentChoice: {
    name: 'javascript',
    category: 'technologies',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateChoices':
      const updatedChoices = { ...state, filteredChoices: action.payload }
      return updatedChoices
    case 'updateCurrentChoice': {
      const updatedChoice = { ...state, currentChoice: action.payload }
      return updatedChoice
    }
    default:
      return state
  }
}

export default reducer
