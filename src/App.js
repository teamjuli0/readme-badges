import './App.css'
import { Navbar } from './components'
import { Home } from './views'
import { Provider } from 'react-redux'
import { store } from './state/store'

function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  )
}

export default App
