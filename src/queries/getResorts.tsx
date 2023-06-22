import prisma from '../lib/prisma';
import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';

export const getResortsFromDb = async () => {
	const resorts = await prisma.resort.findMany();

	return resorts;
};
