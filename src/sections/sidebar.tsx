import Link from 'next/link';
import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';

export const Sidebar = () => {
	// *****
	// TODO:
	// 1. please change how to get the data using client-side fetching from "/api/resort/countries"
	// 2. check if the country parameter and filter the data accordingly
	const data = COUNTRY_LIST;
	// *****
	return (
		<div>
			<h3 className="font-bold mb-6">COUNTRIES</h3>
			<div className="flex flex-col gap-4">
				{data.map((country) => (
					<Link
						key={country.slug}
						href={`/list?country=${country.slug}`}
						className="hover:underline"
					>
						- {country.name}
					</Link>
				))}
			</div>
		</div>
	);
};
