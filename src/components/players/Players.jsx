import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePlayer } from "../../actions/game";
import PointsTable from "../score/Score";

const Players = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const players = game && game.players;
 const gameStarted = game && game.game
  const handleDelete = (e) => {
    
    dispatch(removePlayer(e.target.value));
  };
  return (
    <div>
      <h1>Players</h1>
      {players &&
        players.length >= 1 &&
        players.map((player) => (
          <div key={player.id}>
            <h3>{player.name}</h3>
            {!gameStarted && <button value={player.name} onClick={(e) => handleDelete(e)}>
              X
            </button>}
            {gameStarted && <PointsTable score={player.score}/>}
          </div>
        ))}
    </div>
  );
};

export default Players;

//wincondition in redux
//players score array should be same length as wincondition in redux
