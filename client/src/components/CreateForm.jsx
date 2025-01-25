import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import GameForm from './GameForm';

const CreateForm = (props) => {
    const navigate = useNavigate();
    // const [gameName, setGameName] = useState("");
    // const [dev, setDev] = useState("");
    // const [releaseYear, setReleaseYear] = useState(1960);
    // const [genre, setGenre] = useState("Third Person Shooter");
    const [errors, setErrors] = useState({});

    const [game, setGame] = useState({
        dev: '',
        gameName: '',
        releaseYear: 1960,
        genre: 'Third Person Shooter',
    })

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/createGame', game)
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
            game={game}
            setGame={setGame}
            errors={errors}
            />
        </div>
    );
}

export default CreateForm;