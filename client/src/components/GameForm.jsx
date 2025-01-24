import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const options = [
    {value: 'Third Person Shooter'},
    {value: 'First Person Shooter'},
    {value: 'Platformer'},
    {value: 'Puzzle'}
]

const GameForm = (props) => {
    const {submitHandler, gameName, setGameName, dev, setDev, releaseYear, setReleaseYear, genre, setGenre, errors} = props;
    const [dropdown, setDropdown] = useState([])

    useEffect(()=>{
        generateDropdown(genre)
    }, [])

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
            <h2>Add To Our Collection</h2>
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
                <select onChange={(e) => setGenre(e.target.value)} value={genre}>
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

export default GameForm;