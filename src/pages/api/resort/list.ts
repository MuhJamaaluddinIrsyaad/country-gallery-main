// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { RESORT_LIST } from '../../../../DATA/RESORT_LIST';
import { delay } from '@/lib/delay';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// check if country is in param and return resort list accordingly
	const country = req.query.country;
	const filteredResort = RESORT_LIST.filter(
		(resort) => resort.country_slug === country
	);
	await delay(2000);
	if (country) {
		res.status(200).json(filteredResort);
	}
	res.status(200).json(RESORT_LIST);
}
