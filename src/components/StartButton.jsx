import React from "react";
import { fetchQuestions } from "../api";
import { useDispatch, useSelector } from "react-redux";




 const StartButton = ({numberOfQuestions}) => {
    const dispatch = useDispatch()
    const game = useSelector(state => state.game);
    const category = game && game.category;
    const type = game && game.type;
    const difficulty = game && game.difficulty
    const handleClick = () => {
       return  dispatch(fetchQuestions(category, numberOfQuestions, difficulty, type))
    }
    return <button onClick={handleClick}>Start</button>
}

export default StartButton;