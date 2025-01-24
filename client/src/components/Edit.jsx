import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GameForm from './GameForm';

//array of objects 
const options = [
    { value: 'Third Person Shooter' },
    { value: 'First Person Shooter' },
    { value: 'Platformer' },
    { value: 'Puzzle' }
]

const Edit = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [gameName, setGameName] = useState("");
    const [dev, setDev] = useState("");
    const [releaseYear, setReleaseYear] = useState(1960);
    const [genre, setGenre] = useState("Third Person Shooter");
    const [errors, setErrors] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneGame/${id}`)
            .then((res) => {
                setGameName(res.data.gameName)
                setDev(res.data.dev)
                setReleaseYear(res.data.releaseYear)
                setGenre(res.data.genre)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        const newGame = { gameName, dev, releaseYear, genre }
        axios.put(`http://localhost:8000/api/updateGame/${id}`, newGame)
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
                console.log(err)
            })
    }


    return (
        <div>
            <GameForm
                submitHandler={submitHandler}
                gameName={gameName}
                setGameName={setGameName}
                dev={dev}
                setDev={setDev}
                releaseYear={releaseYear}
                setReleaseYear={setReleaseYear}
                genre={genre}
                setGenre={setGenre}
                errors={errors}
            />
        </div>
    );
}

export default Edit;