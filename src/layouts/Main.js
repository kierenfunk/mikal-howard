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
	clear:both;
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
				<SellingPoints points={data.selling_points}/>
				<Services services={services}/>
			</div>
			</PageWrapper>
		</ParallaxProvider>
		)
})`
	.summary {
		font-size:1.4rem;
		text-align:center;
	}
	h2 {
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
