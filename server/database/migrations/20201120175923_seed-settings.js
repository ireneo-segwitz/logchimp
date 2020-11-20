// utils
const logger = require("../../utils/logger");

exports.up = function(knex) {
	return knex("settings")
		.insert([
			{
				title: "LogChimp",
				description: "Track user feedback to build better products",
				accentColor: "484d7c",
				logo: "https://cdn.logchimp.codecarrot.net/logchimp_circular_logo.png",
				icon: "https://cdn.logchimp.codecarrot.net/logchimp_circular_logo.png",
				isPoweredBy: true
			}
		])
		.then(() => {
			logger.info({
				code: "DATABASE_SEEDS",
				message: "Insert data: settings"
			});
		})
		.catch(err => {
			logger.error({
				code: "DATABASE_SEEDS",
				err
			});
		});
};

exports.down = function(knex) {
	return knex("settings").delete();
};
