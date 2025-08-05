import React from 'react';
import styled from 'styled-components';
import RatingDistributionElement from "./RatingDistributionElement.jsx";

const DistributionWrapper = styled.div`
  padding: 16px;
  width: 100%;
  box-sizing: border-box; // Ensures padding doesn't add to the width
`;

const RatingDistribution = ({ distribution, totalReviews }) => {
  return (
    <DistributionWrapper>
      {distribution.map(item => (
        <RatingDistributionElement
          key={item.stars}
          stars={item.stars}
          count={item.count}
          totalReviews={totalReviews}
        />
      ))}
    </DistributionWrapper>
  );
};

export default RatingDistribution;