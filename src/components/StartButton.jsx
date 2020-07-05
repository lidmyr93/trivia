import React from "react";
import { fetchQuestions } from "../api";
import { useDispatch, useSelector } from "react-redux";




 const StartButton = ({numberOfQuestions}) => {
    const dispatch = useDispatch()
    const game = useSelector(state => state.game);
    const category = game && game.category;
    const handleClick = () => {
       return  dispatch(fetchQuestions(category, numberOfQuestions))
    }
    return <button onClick={handleClick}>Start</button>
}

export default StartButton;