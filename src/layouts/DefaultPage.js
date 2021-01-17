import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import PageWrapper from '../components/PageWrapper';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Expand from '../components/Expand';
import Swirl from '../icons/Swirl';
import DropDown from '../icons/DropDown';

const Body = styled(({className,content})=>(
	<div className={className}>
		<ReactMarkdown source={content}/>
	</div>
))`
	text-align:left;
`

const Page = styled(({className,data,content,services})=>{
	return(	
		<PageWrapper home={false} dark={false} services={services}>
			<div className={className}>
				<div className="header">
					<div className="logo">
						<a href="/"><img src={require("../../public/images/logo.png?resize&size=300")}/></a>
					</div>
					<div className="content-wrapper">
						<div className="title">
							<h2>{data.header_title}</h2>
						</div>
						<p>see more <DropDown/></p>
					</div>
					<div className="swirl">
						<Swirl dark={false}/>
					</div>
				</div>
				<Section>
					<Body content={data.body_text}/>
				</Section>
				<Section>
					<Expand items={data.process} dark={false}/>
					<img className="page-img" src={require(`../../public/${data.picture}?resize&size=800`)}/>
				</Section>
				<Section>
					<Body content={data.cta}/>
				</Section>
				<Section>
					<ContactForm dark={false} title={""}/>
				</Section>
			</div>
		</PageWrapper>
)})`
	text-align:center;
	width:100%;
	margin:auto;
	box-sizing:border-box;

	.page-img {
		margin-top:3%;
	}

	.logo {
		padding-top:3rem;
		width:100%;
	}

	h1 {
		text-align:center;
	}
	@keyframes rotate {
		from {transform: rotate(0deg);}
		to {transform: rotate(360deg);}
	}
	.swirl {
		position:absolute;
		fill:#e3e3e3;
		width:50%;
		bottom:-40%;
		right:-15%;
		animation: rotate 40s linear infinite;
		overflow-x:hidden;
		z-index:0;
	}
	.header {
		min-height:100vh;
		background-color:#eee;
		box-sizing:border-box;
		position:relative;
		overflow:hidden;
		display:flex;
		flex-direction:column;
	}
	.content-wrapper {
		position:relative;
		z-index:1;
		flex-grow:1;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		padding:0 10%;
	}
	.content-wrapper > p {
		text-transform: uppercase;
		font-family:'Roboto',sans-serif;
		font-weight:bold;
	}
	.content-wrapper > .title {
		display:flex;
		align-items:center;
		flex-grow:1;
	}
	@media (min-width:768px) {
	}
	@media (min-width:1024px) {
	}
`

export default Page;
