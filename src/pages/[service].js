import DefaultPage from '../layouts/DefaultPage';
import propRetrieval from '../utils/propRetrieval.js';

const Service = ({data,content,services}) => (
	<DefaultPage data={data} content={content} services={services}/>
)

export async function getStaticProps(context) {
	const data = await propRetrieval(`services/${context.params.service}.md`);
	return {
		props:{...data}
	}
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      return key.replace(/^.*[\\\/]/, '').slice(0, -3)
    })
    return data
  })(require.context('../markdown/services', true, /\.md$/))

  const paths = blogSlugs.map((slug) => ({params:{service:`${slug}`}}))

  return {
    paths,
    fallback: false,
  }
}

export default Service;

/*

import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const About = ({className,services,data}) => (
	<div className={className}>
		{console.log(data)}
	</div>	
)

export async function getStaticProps(context) {
  const postsDirectory = path.join(process.cwd(), 'src/markdown/services');
  const filenames = fs.readdirSync(postsDirectory);

	const services = []
	await filenames.map(async (file) =>{
		const content = await import(`../markdown/services/${file}`);
		const data = matter(content.default);
		data.data.slug = file.slice(0,file.length-3);
		services.push(data.data)
	})
	
  const { service } = context.params
  const content = await import(`../markdown/services/${service}.md`)
  const data = matter(content.default)

	return {
		props:{
			data:data.data,
			services
		}
	}
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      return key.replace(/^.*[\\\/]/, '').slice(0, -3)
    })
    return data
  })(require.context('../markdown/services', true, /\.md$/))

  const paths = blogSlugs.map((slug) => ({params:{service:`${slug}`}}))

  return {
    paths,
    fallback: false,
  }
}

export default About;*/
