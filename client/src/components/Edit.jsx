import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

//array of objects
const options = [
    {value: 'Third Person Shooter'},
    {value: 'First Person Shooter'},
    {value: 'Platformer'},
    {value: 'Puzzle'}
]

const Edit = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [gameName, setGameName] = useState("");
    const [dev, setDev] = useState("");
    const [releaseYear, setReleaseYear] = useState(1960);
    const [genre, setGenre] = useState("Third Person Shooter");
    const [errors, setErrors] = useState({});
    const [dropdown, setDropdown] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneGame/${id}`)
            .then((res) => {
                generateDropdown(res.data.genre)
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
        const newGame = {gameName, dev, releaseYear, genre}
        axios.put(`http://localhost:8000/api/updateGame/${id}`, newGame)
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
                console.log(err)
            })
        }

    //Did this to autofill the options while editing a game to prepopulate the correct field. 
    const generateDropdown = (genre) => {
        const optionTags = options.map((option) => {
            if(option.value == genre){
                return <option value={option.value} selected>{option.value}</option>
            }
            else{
                return <option value={option.value}>{option.value}</option>
            }
        })
        setDropdown(optionTags)
    }

    return (
        <div>
            <h1>Edit Details</h1>
            <form onSubmit={submitHandler}>
                <label>Game Name:</label>
                <input type="text" onChange={(e) => setGameName(e.target.value)} value={gameName} />
                {
                    errors.gameName ?
                        <p>{errors.gameName.message}</p> :
                        null
                }
                <label>Developer:</label>
                <input type="text" onChange={(e) => setDev(e.target.value)} value={dev} />
                {
                    errors.dev ?
                        <p>{errors.dev.message}</p> :
                        null
                }
                <label>Release Year:</label>
                <input type="number" onChange={(e) => setReleaseYear(e.target.value)} value={releaseYear} />
                {
                    errors.releaseYear ?
                        <p>{errors.releaseYear.message}</p> :
                        null
                }
                <label>Genre:</label>
                <select onChange={(e) => setGenre(e.target.value)}>
                    {
                        dropdown.map((option) => (
                            option
                        ))
                    }
                </select>
                {
                    errors.genre ?
                        <p>{errors.genre.message}</p> :
                        null
                }
                <button>Submit</button>

            </form>
        </div>
    );
}

export default Edit;