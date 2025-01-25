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
    const [game, setGame] = useState({
        gameName: "",
        dev: "",
        releaseYear: 1960,
        genre: "Third Person Shooter",
    });
    const [errors, setErrors] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneGame/${id}`)
            .then((res) => {
                setGame(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateGame/${id}`, game)
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
                game={game}
                setGame={setGame}
                errors={errors}
            />
        </div>
    );
}

export default Edit;