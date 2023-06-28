import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { colors } from '../../core/constants/styleguide.const'
import Logo from "../../png/logo.png";
import { H4 } from '../styleguide/styleguide'
import { RESPONSIVE } from '../../core/constants/responsive.const'

type Props = {
	title: string
}
const Header = ({ title }: Props) => {
	return (
		<div className="App-header">
			<h1>{title}</h1>
      <StyledLogoSection>
        <StyledLogo src={Logo} alt='logo' style={{ borderRadius: "100%" }}></StyledLogo>
        <StyledLogoTitle>{`Share Cart`}</StyledLogoTitle>
      </StyledLogoSection>
      <StyledLoginLink to={"#"}>{`Log In`}</StyledLoginLink>
		</div>
	)
}

const StyledLoginLink = styled(Link)`
  position: absolute;
  top: 10px;
  right:20px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: ${colors.neutrals8};
`;

const StyledLogoSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 1px;
  left: 0px;
  @media screen and (min-width: ${RESPONSIVE.small}){
    top: 10px;
    left: 10px
  }
`;

const StyledLogo = styled.img`
  width: 40px;
  height: 25px;
  @media screen and (min-width: ${RESPONSIVE.small}){
    width: 60px;
    height: 30px;
  }
`;

const StyledLogoTitle = styled(H4)`
  font-family: "Poppins";
  font-size: 16px;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    font-size: 24px;
  }
`;

export default Header
