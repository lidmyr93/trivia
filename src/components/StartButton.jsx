import React from "react";
import { fetchQuestions } from "../api";
import { useDispatch, useSelector } from "react-redux";




 const StartButton = () => {
    const dispatch = useDispatch()
    const category = "";
    const handleClick = () => {
       return  dispatch(fetchQuestions())
    }
    return <button onClick={handleClick}>Start</button>
}

export default StartButton;