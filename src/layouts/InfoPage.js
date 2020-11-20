import styled from 'styled-components';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import ReactMarkdown from 'react-markdown';

const Page = styled(({className,data,content,services})=>{
	return(	
		<div>
			<Nav home={false}/>
			<div id="top"></div>
			<div className={className}>
				<div className="logo">
					<a href="/"><img src={require("../../public/images/logo.png?resize&size=300")}/></a>
				</div>
				<h1>{data.title}</h1>
				<ReactMarkdown source={content}/>
			</div>
			<Footer/>
		</div>
)})`
	text-align:center;
	width:100%;
	padding:5%;
	margin:auto;
	box-sizing:border-box;

	.logo {
		padding-top:1rem;
		width:80%;
		margin:auto;
	}
	h1,h2,h3,h4,h5,h6,p {
		text-align:left;
	}
	
	@media (min-width:768px) {
		padding-right:10rem;
	}
	@media (min-width:1024px) {
		padding:5% 2%;
		max-width:60vw;
	}
`

export default Page;
