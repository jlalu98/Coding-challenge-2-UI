import React, { useContext, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { QuestionContext } from '../Context/AppContext';
import { getAllQuestions } from '../services/services';

function Question(props: any) {
    const history = useHistory();
    const { state, dispatch } = useContext(QuestionContext)
    useEffect(() => {
        getAllQuestions(dispatch);
    }, [])
    console.log(state.questions);

    return (
        <div>
            {state.questions.map(function (question: any) {
                return (
                    <>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{question.text}</Card.Title>
                                <Card.Text>
                                    <ul className="list-inline">
                                        {question.category.map(function (cat: any) {
                                            return (<li className="list-inline-item"><em>{cat.toUpperCase()}</em></li>)
                                        })}
                                    </ul>
                                </Card.Text>
                                <Button variant="dark" onClick={()=>history.push("/GET/answers/"+question._id)}>Answers</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">POSTED ON : {question.createdAt.slice(0, 10)}</Card.Footer>
                        </Card>
                        <br />
                    </>

                )
            })}
        </div>
    );
}

export default Question;