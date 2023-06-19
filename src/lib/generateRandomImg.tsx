export const generateRandomImg = (query = 'technology', sig = 1) => {
	return `https://source.unsplash.com/random/900×700/?${query}&sig=${sig}`;
};
