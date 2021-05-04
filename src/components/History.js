import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import mountainImage from '../images/section1_mountains.png';
import carouselImage1 from '../images/c1.png';
import carouselImage2 from '../images/c2.png';

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-image: url(${mountainImage});
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;

	h2 {
		display: flex;

		position: relative;

		.number {
			font-size: 100px;
		}

		.title {
			position: absolute;
			left: 116px;
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
	flex-direction: column;

	p {
		margin-left: 65px;
		margin-top: -38px;
	}
`;

const StyledCarousel = styled(Slider)`
	background-color: #344158;
	opacity: 0.8;
	height: 230px;
	width: 100%;

  .slick-dots {
    margin-bottom: 30px;
    color: red;
  }

  .slick-slide img {
    margin: 10px auto;
  }

  .slick-dots li.slick-active button::before {
    opacity: 1;
    color: white;
  }

  .slick-dots li button::before {
    opacity: 1;
    color: gray;
  }
`;

const History = () => {
	const settings = {
		dots           : true,
		infinite       : true,
		speed          : 500,
		slidesToShow   : 1,
		slidesToScroll : 1
	};
	return (
		<StyledSection>
			<WrapperDiv>
				<Title>
					<h2>
						<span className='number'>01.</span>{' '}
						<span className='title'>History</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Accusantium repudiandae ad,
						porro, possimus expedita nam velit, tempora
						exercitationem suscipit error consectetur? Nisi
						veritatis voluptatem cum officia vel nulla ipsam
						et?
					</p>
				</Title>
			</WrapperDiv>
			<StyledCarousel {...settings}>
				<div>
					<img src={carouselImage1} alt='' />
				</div>
				<div>
					<img src={carouselImage2} alt='' />
				</div>
			</StyledCarousel>
		</StyledSection>
	);
};

export default History;
