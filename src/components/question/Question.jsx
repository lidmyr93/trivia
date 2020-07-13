import React from "react";
import { useSelector } from "react-redux";


const Question = () => {
    const questions = useSelector(state => state.questions);
    const x = questions && questions.questions[0];
    const answers = x && [x.correct_answer , ...x.incorrect_answers]
    console.log(answers);
    
    return <div>
        Question
       <div>{x.question}</div>
       <div>
        {answers.map(answer => <div>{answer}</div>)}
       </div>
        </div>
}

export default Question;