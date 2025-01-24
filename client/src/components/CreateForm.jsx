import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import GameForm from './GameForm';

const CreateForm = (props) => {
    const navigate = useNavigate();
    const [gameName, setGameName] = useState("");
    const [dev, setDev] = useState("");
    const [releaseYear, setReleaseYear] = useState(1960);
    const [genre, setGenre] = useState("Third Person Shooter");
    const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
        e.preventDefault()
        const newGame = {gameName, dev, releaseYear, genre}
        axios.post('http://localhost:8000/api/createGame', newGame)
            .then((res) => {
                // console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
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

export default CreateForm;