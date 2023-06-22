import prisma from '../lib/prisma';
import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';

export const getCountriesFromDb = async () => {
	const countries = await prisma.country.findMany();

	return countries;
};
