import prisma from '../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const { name, slug, image_url } = req.body;

      const result = await prisma.country.create({
        data: {
			name: name,
			slug: slug,
			  image_url: image_url,
		},
      });
      res.json(result);
  }