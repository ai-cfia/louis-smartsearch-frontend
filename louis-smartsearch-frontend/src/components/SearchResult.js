import React from "react"
import "./SearchResultsList.css"

// Search Result Component 
export const SearchResult = ({ item })=> {

    return(
        <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" style={{
            textDecoration: 'none', color: 'inherit'}}>
            <div className="search-result">
                    <p className="title" style={{color: "blue"}}>{item.title}</p>
                    <p className="url">{item.url}</p>
                    <p className="content">{item.content.length > 700 ? item.content.substring(0,700) + '...': item.content}</p>
            </div>
        </a>
    );
};