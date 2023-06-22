import Image from 'next/image';
import Link from 'next/link';
import s from '../sections/places.module.css';
import { Country } from '@prisma/client';

interface Props {
	country_list: Country[];
}
export const Gallery = ({ country_list }: Props) => {
	return (
		<ul className={s.gallery}>
			{country_list.map((country, index) => (
				<li key={index}>
					<Link href={`/list?country=${country.slug}`}>
						<Image
							src={country.image_url}
							alt={country.name}
							width={420}
							height={320}
						/>
						<p className={s.countryText}>
							{country.name}
						</p>
					</Link>
				</li>
			))}
		</ul>
	);
};
