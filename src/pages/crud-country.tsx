import { Gallery } from '@/components/gallery';
import { getCountriesFromDb } from '@/queries/getCountries';
import { ResortList } from '@/sections/resortList';
import { Country, Resort } from '@prisma/client';
import Head from 'next/head';

export default function Page({
	country_list
}: {
	country_list: Country[];
}) {
	return (
		<div>
			<h3 className="font-bold mb-6">COUNTRIES</h3>
			<div className="flex flex-col gap-4">
				{country_list.map((country) => (
					<div
						key={country.slug}
						className="hover:underline"
					>
						- {country.name}
					</div>
				))}
			</div>
            <div>
                <label htmlFor="name">name</label>
                <input className="border-2" type="text" id="name"/>
            </div>
            <div>
                <label htmlFor="slug">slug</label>
                <input className='border-2' type="text" id="slug"/>
            </div>
            <div>
                <label htmlFor="image_url">image_url</label>
                <input className='border-2' type="text" id="image_url"/>
            </div>
            <button>submit</button>
		</div>
	);
}

export async function getStaticProps() {
	const countries = await getCountriesFromDb();
	return {
		props: {
			country_list: countries,

		},
	};
}
