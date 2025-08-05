import React from 'react';
import styled from 'styled-components';
import RatingDistributionElement from "./RatingDistributionElement.jsx";
import PropTypes from 'prop-types';

const DistributionWrapper = styled.div`
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
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

RatingDistribution.propTypes = {
    distribution: PropTypes.arrayOf(PropTypes.shape({
        stars: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired
    })).isRequired,
    totalReviews: PropTypes.number.isRequired
};

export default RatingDistribution;