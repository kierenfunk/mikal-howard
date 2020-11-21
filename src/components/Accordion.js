import {useRef,useState} from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Toggle = styled(({className,open,onClick}) => (
	<div onClick={onClick} className={`${className} ${open? ' open': ''}`}>
		<span></span>
		<span></span>
	</div>
))`
	height:3rem;
	width:3rem;
	position:relative;
	transition: transform 0.3s ease-in-out;
	cursor:pointer;
	transform:${props=>props.open? 'rotate(-135deg)': 'rotate(0deg)'};

	:hover{
		transform:${props=>props.open? 'rotate(-135deg)': 'rotate(-5deg)'};
	}
	span {
		position:absolute;
		top:1.4rem;
		display:block;
		height:0.2rem;
		width:100%;
		background-color:black;
	}
	
	> span:first-child {
		transform:rotate(90deg);
	}
`

const AccordionContent = styled(({className,open,children})=>{
	const ref = useRef(null);
	return (
		<div ref={ref} style={{maxHeight:`${open? ref.current.scrollHeight : 0}px`}} className={className}>
			<ReactMarkdown source={children}/>
		</div>
	)
})`
	overflow: hidden;
	transition: max-height 0.3s ease-in-out,opacity 0.3s ease-in-out;
	opacity:${props=>props.open? 1 : 0};
`

const AccordionHeader = styled(({className,item,open,onClick})=>(
	<div className={className}>
		<h3><a href={`/${item.slug}`}>{item.title}</a></h3>
		<Toggle open={open} onClick={onClick}/>
	</div>
))`
	display:flex;	
	align-items:center;
	h3 {
		flex-grow:1;
		margin:1.5rem 0;
	}

	h3 > a {
		font-family:'Futura',sans-serif;
		color:black;
		text-decoration:none;
	}

	h3 > a:hover {
		color:var(--red);
	}
`

const AccordionItem = styled(({className,item})=>{
	const [open,setOpen] = useState(false);
	return (
		<div className={className}>
			<AccordionHeader
				item={item}
				open={open}
				onClick={()=>setOpen(!open)}
			/>
			<AccordionContent open={open}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</AccordionContent>
		</div>
	)
})`
	border-top:1px solid black;
	width:100%;
	margin:auto;
	transition:0.4s;
	padding:1% 2%;
	box-sizing:border-box;
`

const Accordion = styled(({className,items})=>(
	<div className={className}>
		{items.map((item,i)=><AccordionItem item={item} key={i}/>)}
	</div>
))``

export default Accordion;
