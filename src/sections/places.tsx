import React from 'react';
import s from './places.module.css';
import Link from 'next/link';
import { Gallery } from '@/components/gallery';
import { Country } from '@prisma/client';

interface Props {
	country_list: Country[];
}

export const Places = ({ country_list }: Props) => {
	return (
		<section className="py-20 px-6">
			<h2
				style={{
					fontSize: 120,
					marginBottom: 12,
				}}
			>
				Norwood Resorts
			</h2>
			<p className="mb-20">
				At Norwood Resorts, we&apos;re a US-based interior
				design agency that specializes in sustainable
				commercial design. With a track record of
				award-winning projects in Europe, North America, and
				Asia, we&apos;re passionate about creating spaces that
				are both beautiful and environmentally responsible.
				Contact us today to schedule a consultation and see
				how we can help transform your space.
			</p>
			<h3 className="text-2xl font-bold mb-6">Countries</h3>
			<Gallery country_list={country_list} />
		</section>
	);
};
