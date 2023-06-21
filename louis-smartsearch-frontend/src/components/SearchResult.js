import React, { useEffect } from "react"
import "./SearchResultsList.css"
import HighlightedContent from "./HighlightedContent";

// Search Result Component 
export const SearchResult = ({ item, term })=> {

    useEffect(() => {
        
        //console.log('This is the term' + term);

    })

    return(
        <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" style={{
            textDecoration: 'none', color: 'inherit'}}>
            <div className="search-result">
                    <p className="title" style={{color: "blue"}}>{item.title}</p>
                    <p className="url">{item.url}</p>
                    <HighlightedContent content={item.content} term={term}/>
            </div>
        </a>
    );
};