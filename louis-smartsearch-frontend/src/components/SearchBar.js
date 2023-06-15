import * as React from 'react';
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider.js"
import { actionTypes } from '../reducer';

export const SearchBar = () => {

    const [{}, dispatch] = useStateValue();
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();
    
    const search=(e)=>{
        e.preventDefault();
        history.push("/search?");
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:searchQuery
        })
    }

    return(
        <form className="form-wrapper">
            <div className="input-wrapper" >
                <FaSearch id="search-icon" />
                <input
                    placeholder="Type to search..."
                    value={searchQuery}
                    onChange={e=>setSearchQuery(e.target.value)}
                />
            </div>
            <button type="Submit" onClick={search}>Search</button>

        </form>

    );
};