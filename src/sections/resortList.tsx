import Link from 'next/link';
import { RESORT_LIST } from '../../DATA/RESORT_LIST';
import { Sidebar } from './sidebar';
import Image from 'next/image';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Country, Resort } from '@prisma/client';

// const getResortList = async (url: string) => {
// 	const res = await fetch(url);
// 	const data = await res.json();
// 	return data;
// };

export const ResortList = ({
	country_list,resort_list
}: {
	country_list: Country[], resort_list: Resort[];
}) => {
	const router = useRouter();
	const country = router.query.country;

	// const { data, error, isLoading } = useSWR<Resort[]>(
	// 	() =>
	// 		'/api/resort/list' +
	// 		(country ? `?country=${country}` : ''),
	// 	getResortList
	// );

	// if (isLoading) return <p>...isLoading</p>;
	// if (error) return <p>Something went wrong</p>;

	return (
		<section className="p-8 flex gap-16 justify-between">
			<div className="flex-1">
				<h1 className="text-4xl font-bold mb-6">
					{/* TODO: Change Resort List to Name of the Selected Country, if its selected */}
					Resort List
				</h1>
				<div className="flex flex-col gap-12 w-fit">
					{resort_list.map((resort) => (
						<Link
							key={resort.slug}
							className="flex gap-32 text-xl shadow-lg items-center justify-between p-8 rounded-sm hover:bg-slate-200 transition-all"
							href={`/resort/${resort.slug}`}
						>
							{resort.name}
							<Image
								src={resort.image_url}
								alt={resort.name}
								width={520}
								height={300}
								className="object-cover h-32 w-60"
							/>
						</Link>
					))}
				</div>
			</div>
			<Sidebar country_list={country_list} />
		</section>
	);
};
