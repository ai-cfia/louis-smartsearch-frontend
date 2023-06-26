import { highlightWords } from '../src/components/HighlightedContent';

// Test case for the highlightWords function
test('highlightWords should correctly highlight words and return rendered words and highlighted indices', () => {
  // Input sentence and query
  const sentence = 'This is a sample sentence for testing sample bacteria.';
  const query = 'sample bacteria';

  const expectedHighlightedIndices = [3,7,8];

  // Invoke the highlightWords function
  const { highlightedIndices } = highlightWords(sentence, query);

  // Assert the rendered words and highlighted indices
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});
