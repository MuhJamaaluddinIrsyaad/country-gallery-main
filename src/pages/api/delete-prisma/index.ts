import prisma from '../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const { slug } = req.body;

    const deleteUser = await prisma.country.delete({
      where: {
        slug: slug,
      },
      });
      res.json(deleteUser);
  }