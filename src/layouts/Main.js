import {ParallaxProvider, Parallax} from 'react-scroll-parallax';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import PageWrapper from '../components/PageWrapper';
import Accordion from '../components/Accordion';
import Section from '../components/Section';

/*
fill basic data
summary
selling points??
services
testimonials
about
contact
footer
menu colour hovers
extended services menu hover with summary
sitemap generator
*/

const Header = styled(({className})=>{
	return (
		<div className={className}>
			<div className="content">
				<div className="logo">
					<img src={require("../../public/images/logo.png?resize&size=300")}/>
				</div>
				<h1>Your Loan,<br/> Your Way</h1>
				<p>Finance from a local broker you can trust</p>
			</div>
			<div className="image">
				<Parallax y={[10, -20]}>
					<img 
						src={require("../../public/images/mikal.jpg?resize&size=1024")}
					/>
				</Parallax>
			</div>
		</div>
	)
})`
	min-height:100vh;
	text-align:center;
	padding:2%;
	box-sizing:border-box;
	display:flex;
	flex-wrap:wrap;
	flex-direction:row-reverse;
	
	img {
		visibility: visible;
		padding: 0px;
		border: medium none;
		margin: auto;
		max-width: 100%;
		max-height: 100%;
	}

	h1 {
		font-family:'Futura',sans-serif;
		font-size:3.4rem;
		position:relative;
		z-index:1;
	}
	p {
		font-family:'Roboto',sans-serif;
		font-size:1.2rem;
	}
	.logo {
		padding-top:1rem;
		width:50%;
		margin:auto;
	}
	.content {
		flex:100%;
		box-sizing:border-box;
	}
	.image {
		flex:100%;
		width:70%;
		max-width:440px;
		margin:auto;	
	}

	@media (min-width:568px) {
		h1 {
			font-size:5rem;
		}
	}
	@media (min-width:1024px) {
		padding:0;
		text-align:left;
		.logo {
			width:50%;
			margin:0;
		}
		.content{
			flex:61.2%;	
			padding:3%;
		}
		.image {
			width:100%;
			max-width:100%;
			flex:38.8%;
		}	
		h1 {
			font-size:6rem;
			margin:4rem 0 2rem 0;
		}
	}
	@media (min-width:1280px) {
		h1 {
			font-size:8rem;
		}
	}
`

const Main = styled(({className,data,content,services}) => {
	return (
		<ParallaxProvider>
			<PageWrapper home={true}>
			<Header/>
			<div className={className}>
				<Section>
					<div className="summary">
						<ReactMarkdown source={data.summary}/>
					</div>
				</Section>
				<div className="selling-points">
					<div>
						<h3>Point 1</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>	
					<div>
						<h3>Point 2</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>	
					<div>
						<h3>Point 3</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>	
				</div>

				<div className="services">
					<Section>
						<h2>Our Services</h2>
						<Accordion items={services}/>
					</Section>
				</div>
			</div>
			</PageWrapper>
		</ParallaxProvider>
		)
})`
	.summary {
		font-size:2rem;
		text-align:center;
		background-color:#eee;
	}
	.services {
		clear:both;
	}
	h2 {
		text-align:center;
	}
	.selling-points {
		width:100%;
	}
		
	.selling-points > div {
		float:left;
		width:33%;
		box-sizing:border-box;
		padding:5%;
	}
`

export default Main;
