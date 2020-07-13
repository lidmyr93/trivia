import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"
const Table = styled.div`
    color: black;
    display: flex;
    margin: 1rem;
`;
const TableNode = styled.div`
    border: 1px solid black;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyledPoint = styled.div`
    color: ${props => props.color};
    font-weight: 700;
`;
const PointsTable = ({score}) => {
    const game = useSelector(state => state.game);
    const winCondition = game && game.winCondition;
    
    return (
        <Table>
        {Array.from({length: winCondition}, (item, index) => 
        <TableNode key={index}>
            {index + 1 <= score ? <Point filled={true} /> : <Point filled={false} />}
        </TableNode>) }
        </Table>
        )
}

export default PointsTable;


function Point({filled}){

    return filled ? 
    <StyledPoint color="green">V</StyledPoint> : <StyledPoint color="red"></StyledPoint>
}