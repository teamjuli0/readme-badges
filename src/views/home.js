import { useState } from 'react'
import ReadmeBadges from '../themes/'

const { 'menu-categories': Categories, technologies: Technologies } =
  ReadmeBadges.choices

const Home = () => {
  const [currentImg, setCurrentImg] = useState({
    name: 'javascript',
    category: 'technologies',
  })

  const [choices, setChoices] = useState([
    ...Categories.map((item) => ({ name: item, category: 'menu-categories' })),
    ...Technologies.map((item) => ({
      name: item,
      category: 'technologies',
    })),
  ])

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
            src={`https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/${currentImg.category}/${currentImg.name}.png?raw=true`}
          />
        </div>
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
        {choices.map((item) => (
          <img
            onClick={() =>
              setCurrentImg({ name: item.name, category: item.category })
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
