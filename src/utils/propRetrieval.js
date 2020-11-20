import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const propRetrieval = async (file) => {
  const directory = path.join(process.cwd(), 'src/markdown/services');
  const filenames = fs.readdirSync(directory);

	const services = []
	await filenames.map(async (file) =>{
		const content = await import(`../markdown/services/${file}`);
		services.push(matter(content.default).data);
	});

	const mainPage = await import(`../markdown/${file}`);
	const {data,content} = matter(mainPage.default);
	return {data,content,services}
}

export default propRetrieval;
