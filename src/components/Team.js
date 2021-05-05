import React, { useState } from 'react';
import styled from 'styled-components';
import mountainImageOne from '../images/section2_tab1_mountains.png';
import mountainImageTwo from '../images/section2_tab2_mountains.png';

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	h2 {
		display: flex;

		position: relative;

		.number {
			font-size: 100px;
		}

		.title {
			position: absolute;
			left: 130px;
			top: 55px;
			font-size: 20px;
		}
	}
`;

const WrapperDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 60%;
`;

const Title = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 60%;
	margin: 0 auto;
	p {
		margin-left: 65px;
		// margin-top: -38px;
	}
`;

const Container = styled.div`background-color: white;`;

const Header = styled.div`background-color: blue;`;

const Tabs = styled.div`
	display: flex;
	align-items: center;
	width: 60%;
	height: 30px;
	margin: 0 auto;

	div {
		display: flex;
		align-items: center;
		cursor: pointer;

		background-color: gray;
		height: 100%;
		padding: 0 10px;

		span {
			border-bottom: 2px solid black;
		}
	}

	div.active {
		background-color: red;
		color: gray;
		span {
			border-bottom: 2px solid gray;
		}
	}
`;

const MountainOne = styled.section`
	width: 100%;
	background-image: url(${mountainImageOne});
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
`;

const MountainTwo = styled.section`
	width: 100%;
	background-image: url(${mountainImageTwo});
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
`;

const MountainContainer = styled.div`
	width: 60%;
	margin: 0 auto;
`;

const Schedule = styled.div`
	background-color: white;
	opacity: 0.8;
	width: 250px;
	margin-left: 20px;
	margin-top: 80px;
	padding: 10px 30px;

	h3 {
		margin: 10px 0;
	}

	table {
		border-collapse: separate;
	}

	tr.space td {
		padding-bottom: 20px;
	}
`;

const Team = () => {
	const [ tabOneActive, setTabOneActive ] = useState(true);
	const [ tabTwoActive, setTabTwoActive ] = useState(false);

	const handleClickTab = e => {
		console.log(`e.target`, e.target);
		console.log(`e.target.innerText`, e.target.innerText);
		console.log(
			`e.target.innerText === 'Mountain 1'`,
			e.target.innerText === 'Mountain 1'
		);
		if (e.target.innerText === 'Mountain 1') {
			setTabOneActive(true);
			setTabTwoActive(false);
		} else if (e.target.innerText === 'Mountain 2') {
			setTabOneActive(false);
			setTabTwoActive(true);
		}
	};

	return (
		<StyledSection>
			<Container>
				<Title>
					<h2>
						<span className='number'>02.</span>{' '}
						<span className='title'>Climb</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Asperiores sapiente
						perspiciatis tempore enim accusamus fugit quam
						sed nihil.
					</p>
				</Title>
				<Header>
					<Tabs>
						<div
							className={tabOneActive ? 'active' : ''}
							onClick={handleClickTab}
						>
							<span>Mountain 1</span>
						</div>
						<div
							className={tabTwoActive ? 'active' : ''}
							onClick={handleClickTab}
						>
							<span>Mountain 2</span>
						</div>
					</Tabs>
				</Header>
			</Container>
			{tabOneActive && (
				<MountainOne>
					<MountainContainer>
						<Schedule>
							<h3>Schedule</h3>
							<table>
								<tr>
									<td>25 Nov 2016</td>
									<td>Vestibulum viverra</td>
								</tr>
								<tr className='space'>
									<td>28 Nov 2016</td>
									<td>Vestibulum viverra</td>
								</tr>

								<tr className='space'>
									<td>18 Dec 2016</td>
									<td>Vestibulum viverra</td>
								</tr>

								<tr>
									<td>7 Jan 2017</td>
									<td>Vestibulum viverra</td>
								</tr>
							</table>
						</Schedule>
					</MountainContainer>
				</MountainOne>
			)}
			{tabTwoActive && (
				<MountainTwo>
					<MountainContainer>
						<Schedule>
							<h3>Schedule</h3>
							<table>
								<tr className='space'>
									<td>17 Nov 2016</td>
									<td>Vestibulum viverra</td>
								</tr>

								<tr>
									<td>13 Dec 2016</td>
									<td>Vestibulum viverra</td>
								</tr>
								<tr className='space'>
									<td>28 Dec 2016</td>
									<td>Vestibulum viverra</td>
								</tr>

								<tr>
									<td>9 Feb 2017</td>
									<td>Vestibulum viverra</td>
								</tr>
							</table>
						</Schedule>
					</MountainContainer>
				</MountainTwo>
			)}
		</StyledSection>
	);
};

export default Team;
