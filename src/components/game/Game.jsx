import React from "react";
import Players from "../players/Players";

const Game = () => {
  return (
    <div>
      <h1>this da game</h1>
      <Players />
      
      {/* 
        TODO: Show the first question inline with correspeonding player and action
        shift the first question from redux and put it in "used questions array"
        once reached 50 questions in the game refetch questuons with the help of session token that
        needs to be implemented... if not any player has met the requirement to win
        in wich case scrap the session token to gain access to all questions again  
    */}
    </div>
  );
};

export default Game;
