import { Inter } from 'next/font/google';
import { Hero } from '@/sections/hero';
import { Places } from '@/sections/places';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

import { getCountriesFromDb } from '@/queries/getCountries';
import { Country } from '@prisma/client';

export default function Home({
	country_list,
}: {
	country_list: Country[];
}) {
	// *****
	// TODO:
	// 1. please change how to get the countryList data using Static Side Generation (SSG) from "/api/resort/countries"
	// *****
	console.log();
	return (
		<main>
			<Head>
				<title>Homepage - The Best Resort</title>
			</Head>
			<Hero />
			<Places country_list={country_list} />
		</main>
	);
}

// export async function getStaticProps() {
	
// 	const res = await fetch('https://the-best-resort.vercel.app/api/resort/countries')
// 	const posts = await res.json()

// 	return {
// 	  props: {
// 		posts,
// 	},
// 	}
//   }

  export async function getStaticProps() {
	const countries = await getCountriesFromDb();
	return {
		props: {
			country_list: countries,
		},
	};
}
