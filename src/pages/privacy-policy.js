import InfoPage from '../layouts/InfoPage.js';
import propRetrieval from '../utils/propRetrieval.js';

const PrivacyPolicy = ({data,content,services}) => (
	<InfoPage data={data} content={content} services={services}/>
)

export async function getStaticProps(context) {
	const data = await propRetrieval('privacy-policy.md');
	return {
		props:{...data}
	}
}

export default PrivacyPolicy;
