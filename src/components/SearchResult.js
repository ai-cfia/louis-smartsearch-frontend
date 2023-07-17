import React from 'react';
import PropTypes from 'prop-types';
import './SearchResultsList.css';
import HighlightedContent from './HighlightedContent';

// Search Result Component
export const SearchResult = ({ item, query }) => {
  return (
    <div className="search-result">
      <a
        key={item.id}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <p className="title" style={{ color: 'blue' }}>
          {item.title}
        </p>
        <div>
          <span className="url">{item.url}</span>
        </div>
      </a>
      <div>
        <HighlightedContent content={item.content} query={query} />
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }),
  query: PropTypes.string.isRequired
};
