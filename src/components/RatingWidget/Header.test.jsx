import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header.jsx';

// ---- MOCKING SECTION ----
// Mock the child components to isolate the Header for testing.
vi.mock('./Stars.jsx', () => ({
    default: () => <div data-testid="stars-mock" />
}));

vi.mock('./RatingSentiment.jsx', () => ({
    default: () => <div data-testid="sentiment-mock" />
}));
// -------------------------


describe('Header Component', () => {

    it('should render all elements correctly for a given rating', () => {
        // 1. Arrange: Define a test rating and render the component.
        const testRating = 4.9;
        render(<Header averageRating={testRating} />);

        // 2. Assert: Check for all expected elements in the document.

        // Check for the static text and the logo
        expect(screen.getByText('Product Rating')).toBeInTheDocument();
        expect(screen.getByAltText('Feefo logo')).toBeInTheDocument();

        // Check for the dynamic rating text
        expect(screen.getByText(`${testRating} out of 5`)).toBeInTheDocument();

        // Check that our fake (mocked) child components were rendered
        expect(screen.getByTestId('stars-mock')).toBeInTheDocument();
        expect(screen.getByTestId('sentiment-mock')).toBeInTheDocument();
    });

});