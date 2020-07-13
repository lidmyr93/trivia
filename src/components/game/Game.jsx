import React from "react";
import Players from "../players/Players";
import Question from "../question/Question";


const Game = () => {
  
  
  return (
    <div>
      
      <Players />
      <Question />
      

    {/* TODO:
      Write logic to grab first player in turn to answer first question,
      logic for that action is needed, then calculate next players turn and show a new question,
      Also check when questions are running out to re-fetch questions with the help
      of session token.
    */}
    </div>
  );
};

export default Game;
