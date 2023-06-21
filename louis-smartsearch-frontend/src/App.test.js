import { render, screen } from '@testing-library/react';
import React from 'react';
import HighlightedContent from './components/HighlightedContent';

describe('HighlightedContent', () => {
  it('should have correct indices for highlighted words', () => {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const query = 'ipsum';

    const { container } = render(<HighlightedContent content={content} query={query} />);
    const strongs = container.querySelectorAll('strong');

    const highlightedIndices = Array.from(strongs).map(strong => Number(strong.dataset.wordIndex));

    expect(highlightedIndices).toEqual([1]);
  });
});