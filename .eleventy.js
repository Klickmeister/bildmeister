module.exports = (config) => {
	config.addPassthroughCopy('assets');

	return {
		dir: {
			includes: '_includes',
			layouts: '_layouts',
		},
	};
};
