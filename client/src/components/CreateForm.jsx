import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

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
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })


    }

    return (
        <div>
            <h2>Add To Our Collection</h2>
            <form onSubmit={submitHandler}>
                <label>Game Name:</label>
                <input type="text" onChange={(e) => setGameName(e.target.value)} value={gameName}/>
                {
                    errors.gameName?
                    <p>{errors.gameName.message}</p>:
                    null
                }
                <label>Developer:</label>
                <input type="text" onChange={(e) => setDev(e.target.value)} value={dev}/>
                {
                    errors.dev?
                    <p>{errors.dev.message}</p>:
                    null
                }
                <label>Release Year:</label>
                <input type="number" onChange={(e) => setReleaseYear(e.target.value)} value={releaseYear}/>
                {
                    errors.releaseYear?
                    <p>{errors.releaseYear.message}</p>:
                    null
                }
                <label>Genre:</label>
                <select onChange={(e) => setGenre(e.target.value)}>
                    <option value="Third Person Shooter">Third Person Shooter</option>
                    <option value="First Person Shooter">First Person Shooter</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Puzzle">Puzzle</option>
                </select>
                {
                    errors.genre?
                    <p>{errors.genre.message}</p>:
                    null     
                }
                <button>Submit</button>

            </form>
        </div>
    );
}

export default CreateForm;