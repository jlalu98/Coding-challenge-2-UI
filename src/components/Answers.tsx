import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { QuestionContext } from '../Context/AppContext';
import { getAnswers, getQuestionById,addAnswer } from '../services/services';

function Answers(props: any) {
    let id = props.match.params.id;
    const { state, dispatch } = useContext(QuestionContext);
    const [answer,setAnswer]=useState("");
    useEffect(() => {
        getQuestionById(id,dispatch);
        getAnswers(id, dispatch);
    }, [])
    const handleAnswer=(event:any)=>{
        setAnswer(event.target.value);
    }
    const handleSubmit=()=>{
        addAnswer(dispatch,id,state.user_id,answer);
    }
    return (
        <div>
            <h1 className="display-6">{state.questionById.text}</h1>
            <br/>
            {state.answers.map(function (answer: any) {
                return (
                    <div className="alert alert-dark" role="alert">
                        "{answer.text}"
                    </div>
                )
            })}
            <h1 className="display-7">Post Answer</h1>
<hr />
            <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handleAnswer}></textarea>
  <label htmlFor="floatingTextarea2">Answer</label>
  <br/>
  <Button variant="dark" onSubmit={handleSubmit}>Send</Button>

</div>
        </div>
    );
}

export default Answers;