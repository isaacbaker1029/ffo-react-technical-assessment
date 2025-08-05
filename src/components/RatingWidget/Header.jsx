import React from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';
import RatingSentiment from './RatingSentiment.jsx';
import feefoLogo from '../../assets/feefo-logo.png';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stack all items vertically */
  align-items: center;    /* Center them horizontally */
  padding: 32px 16px 8px 16px;
`;

const RatingValueText = styled.p`
  color: #777777;
  font-size: 1.1em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 8px 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FooterText = styled.span`
  color: #777777;
  font-size: 1.2em;
  font-weight: 600;
  padding-right: 2px;
`;

const Logo = styled.img`
  height: 48px;
  padding-left: 2px;
  margin-bottom: 12px;
`;


const Header = ({ averageRating }) => {
    return (
        <HeaderWrapper>
            {/* Line 1 */}
            <RatingSentiment rating={averageRating} />

            {/* Line 2 */}
            <Stars rating={averageRating} />

            {/* Line 3 */}
            <RatingValueText>{averageRating} out of 5</RatingValueText>

            {/* Line 4 */}
            <Footer>
                <FooterText>Product Rating</FooterText>
                <Logo src={feefoLogo} alt="Feefo logo" />
            </Footer>
        </HeaderWrapper>
    );
};

export default Header;