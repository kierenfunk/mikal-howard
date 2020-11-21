import styled from 'styled-components';

const Section = styled(({className,children,...props})=>(
	<div className={`${className} section`} {...props}>
		{children}
	</div>	
))`
	padding:5% 2%;
	width:100%;
	box-sizing:border-box;
	
	@media (min-width:768px) {
		padding-right:12rem;
	}
	@media (min-width:1024px) {
		padding:7% 10%;
		padding-right:max(12rem,10%);
	}
`

export default Section;
