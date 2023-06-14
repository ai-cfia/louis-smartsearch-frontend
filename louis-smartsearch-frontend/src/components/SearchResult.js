import React from "react"
import "./SearchResultsList.css"

export const SearchResult = ({ result })=> {

    return(
        <div 
            className="search-result" 
            onClick={(e) => alert('You clicked on'+ JSON.stringify(result))}
        >
                {result}
        </div>
    );
};