import Image from 'next/image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import Nav from '../components/Nav';

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

const List = styled(({className})=>(
	<div className={className}>
		<h2>Services we offer</h2>
	</div>
))`
	h2 {
		width:100%;
		font-size:4rem;
		line-height:1.5;
		padding-top:1rem;
		text-align:center;
		font-family:'Futura',sans-serif;
		border-top:1px solid black;
		border-bottom:1px solid black;
	}	
`

const Main = styled(({className}) => {
	return (
		<ParallaxProvider>
			<Nav/>
			<Header/>
			<div className={className}>
				<div className="summary">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
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
					<List/>
				</div>
				<div className="second">
			<h1>Section 1</h1>
			<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</div>
		<div className="second">
			<h1>Section 2</h1>
			<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</div>
		</div>
		</ParallaxProvider>
		)
})`
	.summary {
		font-family:'Roboto',sans-serif;
		font-size:2rem;
		line-height:1.5;
		text-align:center;
		background-color:#eee;
		border-top:1px solid black;
		border-bottom:1px solid black;
		padding:10%;
		padding-right:max(10rem,10%);
		width:100%;
		box-sizing:border-box;
	}

	.services {
		clear:both;
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

	.left {
		width:38.2%;
		z-index:0;
		position:relative;
	}
	.right {
		position:fixed;
		z-index:-1;
		top:0;
		width:61.8%;
		height:100vh;
		margin-left:38.2%;
		display:flex;
		flex-direction:column;
		box-sizing:border-box;
		padding:2%;
		
	}
	.right > .logo {
	}
	.right > .content {
		display:flex;
		align-items:flex-start;
		flex-direction:column;
		justify-content:center;
		flex-grow:1;
	}	
	.second {
		height:100%;
		padding:10%;
		width:100%;
		box-sizing:border-box;
		background-color:white;
	}
`

export default Main;
