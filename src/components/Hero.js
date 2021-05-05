import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/hero_mountains.png';

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${heroImage});
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;

	h1 {
		display: flex;
		flex-direction: column;
		font-size: 100px;
		font-family: 'PT Sans Narrow', sans-serif;
		width: 60%;

		span:first-child {
			color: #4d4d4d;
		}

		span:last-child {
			color: #414f6b;
		}
	}
`;

const Hero = () => {
	return (
		<StyledDiv>
			<h1>
				<span>LOSANGELES</span> <span>MOUNTAINS</span>
			</h1>
		</StyledDiv>
	);
};

export default Hero;
