import styled from 'styled-components';

const Section = styled(({className,children})=>(
	<div className={className}>
		{children}
	</div>	
))`
	padding:5%;
	width:100%;
	box-sizing:border-box;

	@media (min-width:768px) {
		padding-right:12rem;
	}
	@media (min-width:1024px) {
		padding:10%;
		padding-right:max(12rem,10%);
	}
`

export default Section;
