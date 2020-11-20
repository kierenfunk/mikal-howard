import styled from 'styled-components';
import {Link as SmoothLink} from 'react-scroll';

const Footer = styled(({className})=>{
	return(
		<footer className={className}>
			<SmoothLink className="scroll" smooth={true} to="top">Back to Top</SmoothLink>
			<ul>
				<li><a href="/privacy-policy">Privacy Policy</a></li>
				<li><a href="/compliments-concerns">Compliments and Concerns</a></li>
				<li><a href="/">Sitemap</a></li>
			</ul>
			<small>
				Credit Representative 452798 is authorised under Australian Credit Licence 389328<br></br>
				This page provides general information only and has been prepared without taking into account your objectives, financial situation or needs. We recommend that you consider whether it is appropriate for your circumstances and your full financial situation will need to be reviewed prior to acceptance of any offer or product. It does not constitute legal, tax or financial advice and you should always seek professional advice in relation to your individual circumstances. Subject to lenders terms and conditions, fees and charges and eligibility criteria apply.<br></br>
				© Mikal Howard Finance 2020. All Rights Reserved.
			</small>
			<p>Website by <a href="https://www.kierenfunk.com">Kieren Funk</a></p>
		</footer>
	)
})`
	padding:10%;
	background-color:#ddd;
	box-sizing:border-box;
	.scroll {
		cursor:pointer;
	}
	a {
		color:black;
		text-decoration:none;
	}
	a:hover {
		text-decoration:underline;
	}
	ul > li {
		margin:0;
		padding:0.2rem 0;
	}

	ul {
		list-style-type:none;
		margin:2rem 0;
		padding:0;
	}

	@media (min-width: 768px) {
		ul > li {
			display:inline-block;
			padding:0 1rem;
		}
		ul > li:first-child {
			padding-left:0;
		}
	}
`

export default Footer;
