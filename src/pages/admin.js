import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { StyleSheetManager } from 'styled-components';
import Main from '../layouts/Main';
import InfoPage from '../layouts/InfoPage';

const StyleInjection = ({children}) => {
	const [frame,setFrame] = useState('');
	useEffect(()=>{
		const iframe = document.querySelector('#nc-root iframe');
		setFrame(iframe && iframe.contentDocument.head);
	},[]);
	
	return (
		<StyleSheetManager target={frame}>
			{children}
		</StyleSheetManager>
	)
}

const defaultServices = [
  {
    "slug": "car-asset",
    "title": "Car and Asset",
    "logo": "images/logo.png"
  },
  {
    "slug": "connect",
    "title": "Connect",
    "logo": "images/logo.png"
  },
  {
    "slug": "finance",
    "title": "Finance",
    "logo": "images/logo.png"
  },
  {
    "slug": "insurance",
    "title": "Insurance",
    "logo": "images/logo.png"
  },
  {
    "slug": "small-business",
    "title": "Small Business",
    "logo": "images/logo.png"
  }
]

const defaultMain = {
  "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "selling_points": [
    {
      "header": "Point 1",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      "header": "Point 2",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      "header": "Point 3",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ],
  "testimonials": [
    {
      "name": "Tammy E.",
      "body": "I have worked with Mikal for several years. He is professional and responsive, yet extremely friendly and non-intimidating.  Mikal has a true passion to help his clients structure their property finance portfolio in the best possible way to help them achieve their long term goals.  No matter how busy he is; he pays strong attention to detail and gives all the time in the world to his clients.  I have no hesitation in recommending Mikal to my clients, family and friends."
    },
    {
      "name": "Andrew M.",
      "body": "Mikal is a true professional! Great at what he does and proud of the people he helps!"
    },
    {
      "name": "Claire S.",
      "body": "Mikal is a lovely person to deal with, always friendly yet very professional and efficient. I wouldn’t hesitate to recommend him to family and friends and both my husband and I are very appreciative of the service he provided us."
    },
    {
      "name": "Tara S.",
      "body": "Mikal is extremely professional, provides fantastic customer service and acts very quickly to secure the best home loan deal possible. Couldn't be any happier with how quickly we found our home, secured the loan and moved into the new house."
    }
  ],
  "home_about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

export default function Admin() {
	const [loaded,setLoaded] = useState(false);
	useEffect(()=>{
		(async () => {
			const CMS = (await import('netlify-cms-app')).default;
			CMS.init();
			CMS.registerPreviewTemplate('home', ({ entry }) => (
				<StyleInjection>
					<Main data={{...defaultMain,...entry.toJS().data}} content={''} services={defaultServices}/>
				</StyleInjection>
			))
			CMS.registerPreviewTemplate('privacy_policy', ({ entry }) => (
				<StyleInjection>
					<InfoPage data={entry.toJS().data} content={entry.toJS().data.body} services={defaultServices}/>
				</StyleInjection>
			))
			CMS.registerPreviewTemplate('compliments_concerns', ({ entry }) => (
				<StyleInjection>
					<InfoPage data={entry.toJS().data} content={entry.toJS().data.body} services={defaultServices}/>
				</StyleInjection>
			))
			CMS.registerPreviewStyle("normalize.css");
			CMS.registerPreviewStyle("global.css");
			CMS.registerPreviewStyle("fonts/Futura-Book.css");
			setLoaded(true);
		})();
	},[])

	return (
		<div>
			<Head>
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
			</Head>
		{loaded? null : <div>loading.....</div>}
		</div>
	)
}

