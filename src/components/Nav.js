import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Close = styled(({className}) => {
	return (
		<div className={className}>
			<img src="/images/close.svg"/>
		</div>
)
})`
	height:100%;
	width:100%;
	text-align:right;
	img {
		height:50%;
	}
`

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

const Social = styled(({className,src,href}) => {
	return (
		<div className={className}>
			<a href={href}><img src={src}/></a>
		</div>
)
})`
	height:100%;
	display:inline;
	padding-left:1.6rem;
	img {
		color:red;
		height:50%;
	}
	@media (min-width:568px){
		padding-left:2rem;
		img {
			height:60%;
		}
	}
`
const Phone = styled(({className}) => {
	return (
		<div className={className}>
			<img src="/images/phone.svg"/>
		</div>
)
})`
	height:100%;
	width:100%;
	text-align:right;
	img {
		height:50%;
		transform:rotate(270deg);
	}
`

const MenuIcon = styled(({className,open}) => {
	return (
		<div className={`${className}`}>
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
	z-index:3;
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
	}

	span {
		position:relative;
		display:block;
		height:0.2rem;
		background-color:black;
		margin-bottom:0.4rem;
		width:100%;
		transition:transform 0.3s ease-in-out;
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
`

const Nav = styled(({className}) => {
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
				<div className={"menu-icon hide-md"} onClick={()=>{
						setOpenResponsive(!openResponsive);
						setOpenServices(false);	
					}}>
					<MenuIcon open={openResponsive}/>	
				</div>
				<div className={`overlay${openServices? ' fade-in' : ' fade-out'}`}></div>
				<div className={`main-navigation${openResponsive? ' open-resp' : ''}`} style={{right:`${width}px`}}>
						<div className={`services-menu${openServices? ' open' : ''}`}>
							<div className="services-column">
								<div className="services-cell hide-md" onClick={()=>{setOpenServices(false)}}><Arrow left={true}/></div>
								<div className="services-cell">
									<a href="/">Home Loans</a>
									<p>test</p>
								</div>
								<div className="services-cell"><a href="/">Small Business</a></div>
								<div className="services-cell"><a href="/">Insurance</a></div>
								<div className="services-cell"><a href="/">Car and Asset</a></div>
								<div className="services-cell"><a href="/">Utilities</a></div>
							</div>
						</div>
						<div className="column-1">
							<div className="cell"><a href="/">About</a><div className="cell-icon"></div></div>
							<div className="cell">
								<div className={`services-link-wrapper ${openServices? 'open-services' : ''}`}>
									<div className={`services-link`} onClick={()=>{setOpenServices(true)}}>
										Services
										<div className="cell-icon"><Arrow right={true}/></div>
									</div>
									<div className="services-link" onClick={()=>{setOpenServices(false)}}>
										Close
										<div className="cell-icon"><Close/></div>
									</div>
								</div>
							</div>
							<div className="cell"><a href="/">Contact</a><div className="cell-icon"></div></div>
							<div className="cell services-link"><a href="tel:+61419820366">0419 820 366</a><div className="cell-icon"><Phone/></div></div>
							<div className={"cell social"} style={{right:`${16+width}px`}}>
								<Social href="/" src="/images/twitter.svg"/>
								<Social href="/" src="/images/facebook.svg"/>
								<Social href="/" src="/images/youtube.svg"/>
								<Social href="/" src="/images/linkedin.svg"/>
								<div className="cell-icon"></div>
							</div>
						</div>
					</div>
			</div>)	

})`
	font-family: 'Roboto', sans-serif;

	.main-navigation, .services-menu {
		background-color:white;
		position:fixed;
		box-sizing:border-box;
		z-index:2;
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

	.main-navigation.open-resp, .services-menu.open{
		transform:translateX(-100%);
	}

	.services-menu {
		z-index:3;
	}

	.column-1, .services-column {
		text-align:right;
	}

	.cell, .services-cell {
		font-size:2rem;
		line-height:3rem;
		height:3rem;
		overflow:hidden;
	}
	
	.cell a, .services-cell a{
		color:black;
		text-decoration:none;
	}
	.cell {
		display:flex;
		justify-content:flex-end;
	}
	.services-link {
		height:100%;
		display:flex;
		justify-content:flex-end;
		cursor:pointer;
	}
	.cell-icon {
		width:2.5rem;
		height:100%;
	}
		
	.overlay {
		width:100%;
		height:100%;
		position:fixed;
		left:0;
		top:0;
		z-index:1;
		background-color:black;
		display:none;
	}
	@media (min-width: 568px) {
		.cell, .services-cell {
			font-size:2.4rem;
			line-height:3.4rem;
			height:3.4rem;
		}
	}
	
	@media (min-width: 768px) {
		.menu-icon, .hide-md {
			display:none;
		}
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
		.cell {
			font-size:1rem;
			font-weight:bold;
			text-transform:uppercase;
			line-height:24px;
			height:24px;
		}
		.cell-icon {
			width:1.2rem;
		}
		.services-link-wrapper {
			transition: transform 0.3s ease-in-out;
			position:relative;
			z-index:3;
		}
		.open-services {
			transform:translateY(-100%);
		}
		.social {
			position:fixed;
			bottom:2rem;
			height:auto;
			flex-direction:column;
			align-items:center;
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

		.services-menu {
			justify-content:flex-start;
			padding:10%;
			min-width:768px;
			max-width:61.8%;
		}
		.services-column {
			text-align:left;
		}

	}
`

export default Nav;
