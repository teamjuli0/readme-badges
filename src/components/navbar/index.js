import { useRef } from 'react'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state'
import { LogoRound, LogoSquare } from './images'
import './style.css'

const Navbar = () => {
  const inputEl = useRef()
  const choices = useSelector((state) => state.choices.choices)

  const dispatch = useDispatch()
  const { updateSearch, updateChoices } = bindActionCreators(
    actionCreators,
    dispatch
  )

  const filterChoices = (input) => {
    return choices.filter((choice) => {
      if (choice.name.includes(input)) {
        return true
      }
      return false
    })
  }

  return (
    <>
      <nav>
        <div>
          <div className='nav-icon-div'>
            <img alt='Readme Badges Logo' src={LogoRound} />
          </div>
          <div className='nav-input-div'>
            <div>
              <i className='fas fa-search'></i>
            </div>
            <input
              ref={inputEl}
              onChange={() => {
                updateSearch(inputEl.current.value)
                updateChoices(filterChoices(inputEl.current.value))
              }}
            />
          </div>
          <div className='nav-title-div'>
            <img alt='Readme Badtges Logo Square' src={LogoSquare} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
