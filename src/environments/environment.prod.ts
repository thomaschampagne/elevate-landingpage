export const environment = {
	production: true,
	api: {
		url: "https://stravistix-prod-${id}.herokuapp.com/api",
		totalEndpoints: 2,
		replacePattern: "${id}"
	},
	limitVersions: 10
};
