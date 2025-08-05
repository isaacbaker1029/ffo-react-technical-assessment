import React from 'react';
import styled from 'styled-components';
import Header from "./RatingWidget/Header.jsx";
import RatingDistribution from "./RatingWidget/RatingDistribution.jsx";
import PropTypes from 'prop-types';

const WidgetWrapper = styled.div`
  background-color: white;
  border-radius: 24px;
  width: 375px;
  max-width: 550px; /* This controls the size of the widget */
  overflow: hidden;
  border: 1px solid lightgray;
`;

const RatingWidget = ({ reviewData }) => {
    return (
        <WidgetWrapper>
            <Header
                averageRating={reviewData.averageRating}
            />
            <RatingDistribution
                distribution={reviewData.distribution}
                totalReviews={reviewData.totalReviews}
            />
        </WidgetWrapper>
    );
};

RatingWidget.propTypes = {
    reviewData: PropTypes.shape({
        averageRating: PropTypes.number,
        totalReviews: PropTypes.number,
        distribution: PropTypes.array
    }).isRequired
};

export default RatingWidget;