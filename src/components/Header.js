import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

const HeaderBackground = styled.header`
	background-color: transparent;
	position: fixed;
	height: 55px;
	width: 100%;
`;

const HeaderWrapper = styled.div`
	left: 20%;
	width: 60%;
	margin: 0 auto;

	a {
		color: white;
	}
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
		<HeaderBackground>
			<HeaderWrapper>
				<StyledHeader>
					<img src={logo} alt='logo' />
					<StyledNav>
						<ul>
							<li>
								<a href='#history'>01. HISTORY</a>
							</li>
							<li>
								<a href='#team'>02. TEAM</a>
							</li>
						</ul>
					</StyledNav>
				</StyledHeader>
			</HeaderWrapper>
		</HeaderBackground>
	);
};

export default Header;
