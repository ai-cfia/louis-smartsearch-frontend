import React from 'react';

// HighlightedContent component
const HighlightedContent = ({ content, query }) => {

  // Function to highlight words within a sentence
  const highlightWords = (sentence) => {
    const words = sentence.split(' ');
    const highlightedIndices = []; // Array to store indices of highlighted words

    const renderedWords = words.map((word, wordIndex) => {
      const normalizedWord = word.replace(/[.,?!]/g, ''); // Remove punctuation for comparison
      const shouldHighlight = query.toLowerCase().includes(normalizedWord.toLowerCase()) && normalizedWord.length > 3; // Check if word length is greater than 4
      const punctuation = word.slice(normalizedWord.length).replace(/[.,?!]/g, ''); // Extract punctuation

      if (shouldHighlight) {
        highlightedIndices.push(wordIndex); // Add the word index to highlightedIndices
      }

      return (
        <React.Fragment key={wordIndex}>
          {shouldHighlight ? <strong>{word}</strong> : word} {/* Highlight the word if shouldHighlight is true */}
          {wordIndex !== words.length - 1 && <span> </span>} {/* Add a space between words */}
          {shouldHighlight && punctuation && <span>{punctuation}</span>} {/* Render punctuation if it exists */}
        </React.Fragment>
      );
    });

    return { renderedWords, highlightedIndices }; // Return the rendered words and highlighted word indices
  };
  

  // Function to render highlighted sentences
  const renderHighlightedSentences = () => {
    const sentences = content.split('. '); // Split the content into sentences

    return sentences.map((item, index) => {
      const trimmedSentence = item.trim(); // Trim leading and trailing whitespace
      const { renderedWords, highlightedIndices } = highlightWords(trimmedSentence); // Highlight the words in the sentence

      return (
        <span key={index}>
          {/*<p style={{color: 'red'}}>{highlightedIndices}</p>*/}
          {renderedWords} {/* Render the highlighted words */}
          {index !== sentences.length - 1 && <span>. </span>} {/* Add a period and space between sentences */}
        </span>
      );
    });
  };

  // Render the highlighted sentences
  return <>{renderHighlightedSentences()}</>;
};

export default HighlightedContent;
