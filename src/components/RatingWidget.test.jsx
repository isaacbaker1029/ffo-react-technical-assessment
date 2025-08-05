import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RatingWidget from './RatingWidget.jsx';

describe('RatingWidget Component (Integration Test)', () => {

    const testData = {
        averageRating: 4.9,
        totalReviews: 1212,
        distribution: [
            { stars: 5, count: 952 },
            { stars: 4, count: 171 },
            { stars: 3, count: 55 },
            { stars: 2, count: 14 },
            { stars: 1, count: 20 },
        ],
    };

    it('should render all major sections correctly', () => {
        // Arrange
        render(<RatingWidget reviewData={testData} />);

        // Assert
        // We'll just do a "smoke test" by checking for one key item from each area
        // to confirm they all rendered and received their data correctly.

        // Check for a piece from the Header (the sentiment text)
        expect(screen.getByText('Excellent')).toBeInTheDocument();

        // Check for a piece from the Header's footer
        expect(screen.getByText('Product Rating')).toBeInTheDocument();

        // Check for a piece from the RatingDistribution (the 5-star count)
        expect(screen.getByText('952')).toBeInTheDocument();
    });
});