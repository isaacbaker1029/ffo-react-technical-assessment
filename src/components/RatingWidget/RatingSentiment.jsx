import React from 'react';
import styled from 'styled-components';

const SentimentWrapper = styled.p`
  font-size: 1.7em;
  font-weight: 600;
  color: #555555;
  letter-spacing: 2px;
  margin: 4px 0;
  text-align: center;
  text-transform: uppercase;
`;

const getSentimentText = (rating) => {
    // Handle null or undefined ratings gracefully
    if (rating === null || typeof rating === 'undefined') {
        return '';
    }

    if (rating >= 4) return 'Excellent';
    if (rating >= 3) return 'Very Good';
    if (rating >= 2) return 'Good';
    if (rating >= 1) return 'Mixed';
    return 'Poor';
};

const RatingSentiment = ({ rating }) => {
    const text = getSentimentText(rating);
    if (!text) {
        return null;
    }
    return <SentimentWrapper>{text}</SentimentWrapper>;
};

export default RatingSentiment;