import React from 'react';
import styled from 'styled-components';

const StarContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;  /* Control the size of the box */
  height: 50px;
  margin: 0 2px;
  border-radius: 8px; /* The rounded corners for the box */
  background-color: #e0e0e0; /* The gray background */
  overflow: hidden; /* This is important to keep the rounded corners */
`;

const StarFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #ffc107; /* The yellow fill */
  width: ${props => props.percentage}%; /* The 'wrapper thing' to control fill */
`;

const StarIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* The silver-grayish star in the center */
  font-size: 30px; /* Adjust size of star to fit in the box */
  -webkit-text-stroke: 1px white; /* Optional: adds a thin white border to the star */
  text-stroke: 1px white;
`;

const Star = ({ fillPercentage }) => {
    return (
        <StarContainer>
            {/* The yellow progress-bar fill */}
            <StarFill percentage={fillPercentage} />
            {/* The gray star icon on top */}
            <StarIcon>★</StarIcon>
        </StarContainer>
    );
};

export default Star;