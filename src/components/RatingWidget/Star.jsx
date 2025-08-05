import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StarContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 2px;
  border-radius: 8px;
  background-color: #e0e0e0;
  overflow: hidden;
`;

const StarFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #ffc107;
  width: ${props => props.percentage}%;
`;

const StarIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; 
  font-size: 30px;
  -webkit-text-stroke: 1px white;
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

Star.propTypes = {
    fillPercentage: PropTypes.number.isRequired
};

export default Star;