import React from "react";
import { useSelector } from "react-redux";


const PointsTable = ({score}) => {
    const game = useSelector(state => state.game);
    const winCondition = game && game.winCondition;
    
    return (
        <div>
        {Array.from({length: winCondition}, (item, index) => 
        <span key={index}>
            {index + 1 <= score ? <Point filled={false} /> : <Point filled={true} />}
        </span>) }
        </div>
        )
}

export default PointsTable;


function Point({filled}){

    return filled ? 
    <div>X</div> : <div>V</div>
}