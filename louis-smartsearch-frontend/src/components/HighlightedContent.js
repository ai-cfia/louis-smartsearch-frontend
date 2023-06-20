import React from 'react';

/**
 * Component to highlight specific words in a paragraph of content.
 *
 * @param {string} content - The paragraph content to be displayed.
 * @param {string} term - The term to be highlighted in the content.
 * @returns {JSX.Element} - The rendered component.
 */
const HighlightedContent = ({ content, term }) => {
  // Split the content into individual sentences
  const sentences = content.split('.').map(sentence => sentence.trim());

  return (
    <>
      {sentences.map((sentence, index) => {
        // Split each sentence into individual words
        const words = sentence.split(' ');

        return (
          <span key={index}>
            {words.map((word, wordIndex) => {
              // Normalize the word by removing punctuation for comparison
              const normalizedWord = word.replace(/[.,?!]/g, '');
              // Check if the normalized word includes the search term
              const isMatch = normalizedWord.toLowerCase().includes(term.toLowerCase());
              // Extract the punctuation from the original word
              const punctuation = word.slice(normalizedWord.length);

              return (
                <React.Fragment key={wordIndex}>
                  {/* Render the word with appropriate formatting */}
                  {isMatch ? <strong>{normalizedWord}</strong> : normalizedWord}
                  {/* Add a space between words */}
                  {wordIndex !== words.length - 1 && <span> </span>}
                  {/* Add punctuation if it exists and the word is a match */}
                  {isMatch && punctuation && <span>{punctuation}</span>}
                </React.Fragment>
              );
            })}
            {/* Add a period after each sentence */}
            {index !== sentences.length - 1 && <span>. </span>}
          </span>
        );
      })}
    </>
  );
};

export default HighlightedContent;
