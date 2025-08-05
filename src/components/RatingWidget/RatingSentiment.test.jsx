import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RatingSentiment from './RatingSentiment.jsx';

describe('RatingSentiment Component', () => {

    it.each([
        { rating: 5, expected: 'Excellent' },
        { rating: 4.5, expected: 'Excellent' },
        { rating: 4, expected: 'Excellent' },
        { rating: 3.9, expected: 'Very Good' },
        { rating: 3, expected: 'Very Good' },
        { rating: 2.5, expected: 'Good' },
        { rating: 1.5, expected: 'Mixed' },
        { rating: 0.5, expected: 'Poor' },
        { rating: 0, expected: 'Poor' },
    ])('should display "$expected" for a rating of $rating', ({ rating, expected }) => {
        // 1. Arrange: Render the component with the test rating
        render(<RatingSentiment rating={rating} />);

        // 2. Act & Assert: Check if the correct text is on the screen
        expect(screen.getByText(expected)).toBeInTheDocument();
    });

    it('should render nothing if the rating is null', () => {
        // Also test the "null-safe" edge case
        const { container } = render(<RatingSentiment rating={null} />);
        expect(container).toBeEmptyDOMElement();
    });

});