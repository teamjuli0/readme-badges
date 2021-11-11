import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../state'

const Home = () => {
  const stateChoices = useSelector((state) => state.choices)
  const { currentChoice, filteredChoices } = stateChoices

  const dispatch = useDispatch()

  const { updateCurrentChoice } = bindActionCreators(actionCreators, dispatch)

  return (
    <>
      <div
        style={{
          minHeight: '400px',
          backgroundColor: '#434850',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1000px',
        }}
      >
        <div>
          <img
            style={{
              padding: '0 30px',
              width: '100%',
              maxWidth: '550px',
            }}
            alt=''
            src={`https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/${currentChoice.category}/${currentChoice.name}.png?raw=true`}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <button
          style={{
            backgroundColor: '#434850',
            padding: '5px 10px',
            margin: 0,
            border: 0,
            borderRadius: '10px',
            fontWeight: 'bold',
            color: 'white',
          }}
          onClick={() => {
            navigator.clipboard.writeText(
              `## <a href="#readme-badge"><img id="usage" src="https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/${currentChoice.category}/${currentChoice.name}.png?raw=true" style="height: 40px"></a>
              `
            )
          }}
        >
          Copy Markdown
        </button>
      </div>
      <div
        style={{
          background: 'transparent',
          margin: 'auto',
          display: 'flex',
          maxWidth: '800px',
          flexWrap: 'wrap',
          padding: '10px',
        }}
      >
        {filteredChoices.map((item) => (
          <img
            onClick={() =>
              updateCurrentChoice({ name: item.name, category: item.category })
            }
            alt=''
            style={{ height: '45px', padding: '6px' }}
            src={`https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/${item.category}/${item.name}.png?raw=true`}
          />
        ))}
      </div>
    </>
  )
}

export default Home
