import DefaultPage from '../layouts/DefaultPage';
import propRetrieval from '../utils/propRetrieval.js';

const About = ({data,content,services}) => (
	<DefaultPage data={data} content={content} services={services}/>
)

export async function getStaticProps(context) {
	const data = await propRetrieval('about.md');
	return {
		props:{...data}
	}
}

export default About;
