import React from 'react';
import styled from 'styled-components';
import Star from './Star.jsx';

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Stars = ({ rating }) => {
    const starElements = [];

    for (let i = 1; i <= 5; i++) {
        let fillPercentage = 0;
        if (i <= rating) {
            // This star should be full
            fillPercentage = 100;
        } else if (i > rating && (i - 1) < rating) {
            // This is the partially filled star
            // rating % 1 gives us the decimal part (e.g., 4.6 % 1 = 0.6)
            fillPercentage = (rating % 1) * 100;
        }
        // Otherwise, the fill remains 0 for empty stars

        starElements.push(<Star key={i} fillPercentage={fillPercentage} />);
    }

    return <StarsContainer>{starElements}</StarsContainer>;
};

export default Stars;