import * as React from 'react';
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();
    const search=(e)=>{
        e.preventDefault();
        history.push("/search?");
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
            <button type="Submit" onClick={search}>Click Me</button>

        </form>

    );
};