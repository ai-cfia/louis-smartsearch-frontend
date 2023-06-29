import * as React from 'react';
import { useEffect } from "react";
import {FaSearch, FaArrowRight} from "react-icons/fa"
import "./SearchBar.css"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider.js"
import { actionTypes } from '../reducer';

export const SearchBar = ({term}) => {

    const [{}, dispatch] = useStateValue(); 
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();
    const [previousSearchQuery, setPreviousSearchQuery] = useState('');

    useEffect(() => {
        
        if (typeof term === 'undefined'){
            setPreviousSearchQuery('Type to search...')
        }
        else{
            setPreviousSearchQuery(term)

        }
    })

    // On form submission perform search.
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
                <FaSearch id="fa-arrow-right"/>
                <input
                    placeholder={previousSearchQuery}
                    value={searchQuery}
                    onChange={e=>setSearchQuery(e.target.value)}
                />
                <button className='button' type="Submit" onClick={search}>
                    <FaArrowRight id="fa-arrow-right" style={{color: "#05486c"}}/>
                </button>
            </div>


        </form>

    );
};