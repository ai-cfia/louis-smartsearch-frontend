import React from "react"
import "./SearchResultsList.css"

export const SearchResult = ({ item })=> {

    return(
        <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" style={{
            textDecoration: 'none', color: 'inherit'}}>
            <div 
                className="search-result" 
            >
                    <p style={{fontSize: 20, fontWeight: "bold", color: "blue"}}>{item.title}</p>
                    <p style={{color: "black"}}>{item.url}</p>
                    <p style={{color: "black"}}>{item.content}</p>
            </div>
        </a>
    );
};