import React, { useEffect } from 'react';
import axios from 'axios';

const DisplayAll = (props) => {
    const {gameList, setGameList} = props
    useEffect(() => {
        axios.get('http://localhost:8000/api/allGames')
            .then((response) => {
                // console.log(response.data);
                setGameList(response.data);
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [])

    return (
        <div>
            {
                gameList.map((game) => (
                    <div key={game._id}>
                        <h2>Game:  {game.gameName}</h2>
                        <h2>Developer:  {game.dev}</h2>
                        <h2>Release Year:  {game.releaseYear}</h2>
                        <h2>Genre:  {game.genre}</h2>
                        <button>Edit</button>
                        <button>Details</button>
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayAll;