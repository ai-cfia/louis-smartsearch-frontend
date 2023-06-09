import React from "react"
import "./SearchResultsList.css"
import { SearchResult } from "./SearchResult"

// Search Result Component -> Displays a list of results retrieved from the back-end server. 
export const SearchResultList = ({ data , query })=> {
    
    return(
        <div className="results-list">
            {data !== null && data.map((item) => (
                <SearchResult item={item} query={query}/>
            ))}
       </div>
    );
};
