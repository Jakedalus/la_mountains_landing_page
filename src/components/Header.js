import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 60%;
	margin: 0 auto;
`;

const StyledNav = styled.nav`
	ul {
		li {
			list-style: none;
			display: inline;
			margin-right: 40px;

			font-size: 10px;
			font-style: italic;
			border-bottom: 1px solid black;
		}
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<img src={logo} alt='logo' />
			<StyledNav>
				<ul>
					<li>01. HISTORY</li>
					<li>02. TEAM</li>
				</ul>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
