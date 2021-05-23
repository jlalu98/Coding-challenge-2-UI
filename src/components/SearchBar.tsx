import React, { useContext, useState } from 'react';
import { QuestionContext } from '../Context/AppContext';
import { searchQuestion } from '../services/services';

function SearchBar(props: any) {
    const [selected,setSelected]=useState("");
    const [searchText,setSearchText]=useState("");
    const {dispatch}=useContext(QuestionContext);
    const handleSelected=(event:any)=>{
        setSelected(event.target.value);
    }
    const handleSearch=(event:any)=>{
        setSearchText(event.target.value);
    }
    const handleClick=(searchText:any,selected:any,dispatch:any)=>{
        searchQuestion(searchText,selected,dispatch);
    }
    return (
        <div>
            <form className="d-flex">
                <select className="selectSearch" onChange={handleSelected}>
                    <option value="text">Text Search</option>
                    <option value="category">Category</option>
                </select>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                <button className="btn btn-dark" type="button" onClick={()=>handleClick(searchText,selected,dispatch)}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;