import Phone from '../components/Icons/Phone';
import Mail from '../components/Icons/Mail';
import phoneToDialable from '../utils/phoneToDialable';

const TopBar = ({email, phone}) => (
	<div className="text-right bg-gray-200 px-2 py-1 hidden md:block">
		<div className="inline px-2"><a className="text-gray-800 hover:text-red-600" href={`tel:${phoneToDialable(phone)}`}><Phone/> {phone}</a></div>
		<div className="inline px-2"><a className="text-gray-800 hover:text-red-600" href={`mailto:${email}`}><Mail/> {email}</a></div>
	</div>
)

export default TopBar;