import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { colors } from '../../core/constants/styleguide.const'
import Logo from "../../png/logo.png";

type Props = {
	title: string
}
const Header = ({ title }: Props) => {
	return (
		<div className="App-header">
			<h1>{title}</h1>
      <StyledLogo>
        <img src={Logo} width={80} height={48} alt='logo' style={{ borderRadius: "100%" }}></img>
      </StyledLogo>
      <StyledLoginLink to={"#"}>{`Log In`}</StyledLoginLink>
		</div>
	)
}

const StyledLoginLink = styled(Link)`
  position: absolute;
  top: 10px;
  right:20px;
  font-family: "Poppins";
  font-size: 14px;
  color: ${colors.neutrals8};
`;

const StyledLogo = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export default Header
