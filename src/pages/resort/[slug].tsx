import { generateRandomImg } from '@/lib/generateRandomImg';
import prisma from '@/lib/prisma';
import { Resort } from '@prisma/client';
import Head from 'next/head';
import Image from 'next/image';

export default function Page({
	resort_data,
}: {
	resort_data: Resort;
}) {
	return (
		<main>
			<Head>
				<title>{resort_data.name}</title>
				<meta name="description" content={resort_data.name} />
			</Head>
			<Image
				src={resort_data.image_url}
				alt={resort_data.name}
				width={1440}
				height={900}
				className="w-full max-h-[70vh] object-cover"
			/>
			<div className="text-center max-w-[1200px] mx-auto my-40">
				<h1 className="text-4xl mx-auto w-fit mb-8">
					{resort_data.name}
				</h1>
				<p>{resort_data.description}</p>
			</div>
		</main>
	);
}

export async function getServerSideProps({ query: { slug } }: any) {
	const data = await prisma.resort.findFirst({
		where: {
			slug: slug,
		},
	});
	return {
		props: {
			resort_data: data,
		},
	};
}
