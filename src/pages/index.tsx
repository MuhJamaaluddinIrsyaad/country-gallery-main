import { Inter } from 'next/font/google';
import { Hero } from '@/sections/hero';
import { Places } from '@/sections/places';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ posts }) {
	// *****
	// TODO:
	// 1. please change how to get the countryList data using Static Side Generation (SSG) from "/api/resort/countries"
	console.log(posts);
	// *****

	return (
		<main>
			<Hero />
			<Places countryList={posts} />
		</main>
	);
}

export async function getStaticProps() {
	
	const res = await fetch('https://the-best-resort.vercel.app/api/resort/countries')
	const posts = await res.json()

	return {
	  props: {
		posts,
	},
	}
  }
