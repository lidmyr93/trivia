import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePlayer } from "../../actions/game";
import styled from "styled-components";
import PointsTable from "../score/Score";
const PlayerWrapper = styled.div`
  color: white;
  margin: 1rem;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PlayerName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`;
const PlayerButton = styled.div`
  background: ${(props) => props.background};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-transform: uppercase;
`;
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Players = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const players = game && game.players;
  const gameStarted = game && game.game;
  const handleDelete = (e) => {
    dispatch(removePlayer(e.target.value));
  };
  return (
    <div>
      <h1>Players</h1>
      <FlexWrapper>
        {players &&
          players.length >= 1 &&
          players.map((player) => (
            <PlayerWrapper key={player.id}>
              <PlayerName>
                <PlayerButton background={player.color}>
                  {player.shortName}
                </PlayerButton>
                {!gameStarted && <span style={{ color: "black" }}>{player.name}</span>}
              </PlayerName>
              {!gameStarted && (
                <button value={player.name} onClick={(e) => handleDelete(e)}>
                  X
                </button>
              )}
              {gameStarted && <PointsTable score={player.score} />}
            </PlayerWrapper>
          ))}
      </FlexWrapper>
    </div>
  );
};

export default Players;

//wincondition in redux
//players score array should be same length as wincondition in redux
