import Nav from './Nav';
import Footer from './Footer';

const PageWrapper = ({children,home,dark,services}) => (
	<div>
		<div id="top"></div>
		<Nav {...{home,dark,services}}/>
		{children}
		<Footer/>
	</div>
)

export default PageWrapper;
