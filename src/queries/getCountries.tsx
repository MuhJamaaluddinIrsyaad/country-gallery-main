import prisma from '../lib/prisma';

export const getCountriesFromDb = async () => {
	const countries = await prisma.country.findMany();

	return countries;
};
