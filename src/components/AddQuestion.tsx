import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { textChangeRangeNewSpan } from 'typescript';
import { QuestionContext } from '../Context/AppContext';
import { addQuestion } from '../services/services';

function AddQuestion(props: any) {
    const history = useHistory();
    const {state, dispatch } = useContext(QuestionContext);
    // const [id, setId] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");
    const [vote, setVotes] = useState("");
    
    // function handleIdChange(event: any) {
    //   setId(event.target.value);
    // }
  
    function handleTextChange(event: any) {
      setText(event.target.value);
    }
    function handleCategoryAChange(event: any) {
      setCategory(event.target.value);
    }
    function handleVotesChange(event: any) {
      setVotes(event.target.value);
    }
    const handleClick = () => {
        let categories=category.split(",");
        const question = {
            text: text,
            category: categories,
            votes: vote,
            user: state.user_id,
          };
          //let token = "Bearer " + localStorage.getItem("login");
          addQuestion(dispatch, question);
          //, token
        props.onHide();
        history.push("/");
    }
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Questions
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Question</label>
                        <input type="text" className="form-control" id="question" placeholder="enter yor question"  value={text} onChange={handleTextChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                        <input type="text" className="form-control" id="category" placeholder="categories" value={category} onChange={handleCategoryAChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Votes</label>
                        <input type="text" className="form-control" id="votes" placeholder="votes" value={vote} onChange={handleVotesChange}/>
                    </div>
                    </Modal.Body>
                <Modal.Footer>
                        <Button onClick={handleClick}>Save</Button>
                    </Modal.Footer>
    </Modal>
        </div>
    );
}

export default AddQuestion;