import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [gameList, setGameList] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8000/api/allGames')
    .then((response)=>{
      // console.log(response.data);
      setGameList(response.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <h1>Full Stack MERN</h1>
      {
        gameList.map((game) => (
          <div>
            <h2>{game.gameName}</h2>
            <h2>{game.dev}</h2>
            <h2>{game.releaseYear}</h2>
            <h2>{game.genre}</h2>
          </div>
        ))
      }
    </>
  )
}

export default App
