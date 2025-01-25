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
    const {submitHandler, game, setGame, errors} = props;
    const [dropdown, setDropdown] = useState([])

    useEffect(()=>{
        generateDropdown(game.genre)
    }, [game.genre])

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
                <input type="text" onChange={(e) => setGame({...game, gameName:e.target.value})} value={game.gameName} />
                {
                    errors.gameName ?
                        <p>{errors.gameName.message}</p> :
                        null
                }
                <label>Developer:</label>
                <input type="text" onChange={(e) => setGame({...game, dev:e.target.value})} value={game.dev} />
                {
                    errors.dev ?
                        <p>{errors.dev.message}</p> :
                        null
                }
                <label>Release Year:</label>
                <input type="number" onChange={(e) => setGame({...game, releaseYear:e.target.value})} value={game.releaseYear} />
                {
                    errors.releaseYear ?
                        <p>{errors.releaseYear.message}</p> :
                        null
                }
                <label>Genre:</label>
                <select onChange={(e) => setGame({...game, genre:e.target.value})} value={game.genre}>
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