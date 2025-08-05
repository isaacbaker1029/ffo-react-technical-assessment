import React from 'react';
import styled from 'styled-components';

const SentimentWrapper = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  color: black;
  margin: 4px 0;
  text-align: center;
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
    return <SentimentWrapper>{text}</SentimentWrapper>;
};

export default RatingSentiment;