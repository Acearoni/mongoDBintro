import { useState, useEffect } from 'react'
import './App.css'
import DisplayAll from './components/DisplayAll'
import { Link, Routes, Route } from 'react-router-dom'
import CreateForm from './components/CreateForm'
import DisplayOne from './components/DisplayOne'
import Edit from './components/Edit'

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
        <Route path='/game/:id' element={<DisplayOne/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </>
  )
}

export default App
