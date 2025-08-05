import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ElementWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
`;

const Label = styled.span`
  color: #A0A0A0;
  width: 40px;
  text-align: left;
  text-align-last: center;
`;

const ProgressBarContainer = styled.div`
  flex-grow: 1;
  height: 12px;
  background-color: #E0E0E0;
  border-radius: 2px;
  margin: 0 12px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #ffc107;
  width: ${props => props.$width}%;
  border-radius: 2px;
`;

const Count = styled.span`
  color: #A0A0A0;
  width: 40px; // Gives space for the number
  text-align: left;
  margin-left: 8px;
`;


const RatingDistributionElement = ({ stars, count, totalReviews }) => {
  const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;

  return (
    <ElementWrapper>
        {/* aria-hidden tells screen readers to ignore these visual-only elements */}
        <Label aria-hidden="true">{stars} ★</Label>
        <ProgressBarContainer>
            <ProgressBarFill
                $width={percentage}
                role="progressbar"
                aria-valuenow={count}
                aria-valuemin="0"
                aria-valuemax={totalReviews}
                aria-label={`${stars} star rating: ${count} of ${totalReviews} total reviews`}
            />
        </ProgressBarContainer>
        <Count aria-hidden="true">{count}</Count>
    </ElementWrapper>
  );
};

RatingDistributionElement.propTypes = {
    stars: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    totalReviews: PropTypes.number.isRequired
};

export default RatingDistributionElement;