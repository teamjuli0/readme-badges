import './App.css'
import { Navbar } from './components'
import { Home } from './views'

function App() {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '48px',
          padding: '0 0 0 10px',
          backgroundColor: '#da4040',
          fontFamily: 'NotoSans',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '30px',
        }}
      >
        ALPHA BUILD
      </div>
      <Navbar />
      <Home />
    </>
  )
}

export default App
