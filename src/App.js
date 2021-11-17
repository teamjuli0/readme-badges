import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const getClipboardCopy = () => {
    const urlArr = window.location.href.split('/')
    console.log(urlArr[urlArr.length - 2])
    navigator.clipboard
      .writeText(
        `## <a href="#readme-badges"><img id="usage" src="https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/${
          urlArr[urlArr.length - 2]
        }/${urlArr[urlArr.length - 1]}.png?raw=true" style="height: 25px"></a>`
      )
      .then(() => window.close())
  }

  return (
    <>
      <Routes>
        <Route
          path='/clipboard/:option/:title'
          element={<>{getClipboardCopy()}</>}
        />
      </Routes>
    </>
  )
}

export default App
