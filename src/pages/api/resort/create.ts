// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method != 'POST') res.status(405).end();

	// check if country is in param and return resort list accordingly

	res.status(200).json({
		message: 'Success',
	});
}
