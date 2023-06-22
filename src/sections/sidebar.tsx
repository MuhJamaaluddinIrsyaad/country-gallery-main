import Link from 'next/link';
import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';
import { Country } from '@prisma/client';

export const Sidebar = ({
	country_list,
}: {
	country_list: Country[];
}) => {
	return (
		<div>
			<h3 className="font-bold mb-6">COUNTRIES</h3>
			<div className="flex flex-col gap-4">
				{country_list.map((country) => (
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
