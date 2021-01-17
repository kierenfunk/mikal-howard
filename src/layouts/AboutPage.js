import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import PageWrapper from '../components/PageWrapper';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';
import Swirl from '../icons/Swirl';
import DropDown from '../icons/DropDown';

const Body = styled(({className,title,content})=>(
	<Section>
		<div className={className}>
			<h2>{title}</h2>
			<ReactMarkdown source={content}/>
		</div>
	</Section>
))`
	text-align:left;
`

const Quote = styled(({className,content})=>(
	<Section>
		<div className={className}>
			<h1>{'"'}</h1><h3>{content}</h3><h1>{'"'}</h1>
		</div>
	</Section>
))`
	h1, h3 {
		display:inline;
	}
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
							<h2>{data.title}</h2>
						</div>
						<p>see more <DropDown/></p>
					</div>
					<div className="swirl">
						<Swirl dark={false}/>
					</div>
				</div>
				<Body title="Our mission" content={data.mission}/>
				<Body title="What is my background?" content={data.background}/>
				<Quote content={data.quote}/>
				<Body content={data.cta}/>
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
