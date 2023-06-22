import { Gallery } from '@/components/gallery';
import { getCountriesFromDb } from '@/queries/getCountries';
import { ResortList } from '@/sections/resortList';
import { Country, Resort } from '@prisma/client';
import Head from 'next/head';
import { getResortsFromDb } from '@/queries/getResorts';

export default function Page({
	country_list, resort_list
}: {
	country_list: Country[], resort_list: Resort[];
}) {
	return (
		<main>
			<Head>
				<title>Resort List - The Best Resort</title>
			</Head>
			<ResortList country_list={country_list} resort_list={resort_list}/>
		</main>
	);
}

export async function getStaticProps() {
	const countries = await getCountriesFromDb();
	const resorts = await getResortsFromDb();
	return {
		props: {
			country_list: countries,
			resort_list: resorts,

		},
	};
}
