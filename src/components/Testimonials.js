import {useState} from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import ForwardArrow from '../icons/ForwardArrow';
import BackArrow from '../icons/BackArrow';
import { Carousel } from 'react-responsive-carousel';

const TestimonialItem = styled(({className,dark,index,testimonial})=>(
	<div className={className}>
		<h3>{testimonial.name}</h3>
		<ReactMarkdown source={testimonial.body}/>
	</div>
))`
	padding:3%;
	max-width:768px;
	text-align:left;

`

const Testimonials = styled(({className,dark,testimonials}) => {
	const [slide,setSlide] = useState(0);
	return(
	<div className={className}>
		<h2>What people are saying</h2>
		<div className={"buttons"}>
			<BackArrow onClick={()=>setSlide((slide+testimonials.length-1)%testimonials.length)} style={{cursor:"pointer"}}/>
			<ForwardArrow onClick={()=>setSlide((slide+1)%testimonials.length)} style={{cursor:"pointer"}}/>
		</div>
		<Carousel
			dynamicHeight={true}
			infiniteLoop={true}
			showStatus={false}
			showThumbs={false}
			showIndicators={false}
			autoPlay={true}
			swipeable={true}
			stopOnHover={true}
			showArrows={false}
			selectedItem={slide}
			onChange={(e)=>{setSlide(e)}}
		>	
				{
					testimonials.map((testimonial,i)=>(
						<TestimonialItem {...{testimonial,dark,key:i}}/>
					))
				}
		</Carousel>
	</div>
)})`
	.carousel .slide {
		background:transparent;
	}
	.buttons {
		font-size:3rem;
		fill:white;
	}

	.buttons > svg {
		transition: fill 600ms ease-in-out;
	}
	svg:first-child {
		margin:0 3rem 0 1rem;
	}
	.buttons > svg:hover {
		fill:var(--red);
		transition:none;
	}
`

export default Testimonials;
