import { useState, useEffect } from 'react'
import './App.css'
import DisplayAll from './components/DisplayAll'
import { Link, Routes, Route } from 'react-router-dom'
import CreateForm from './components/CreateForm'

function App() {
  const [gameList, setGameList] = useState([])

  return (
    <>
      <h1>Full Stack MERN</h1>
      <Link to={"/newGame"}>Add Game</Link>
      <br />
      <Link to={"/"}>HOME</Link>

      <h2>Games</h2>
      <Routes>
        <Route index element={<DisplayAll gameList={gameList} setGameList={setGameList} />} />
        <Route path="/newGame" element={<CreateForm/>} />
      </Routes>
    </>
  )
}

export default App
