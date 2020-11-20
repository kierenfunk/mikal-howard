import InfoPage from '../layouts/InfoPage.js';
import propRetrieval from '../utils/propRetrieval.js';

const ComplimentsConcerns = ({data,content,services}) => (
	<InfoPage data={data} content={content} services={services}/>
)

export async function getStaticProps(context) {
	const data = await propRetrieval('compliments-concerns.md');
	return {
		props:{...data}
	}
}

export default ComplimentsConcerns;
