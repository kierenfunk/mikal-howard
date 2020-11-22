import styled from 'styled-components';

const SVG = styled(({className,children,...props})=>(
	<svg className={className} focusable="false" viewBox="0 0 24 24" {...props}>
		{children}
	</svg>
))`
	aria-hidden:true;
	fill:inherit;
	width: 1em;
	height: 1em;
	display: inline-block;
	font-size: inherit;
	flex-shrink: 0;
	-moz-user-select: none;
`
export default SVG;


