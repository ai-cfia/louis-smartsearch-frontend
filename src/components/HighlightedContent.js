import React from 'react';

// Function to highlight words within a sentence
export const highlightWords = (sentence, query) => {
  const words = sentence.split(' ');
  const highlightedIndices = []; // Array to store indices of highlighted words

  const renderedWords = words.map((word, wordIndex) => {
    const normalizedWord = word.replace(/[.,?!]/g, ''); // Remove punctuation for comparison
    const shouldHighlight = query.toLowerCase().includes(normalizedWord.toLowerCase()) && normalizedWord.length > 4; // Check if word length is greater than 4
    const punctuation = word.slice(normalizedWord.length).replace(/[.,?!]/g, ''); // Extract punctuation

    if (shouldHighlight) {
      highlightedIndices.push(wordIndex); // Add the word index to highlightedIndices
    }

    return {
      word: shouldHighlight ? <strong>{word}</strong> : word, // Highlight the word if shouldHighlight is true
      hasSpace: wordIndex !== words.length - 1, // Add a space between words if it's not the last word
      punctuation: shouldHighlight && punctuation ? <span>{punctuation}</span> : null, // Render punctuation if it exists and shouldHighlight is true
    };
  });

  return { renderedWords, highlightedIndices }; // Return the rendered words and highlighted word indices
};

// Function to render highlighted sentences
const renderHighlightedSentences = (content, query) => {
  const sentences = content.split('. '); // Split the content into sentences

  const sentenceElements = sentences.map((item, index) => {
    const trimmedSentence = item.trim(); // Trim leading and trailing whitespace
    const { renderedWords, /*highlightedIndices*/ } = highlightWords(trimmedSentence, query); // Highlight the words in the sentence

    return {
      sentence: renderedWords.map((wordObj, wordIndex) => ({
        word: wordObj.word,
        hasSpace: wordObj.hasSpace,
        punctuation: wordObj.punctuation,
      })),
      hasPeriod: index !== sentences.length - 1, // Add a period and space between sentences if it's not the last sentence
    };
  });

  return sentenceElements;
};

// HighlightedContent component
const HighlightedContent = ({ content, query }) => {
  // Render the highlighted sentences using the external function
  const sentenceElements = renderHighlightedSentences(content, query);

  return (
    <>
      {sentenceElements.map((sentenceObj, sentenceIndex) => (
        <span key={sentenceIndex}>
          {sentenceObj.sentence.map((wordObj, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {wordObj.word}
              {wordObj.hasSpace && <span> </span>}
              {wordObj.punctuation}
            </React.Fragment>
          ))}
          {sentenceObj.hasPeriod && <span>. </span>}
        </span>
      ))}
    </>
  );
};

export default HighlightedContent;
