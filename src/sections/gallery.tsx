import { generateRandomImg } from '@/lib/generateRandomImg';
import Image from 'next/image';
import Link from 'next/link';
import s from './places.module.css';

export const Gallery = ({ data }) => {
	return (
		<ul className={s.gallery}>
			{data.map((item, index) => (
				<li key={index}>
					<Link href={`/list?country=${item.slug}`}>
						<Image
							src={item.image_url}
							alt={item.name}
							width={420}
							height={320}
						/>
						<p className={s.countryText}>{item.name}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};
