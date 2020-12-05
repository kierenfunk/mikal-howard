import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LinkedIn from '../icons/LinkedIn';
import Twitter from '../icons/Twitter';
import Youtube from '../icons/Youtube';
import Close from '../icons/Close';
import Facebook from '../icons/Facebook';
import Phone from '../icons/Phone';
import DropLeft from '../icons/DropLeft';
import DropRight from '../icons/DropRight';
import DropDown from '../icons/DropDown';

const Arrow = styled(({className,size,left}) => {
	return (
		<div className={className}>
			<img src="/images/arrow.svg"/>
		</div>
)
})`
	height:100%;
	width:100%;
	text-align:right;
	img{
		cursor:pointer;
		height:50%;	
		transform: ${props=>props.left? "rotate(180deg)":"rotate(0deg)" };
	}
`

const MenuIcon = styled(({className,open,onClick}) => {
	return (
		<div className={`${className}`} {...{onClick}}>
			<div className={`wrapper ${open? ' open':''}`}>
				<span></span>
				<span></span>
				<div className={"label"}>
					<div>menu</div>
					<div>close</div>
				</div>
			</div>
		</div>
	)

})`
	position:fixed;
	z-index:103;
	top:0;
	right:0;
	padding:1rem;

	.wrapper {
		cursor:pointer;
	}

	.label {
		font-family: 'Roboto',sans-serif;
		font-size:16px;
		font-weight:bold;
		height:20px;
		line-height:20px;
		overflow:hidden;
		color:${props=>props.dark? 'white':'black'};
		transition:color 0.6s ease-in-out;
		margin-top:0.5rem;
	}

	span {
		position:relative;
		display:block;
		height:0.2rem;
		margin-bottom:0.4rem;
		width:100%;
		background-color:${props=>props.dark? 'white':'black'};
		transition:transform 0.3s ease-in-out,background-color 0.6s ease-in-out;
	}
	
	.open span:first-child {
		transform:translateY(0.3rem) rotate(30deg);
	}

	.open span:nth-child(2) {
		transform:translateY(-0.3rem) rotate(-30deg);
	}
	.wrapper .label > div {
		transition: transform 0.3s ease-in-out;
		text-transform:uppercase;
		text-align:center;
	}
	.open .label > div {
		transform:translateY(-100%);
	}
	@media (min-width: 768px) {
		display:none;
	}
`

const ServicesMenu = styled(({className,dark,open,onClick,services})=>{
	return (
	<div className={className}>
		<div className="services-column">
			<div className="services-cell hide-md" onClick={onClick}><Arrow left={true}/></div>
			{
				services.map((service,i)=>(
					<div key={i} className="services-cell">
						<a href={`/${service.slug}`}>
							{service.title}
						</a>
					</div>
				))	
			}
		</div>
	</div>
)})`
	background-color:white;
	position:fixed;
	box-sizing:border-box;
	z-index:102;
	height:100%;
	width:100%;
	top:0;
	left:100%;
	display:flex;
	align-items:center;
	justify-content:flex-end;
	padding-right:10%;
	transition:transform 0.3s ease-in-out;
	transform:${props=>props.open? 'translateX(-100%)':'translateX(0%)'};
	color:black;

	.services-column {
		text-align:right;
	}

	.services-cell {
		font-size:2rem;
		line-height:3rem;
		height:3rem;
		overflow:hidden;
	}
	.services-cell a{
		text-decoration:none;
		font-family:'Futura',sans-serif;
		transition: color 0.6s ease-in-out;
	}
	.services-cell a:hover{
		color:var(--red);
		transition:none;
	}
	
	.services-cell > a {
		color:black;	
	}
	@media (min-width: 568px) {
		.services-cell {
			font-size:2.4rem;
			line-height:3.4rem;
			height:3.4rem;
		}
	}
	
	@media (min-width: 768px) {
		.hide-md {
			display:none;
		}
		justify-content:flex-start;
		padding:10%;
		min-width:768px;
		max-width:61.8%;
		.services-column {
			text-align:left;
		}
	}
`

const Social = styled(({className,dark,children,...props})=>(
	<div className={className} {...props}>
		{children}
	</div>
))`
	margin-right:2.5rem;
	font-size:inherit;
	fill:${props=>props.dark? 'white':'black'};
	svg {
		margin-left:0.8rem;
		transition:fill 0.6s ease-in-out;
	}
	svg:hover {
		fill:var(--red);
		transition:none;
	}
	@media (min-width: 768px) {
		margin-right:0;
		font-size:2rem;
		position:fixed;
		bottom:2rem;
		right:2rem;
		display:flex;
		flex-direction:column;
		align-items:center;
	}
`

const Icon = styled(({className,children,...props}) => (
	<div className={className} {...props}>
		{children}
	</div>
))`
	width:2.5rem;
	display:flex;
	align-items:center;
	justify-content:flex-end;
	font-size:inherit;
	@media (min-width: 768px) {
		width:1.4rem;
	}
`
const MainMenu = styled(({className,openServices,width,dark,services,setOpen,home})=>(
	<div className={className}>
		<ul style={{right:""}}>
			{!home?<li><a href="/">Home<Icon/></a></li>: null}
			<li><a href="/about">About<Icon/></a></li>
			<li onClick={()=>setOpen(!openServices)}>
				<div className={`${openServices? 'move-up':''}`}>Services<Icon><DropRight/></Icon></div>
				<div className={`${openServices? 'move-up':''}`}>Close<Icon><Close/></Icon></div>
			</li>
			<li><a href="#contact">Contact<Icon/></a></li>
			<li><a href="tel:+61419820366">0419 820 366<Icon><Phone/></Icon></a></li>
			<Social dark={dark} style={{right:`${16+width}px`}}>
				<a href="/"><Facebook/></a>
				<a href="/"><Youtube/></a>
				<a href="/"><Twitter/></a>
				<a href="/"><LinkedIn/></a>
				<Icon/>
			</Social>
		</ul>
	</div>

))`
	text-align:right;
	position:relative;
	ul {
		position:relative;
		font-size:min(2rem,9vw);
	}
	li>div {
		position:relative;
		transform:translateY(0%);
	}
	li>div,li>a {
		display:flex;
		justify-content:flex-end;
		height:3rem;
		color:${props=>props.dark? 'white':'black'};
		fill:${props=>props.dark? 'white':'black'};
		cursor:pointer;
		align-items:center;
		transition:transform 0.3s ease-in-out, color 0.6s ease-in-out, fill 0.6s ease-in-out;
		text-decoration:none;
		font-family:'Futura',sans-serif;
	}
	li>div:hover,li>a:hover {
		color:var(--red);
		fill:var(--red);
		transition:none;
	}
	li {
		overflow:hidden;
		height:3rem;
	}
	@media (min-width: 568px) {
		ul{
			min-width:auto;
			font-size:2.4rem;
		}
		li,li>div,li>a{
			height:3.4rem;
		}
	}

	@media (min-width: 768px) {
		li>div,li>a {
			text-transform:uppercase;
			font-family:'Roboto',sans-serif;
		}
		ul{
			font-size:1rem;
			font-weight:bold;
		}
		li,li>div,li>a{
			height:1.5rem;
		}
		li>div{
			z-index:105;
		}
		.move-up{
			transform:translateY(-100%);
		}
	}
`

const Nav = styled(({className,home,dark,services}) => {
	const [openServices, setOpenServices] = useState(false);
	const [openResponsive, setOpenResponsive] = useState(false);
	const [width,setWidth] = useState(0);

	useEffect(()=>{
		if(openResponsive || openServices){
			setWidth(window.innerWidth - document.body.clientWidth);
			document.body.style.width = `${document.body.clientWidth}px`;
			document.body.style.overflow = 'hidden';
			document.body.scroll = 'no';
		}
		else {
			document.body.style.overflow = 'auto';
			document.body.scroll = 'yes';
			setWidth(document.body.offsetWidth - document.body.clientWidth);
			document.body.style.width = "auto";
		}

	},[width,openResponsive,openServices])

	return (
			<div className={className}>
				<MenuIcon open={openResponsive} onClick={()=>{
						setOpenResponsive(!openResponsive);
						setOpenServices(false);	
				}} dark={dark&&!openResponsive}/>	
				<div className={`overlay${openServices? ' fade-in' : ' fade-out'}`}></div>
				<div className={`main-navigation${openResponsive? ' open-resp' : ''}`} style={{right:`${width}px`}}>
					<ServicesMenu {...{open:openServices,dark,services}} onClick={()=>{setOpenServices(false)}}/>
					<MainMenu {...{openServices,width,dark:dark&&(!openServices&&!openResponsive),services,setOpen:setOpenServices,home}}/>
				</div>
			</div>)	

})`

	.main-navigation {
		background-color:white;
		position:fixed;
		box-sizing:border-box;
		z-index:102;
		height:100%;
		width:100%;
		top:0;
		left:100%;
		display:flex;
		align-items:center;
		justify-content:flex-end;
		padding-right:10%;
		transition:transform 0.3s ease-in-out;
	}

	.main-navigation.open-resp{
		transform:translateX(-100%);
	}
	.overlay {
		width:100%;
		height:100%;
		position:fixed;
		left:0;
		top:0;
		z-index:101;
		background-color:black;
		display:none;
	}
	@media (min-width: 768px) {
		.main-navigation {
			background-color:transparent;
			position:fixed;
			left:auto;
			height:auto;
			right:0;
			top:0;
			padding:2rem 1rem 2rem 0;
			width:auto;
			display:block;
		}
		.main-navigation.open-resp {
			transform: translateX(0);	
		}
		.overlay {
			display:block;
		}
		.overlay.fade-in {
			opacity:0.8;
			visibility:visible;
			transition:opacity 0.3s ease-in-out;
		}
		.overlay.fade-out {
			opacity:0;
			visibility:hidden;
			transition:visibility 0s ease-in-out 300ms,opacity 0.3s ease-in-out;
		}
	}
`

export default Nav;
