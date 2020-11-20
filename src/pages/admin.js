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

export default function Admin() {
	const [loaded,setLoaded] = useState(false);
	useEffect(()=>{
		(async () => {
			const CMS = (await import('netlify-cms-app')).default;
			CMS.init();
			CMS.registerPreviewTemplate('home', ({ entry }) => (
				<StyleInjection>
					<Main data={entry.toJS().data}/>
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

