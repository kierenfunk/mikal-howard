import {useRef,useEffect,useState,useCallback} from 'react';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import PageWrapper from '../components/PageWrapper';
import Accordion from '../components/Accordion';
import Section from '../components/Section';
import Arrow from '../icons/Arrow';
import {Link as SmoothLink} from 'react-scroll';

/*
fill basic data
testimonials
about
contact
menu colour hovers
extended services menu hover with summary
sitemap generator
*/


const BgCoverImage = styled(({className,children,image})=>(
	<div className={className}>
		<SmoothLink className="scroll arrow-wrapper" smooth={true} to="summary">
			<p>scroll</p>
			<div>
				<Arrow/>
			</div>
		</SmoothLink>
	</div>
))`
	flex:100%;
	background-image: url(${props=>props.image});
	background-position:center;
	background-size:cover;
	background-repeat: no-repeat;
	min-height:110vw;
	width:85vw;
	margin:auto;
	position:relative;

	.arrow-wrapper {
		display:none;
	}

	@keyframes mymove {
		from {bottom: 2.5px;}
		25% {bottom:5px;}
		75% {bottom:0px;}
		to {bottom:2.5px;}
	}

	@media (min-width:568px) {
		min-height:624px;
		width:482.8px;
	}
	@media (min-width:1024px) {
		flex:38.8%;
		min-height:auto;
		width:auto;
		margin:0;

		.arrow-wrapper {
			position:absolute;
			bottom:0;
			right:2rem;
			margin:1.6rem;
			display:block;
			cursor:pointer;
			display:flex;
		}
	
		.arrow-wrapper > p {
			margin:0;
			padding:0 0.3rem 0 0;
			text-transform:uppercase;
			font-weight:bold;
			color:white;
		}
		svg {
			position:absolute;
			bottom:2.5px;
			animation: mymove 1.5s infinite linear;
		}
		.arrow-wrapper:hover svg {
			bottom:2.5px;
			animation: none;
		}
	}
`

const HeaderContent = styled(({className})=>(
	<div className={className}>
		<div>
			<img src={require("../../public/images/logo.png?resize&size=300")}/>
		</div>
		<div className={"text"}>
			<h1>Your Loan,<br></br>Your Way</h1>
			<p>Finance from a local broker you can trust</p>
		</div>
	</div>	
))`
	box-sizing:border-box;
	flex:100%;
	text-align:center;
	padding:3%;
	display:flex;
	flex-direction:column;
	img {
		max-width:70%;	
		padding:5%;
		box-sizing:border-box;
	}
	p {
		font-size:1.4rem;
	}
	h1 {
		margin:1rem 0rem;
		line-height:1.1;
	}
	.text {
		flex-grow:1;
		display:flex;
		justify-content:center;
		flex-direction:column;
	}
	@media (min-width:568px) {
		h1 {
			font-size:5rem;
		}
	}
	@media (min-width:1024px) {
		flex:61.2%;	
		text-align:left;
		img {
			padding:0;
		}
		h1 {
			font-size:6rem;
		}
	}
	@media (min-width:1280px) {
		h1 {
			font-size:8rem;
		}
	}
`

const Header = styled(({className})=>(
	<div className={className}>
		<HeaderContent/>
		<BgCoverImage image={require("../../public/images/mikal.jpg?resize&size=600")}/>
	</div>
))`
	min-height:100vh;
	display:flex;
	flex-direction:column;
	@media (min-width:1024px) {
		flex-direction:row-reverse;
	}
`

const SellingPoints = styled(({className,points})=>(
		<Section>
			<div className={className}>
				{points.map((item,i)=>(
						<div className={"item"} key={i}>
							<h3>{item.header}</h3>
							<ReactMarkdown>
								{item.body}
							</ReactMarkdown>
						</div>
					))}
			</div>
		</Section>
))`
	display:flex;
	flex-direction:column;
	box-sizing:border-box;
	.item {
		background-color:#eee;
		flex: 100%;
		box-sizing:border-box;
		margin:1%;
		padding:0 2%;
	}

	@media (min-width:1280px) {
		flex-direction:row;
		.item {
			flex: 33%;
		}
	}
`

const Services = styled(({className,services})=>(
	<div className={className}>
		<Section>
			<h2>Our Services</h2>
			<Accordion items={services}/>
		</Section>
	</div>
))`
	h2 {
		text-align:center;
	}
`

const Theme = styled.div`
	h1,h2,h3,h4,h5,h6,p,small,a{
		color:${props=>props.dark?'white':'black'};
		transition: color 0.6s ease-in-out;
	}
	.section,body {
		transition: background-color 0.6s ease-in-out;
		background-color:${props=>props.dark?'#222':'white'};
	}
`

const Main = styled(({className,data,content,services}) => {
	const ref = useRef(null);
	const [darkTheme,setTheme] = useState(false);

  const handleScroll = useCallback(event => {
		const bounding = ref.current.getBoundingClientRect();
		if(	bounding.top < (window.innerHeight/4 || document.documentElement.clientHeight/4)){
			if(!darkTheme){setTheme(true)}
		}
		else if(darkTheme){setTheme(false)}
  }, [ref,darkTheme]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
	return (
	<ParallaxProvider>
		<Theme dark={darkTheme}>
			<PageWrapper home={true}>
			<Header/>
			<div className={className}>
				<Section id="summary">
					<div className="summary">
						<ReactMarkdown source={data.summary}/>
					</div>
				</Section>
			</div>
			<SellingPoints points={data.selling_points}/>

			<Services services={services}/>
			{/* change theme here */}
			<div ref={ref}>
				<Parallax y={[-10,10]} styleOuter={{textAlign:'center',width:"100%"}}>
					<img style={{maxWidth:"100%"}} src={require("../../public/images/mikal2.jpg?resize&size=1000")}/>
				</Parallax>
			</div>
			{/*testimonials */}
			<Section>
				<h2>About Us</h2>
				<ReactMarkdown source={data.home_about}/>
			</Section>
			{/*about */}
			{/*contact */}
			</PageWrapper>
		</Theme>
	</ParallaxProvider>
)})`
	.summary {
		font-size:1.4rem;
		text-align:center;
	}
	@media (min-width:568px) {
		.summary {
			font-size:1.7rem;
		}
	}
	@media (min-width:768px) {
		.summary {
			font-size:2rem;
		}
	}
`

export default Main;
