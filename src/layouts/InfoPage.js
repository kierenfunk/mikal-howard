import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import PageWrapper from '../components/PageWrapper';

const Page = styled(({className,data,content,services})=>{
	return(	
		<PageWrapper home={false} dark={false} services={services}>
			<div className={className}>
				<div className="logo">
					<a href="/"><img src={require("../../public/images/logo.png?resize&size=300")}/></a>
				</div>
				<h1>{data.title}</h1>
				<ReactMarkdown source={content}/>
			</div>
		</PageWrapper>
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
