// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { delay } from '@/lib/delay';
import { RESORT_LIST } from '../../../../../DATA/RESORT_LIST';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const slug = req.query.slug;
	const resort = RESORT_LIST.find((resort) => resort.slug === slug);
	await delay(2000);
	if (resort) {
		res.status(200).json(resort);
	} else {
		res.status(404).json({ error: 'Resort Not found' });
	}
}
