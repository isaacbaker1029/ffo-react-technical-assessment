import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RatingDistribution from './RatingDistribution.jsx';

describe('RatingDistribution Component', () => {

    // We'll use a small, predictable set of mock data for this test.
    const testDistribution = [
        { stars: 5, count: 100 },
        { stars: 4, count: 50 },
    ];
    const totalReviews = 150;

    it('should render a row for each item in the distribution array', () => {
        // Arrange
        render(
            <RatingDistribution
                distribution={testDistribution}
                totalReviews={totalReviews}
            />
        );

        // Assert: Check that the content for both rows is visible.

        // Check for the 5-star row
        expect(screen.getByText('5 ★')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();

        // Check for the 4-star row
        expect(screen.getByText('4 ★')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
    });

    it('should not render anything if the distribution array is empty', () => {
        // Arrange
        const { container } = render(
            <RatingDistribution distribution={[]} totalReviews={0} />
        );

        // Assert
        expect(container.firstChild).toBeEmptyDOMElement();
    });
});