import { LogoRound, LogoSquare } from './images'
import './style.css'

const Navbar = () => {
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
            <input />
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
