import Main from '../layouts/Main';
import propRetrieval from '../utils/propRetrieval.js';

const Index = ({data,content,services}) => (
	<Main data={data} content={content} services={services}/>
)

export async function getStaticProps(context) {
	const data = await propRetrieval('home.md');
	return {
		props:{...data}
	}
}

export default Index;
