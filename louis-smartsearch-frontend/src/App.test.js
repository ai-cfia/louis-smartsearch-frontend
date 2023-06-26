import { highlightWords } from '../src/components/HighlightedContent';

// Test case for the highlightWords function
test('highlightWords should return highlighted indices', () => {
  // Input sentence and query
  const sentence = 'This is a sample sentence for testing sample bacteria.';
  const query = 'sample bacteria';

  const expectedHighlightedIndices = [3,7,8];

  // Invoke the highlightWords function
  const { highlightedIndices } = highlightWords(sentence, query);

  // Assert the rendered words and highlighted indices
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});

test('highlightWords should not highlight any words when the query is empty', () => {
    // Test input
    const sentence = 'This is a sample sentence for testing sample.';
    const query = '';
  
    const expectedHighlightedIndices = [];
  
    // Invoke the highlightWords function
    const { highlightedIndices } = highlightWords(sentence, query);
  
    // Assert the rendered words and highlighted indices
    expect(highlightedIndices).toEqual(expectedHighlightedIndices);
  });

  test('highlightWords should handle empty content', () => {
    // Test input
    const sentence = '';
    const query = 'sample';
  
    // Expected output
    const expectedHighlightedIndices = [];
  
    // Invoke the highlightWords function
    const { highlightedIndices } = highlightWords(sentence, query);
  
    // Assert the rendered words and highlighted indices
    expect(highlightedIndices).toEqual(expectedHighlightedIndices);
  });


test('highlightWords should handle content shorter than query', () => {
  // Test input
  const sentence = 'This is a sample.';
  const query = 'sample sentence';

  const expectedHighlightedIndices = [3];

  // Invoke the highlightWords function
  const { highlightedIndices } = highlightWords(sentence, query);

  // Assert the rendered words and highlighted indices
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});


test('highlightWords should handle content without periods or question marks', () => {
  // Test input
  const sentence = 'This is a sample sentence without punctuation';
  const query = 'sample';

  const expectedHighlightedIndices = [3];

  // Invoke the highlightWords function
  const { highlightedIndices } = highlightWords(sentence, query);

  // Assert the rendered words and highlighted indices
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});

test('highlightWords should handle content with punctuation', () => {
    // Test input
    const sentence = 'This is a sample sentence, for testing! Sample.';
    const query = 'sample';
  
    const expectedHighlightedIndices = [3, 7];
  
    // Invoke the highlightWords function
    const { highlightedIndices } = highlightWords(sentence, query);
  
    // Assert the rendered words and highlighted indices
    expect(highlightedIndices).toEqual(expectedHighlightedIndices);
  });