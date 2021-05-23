import React, { createContext, useReducer } from 'react';
import { Reducer } from './AppReducer';


export const QuestionContext=createContext<any>({});
function ContextProvider(props:any) {
    const [state,dispatch]=useReducer(Reducer,{},()=>{
        return {
            questions:[],
            answers:[],
            questionById:{},
            searchText: "",
            searchedQuestion:[],
            token:"",
            user_id:"",
            isLoggedIn:false,
        }
    })
    return (
            <QuestionContext.Provider value={{state,dispatch}}>
                {props.children}
            </QuestionContext.Provider>
    );
}

export default ContextProvider;