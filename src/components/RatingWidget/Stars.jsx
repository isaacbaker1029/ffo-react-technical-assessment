import React from 'react';
import styled from 'styled-components';
import Star from './Star.jsx';
import PropTypes from 'prop-types';

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Stars = ({ rating }) => {
    const starElements = Array.from({ length: 5 }, (_, index) => {
        const starNumber = index + 1;
        let fillPercentage = 0;
        if (starNumber <= rating) {
            fillPercentage = 100;
        } else if (starNumber > rating && (starNumber - 1) < rating) {
            fillPercentage = (rating % 1) * 100;
        }
        return <Star key={starNumber} fillPercentage={fillPercentage} />;
    });

    return (
        <div role="img" aria-label={`Rating: ${rating} out of 5 stars.`}>
            <StarsContainer>
                {starElements}
            </StarsContainer>
        </div>
    );
};

Stars.propTypes = {
    rating: PropTypes.number
};

export default Stars;