import React, { useContext, useState } from 'react';
import "../App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Question from './Question';
import SearchBar from './SearchBar';
import Answers from './Answers';
import { QuestionContext } from '../Context/AppContext';
import Login from './Login';
import Register from './Register';
import AddQuestion from './AddQuestion';
// import Booklist from './Booklist';
// import Carousel from './Carousel';
// import AddBook from '../components/AddBook'
// import Details from './Details';
// import Login from './Login';
// import Register from './Register';
// import SearchBar from "./SearchBar";
// import { BookContext } from '../context/AppContext';
function NaBar(props: any) {
    const {state,dispatch} = useContext(QuestionContext);
     const [modalShow, setModalShow] = useState(false);

    return (

        <div className="container-fluid">
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <img className="logo" src="https://media2.giphy.com/media/dyX9ixfxMpOUGawfdK/giphy.gif"/>
                    <h2 className="navbar-brand">Answer Me</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link to="/" className="nav-link active" aria-current="page">Questions</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                                <Link to="/POST/question" className="nav-link active" aria-current="page" onClick={() => setModalShow(true)}>Add Question</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a> */}
                                {/* <Link to="/POST/answer" className="nav-link active" aria-current="page">Add Answer</Link> */}
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-dark" type="submit">Search</button>
                        </form> */}
                        <SearchBar/>
                        
                        {state.isLoggedIn?null:<Link to="/login" className="nav-link active" aria-current="page" id="login">Login</Link>}
                        {state.isLoggedIn?<Link onClick={() =>{localStorage.clear();dispatch({type:"LOGOUt"})}} to="/">Logout</Link>:null}
                    </div>
                </nav>
                {/* <br /><br /> */}
                {/* <Carousel/> */}
                <Switch>
                    <Route exact path="/" component={Question} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/POST/question">
                        <AddQuestion
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Route>
                    {/* <Route path="/book_list" component={Booklist} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/add">
                        <AddBook
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Route>
                    <Route path="/details/:id" component={Details} /> */}
                    <Route path="/GET/answers/:id" component={Answers} />
                </Switch>
            </Router>
        </div>

    );
}

export default NaBar;