import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

const HeaderWrapper = styled.header`
	background: transparent;
	position: fixed;
	left: 20%;
	width: 60%;
	margin: 0 auto;
`;

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const StyledNav = styled.nav`
	ul {
		li {
			list-style: none;
			display: inline;

			font-size: 10px;
			font-style: italic;
			font-weight: bold;
			border-bottom: 2px solid white;
			color: white;
		}

		li:first-child {
			margin-right: 40px;
		}
	}
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<StyledHeader>
				<img src={logo} alt='logo' />
				<StyledNav>
					<ul>
						<li>01. HISTORY</li>
						<li>02. TEAM</li>
					</ul>
				</StyledNav>
			</StyledHeader>
		</HeaderWrapper>
	);
};

export default Header;
