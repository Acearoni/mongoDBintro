import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';



//created the component, then go and create the route to make sure it goes to the correct comp.
const DisplayOne = (props) => {
    const navigate = useNavigate()
    const [game, setGame] = useState({})
    const { id } = useParams()
    // console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneGame/${id}`)
            .then((res) => {
                setGame(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteGame/${id}`)
        .then(() => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>{game.gameName}</h1>
            <div>
                <h2>Developer: {game.dev}</h2>
                <h2>Release Year: {game.releaseYear}</h2>
                <h2>Genre: {game.genre}</h2>
                <button onClick={deleteHandler}>Delete {game.gameName}</button>
            </div>
        </div>
    );
}

export default DisplayOne;