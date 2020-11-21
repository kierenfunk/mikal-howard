import styled from 'styled-components';

const Arrow = styled(({className}) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 50" >
		<path d="M0 0 L100 0 L50 50 Z"/>
	</svg> 
))`
	fill:white;
	height:1rem;
`

export default Arrow;
