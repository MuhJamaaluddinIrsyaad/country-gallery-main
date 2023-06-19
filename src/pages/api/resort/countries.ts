// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { COUNTRY_LIST } from '../../../../DATA/COUNTRY_LIST';
import { delay } from '@/lib/delay';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await delay(1000);
	res.status(200).json(COUNTRY_LIST);
}
