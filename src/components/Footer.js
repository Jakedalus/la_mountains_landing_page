import React from 'react';
import styled from 'styled-components';
import logo from '../images/footer_logo.png';

const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #414f6b;
	height: 50px;
`;

const StyledFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 60%;

	font-size: 9px;
	font-weight: bold;
	color: rgba(0, 0, 0, 0.5);

	div span {
		font-family: 'PT Sans Narrow', sans-serif;
		filter: brightness(100%);
	}
`;

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	img {
		margin-right: 5px;
		opacity: 0.2;
	}
`;

const StyledSpan = styled.div`
	display: flex;
	flex-direction: column;
	filter: brightness(100%);
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<StyledFooter>
				<StyledDiv>
					<img src={logo} alt='logo' />
					<StyledSpan>
						<span>LOSANGELES</span> <span>MOUNTAINS</span>
					</StyledSpan>
				</StyledDiv>
				<div>COPYRIGHT 2021. ALL RIGHTS RESERVED.</div>
			</StyledFooter>
		</FooterWrapper>
	);
};

export default Footer;
