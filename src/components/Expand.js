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
		background-color:${props=>props.dark? 'white' : 'black'};
	}
	
	> span:first-child {
		transform:rotate(90deg);
	}
`

const ExpandContent = styled(({className,open,children})=>{
	const ref = useRef(null);
	return (
		<div ref={ref} className={className} style={{maxHeight:`${ref.current&&open? ref.current.scrollHeight : 0}px`}}>
			<ReactMarkdown source={children}/>
		</div>
	)
})`
	overflow: hidden;
	transition: max-height 0.3s ease-in-out,opacity 0.3s ease-in-out;
	opacity:${props=>props.open? 1 : 0};
`

const ExpandHeader = styled(({className,item,open,onClick,dark})=>(
	<div className={className}>
		<h3>What can you expect?</h3>
		<Toggle open={open} onClick={onClick} dark={dark}/>
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
		text-decoration:none;
		transition: none;
	}

	h3 > a:hover {
		color:var(--red);
	}
`

const ExpandItem = styled(({className,item,dark,open})=>{
	return (
		<div className={className}>
			<ExpandContent open={open}>
				{item.step_body}
			</ExpandContent>
		</div>
	)
})`
	border-top:1px solid rgba(${props=>props.dark? '255,255,255' : '0,0,0'},${props=>props.open? '1' : '0'});
	width:100%;
	margin:auto;
	transition:0.4s;
	padding:1% 2%;
	box-sizing:border-box;
`

const Expand = styled(({className,items,title,dark})=>{
	const [open,setOpen] = useState(false);
	return (
		<div className={className}>
			<ExpandHeader
				open={open}
				dark={dark}
				onClick={()=>setOpen(!open)}
			/>
			{items.map((item,i)=><ExpandItem item={item} key={i} dark={dark} open={open}/>)}
		</div>
	)
})`
	text-align:left;
`

export default Expand;
