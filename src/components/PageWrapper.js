import Nav from './Nav';
import Footer from './Footer';

const PageWrapper = ({children,home}) => (
	<div>
		<div id="top"></div>
		<Nav home={home}/>
		{children}
		<Footer/>
	</div>
)

export default PageWrapper;
