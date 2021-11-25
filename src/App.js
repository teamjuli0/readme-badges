import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const getClipboardCopy = () => {
    const urlArr = window.location.href.split('/')
    const theme = urlArr[urlArr.length - 3]
    const type = urlArr[urlArr.length - 2]
    const name = urlArr[urlArr.length - 1]

    navigator.clipboard
      .writeText(
        `## <a href="#readme-badges"><img id="usage" src="https://github.com/teamjuli0/readme-badges/blob/main/themes/${theme}/${type}/${name}.png?raw=true" style="height: 25px"></a>`
      )
      .then(() => {
        const wikiName =
          theme
            .split('-')
            .map((name) => name[0].toUpperCase() + name.substring(1))
            .join('-') + '-Theme'

        document.location.assign(
          `https://github.com/teamjuli0/readme-badges/wiki/${wikiName}`
        )
      })
  }

  return (
    <>
      <Routes>
        <Route
          path='/clipboard/:theme/:option/:title'
          element={<>{getClipboardCopy()}</>}
        />
      </Routes>
    </>
  )
}

export default App
